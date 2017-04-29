/** This file is part of KCFinder project
  *
  *      @desc File related functionality
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Pavel Tzonkov <sunhater@sunhater.com>
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

_.initFiles = () => {
    $(document).unbind('keydown').keydown(e => !_.selectAll(e));
    $('#files').unbind().scroll(() => {
        _.hideDialog();
    });

    $('.file').unbind().click(function(e) {
        $.$.unselect();
        _.selectFile($(this), e);

    }).rightClick((el, e) => {
        $.$.unselect();
        _.menuFile($(el), e);

    }).dblclick(function() {
        $.$.unselect();
        _.returnFile($(this));

    }).mouseup(() => {
        $.$.unselect();

    }).mouseout(() => {
        $.$.unselect();
    });

    $.each(_.shows, (i, val) => {
        var display = ($.$.kuki.get('show' + val) == "off")
            ? "none" : "block";
        $('#files .file div.' + val).css('display', display);
    });
    _.statusDir();
};

_.showFiles = (callBack, selected) => {
    _.fadeFiles();
    setTimeout(() => {
        var html = '';
        $.each(_.files, (i, file) => {
            var icon;
            var stamp = [];
            $.each(file, (key, val) => {
                stamp[stamp.length] = key + "|" + val;
            });
            stamp = encodeURIComponent(stamp.join("|"));
            if ($.$.kuki.get('view') == "list") {
                if (!i) html += '<table>';
                icon = $.$.getFileExtension(file.name);
                if (file.thumb)
                    icon = ".image";
                else if (!icon.length || !file.smallIcon)
                    icon = ".";
                icon = "themes/" + _.theme + "/img/files/small/" + icon + ".png";
                html += '<tr class="file"><td class="name" style="background-image:url(' + icon + ')">' + $.$.htmlData(file.name) + '</td><td class="time">' + file.date + '</td><td class="size">' + _.humanSize(file.size) + '</td></tr>';
                if (i == _.files.length - 1) html += '</table>';
            } else {
                if (file.thumb)
                    icon = _.baseGetData('thumb') + "&file=" + encodeURIComponent(file.name) + "&dir=" + encodeURIComponent(_.dir) + "&stamp=" + stamp;
                else if (file.smallThumb) {
                    icon = _.uploadURL + "/" + _.dir + "/" + file.name;
                    icon = $.$.escapeDirs(icon).replace(/\'/g, "%27");
                } else {
                    icon = file.bigIcon ? $.$.getFileExtension(file.name) : ".";
                    if (!icon.length) icon = ".";
                    icon = "themes/" + _.theme + "/img/files/big/" + icon + ".png";
                }
                html += '<div class="file"><div class="thumb" style="background-image:url(\'' + icon + '\')" ></div><div class="name">' + $.$.htmlData(file.name) + '</div><div class="time">' + file.date + '</div><div class="size">' + _.humanSize(file.size) + '</div></div>';
            }
        });
        $('#files').html('<div>' + html + '<div>');
        $.each(_.files, (i, file) => {
            var item = $('#files .file').get(i);
            $(item).data(file);
            if ($.$.inArray(file.name, selected) ||
                ((typeof selected != "undefined") && !selected.push && (file.name == selected))
            )
                $(item).addClass('selected');
        });
        $('#files > div').css({opacity:'', filter:''});
        if (callBack) callBack();
        _.initFiles();
    }, 200);
};

_.selectFile = (file, e) => {
    if (e.ctrlKey || e.metaKey) {
        if (file.hasClass('selected'))
            file.removeClass('selected');
        else
            file.addClass('selected');
        var files = $('.file.selected').get();
        var size = 0;
        var data;
        if (!files.length)
            _.statusDir();
        else {
            $.each(files, (i, cfile) => {
                size += parseInt($(cfile).data('size'));
            });
            size = _.humanSize(size);
            if (files.length > 1)
                $('#fileinfo').html(files.length + " " + _.label("selected files") + " (" + size + ")");
            else {
                data = $(files[0]).data();
                $('#fileinfo').html(data.name + " (" + _.humanSize(data.size) + ", " + data.date + ")");
            }
        }
    } else {
        data = file.data();
        $('.file').removeClass('selected');
        file.addClass('selected');
        $('#fileinfo').html(data.name + " (" + _.humanSize(data.size) + ", " + data.date + ")");
    }
};

_.selectAll = e => {
    if ((!e.ctrlKey && !e.metaKey) || ((e.keyCode != 65) && (e.keyCode != 97)))
        return false;
    var files = $('.file').get();
    if (files.length) {
        var size = 0;
        $.each(files, (i, file) => {
            if (!$(file).hasClass('selected'))
                $(file).addClass('selected');
            size += parseInt($(file).data('size'));
        });
        size = _.humanSize(size);
        $('#fileinfo').html(files.length + " " + _.label("selected files") + " (" + size + ")");
    }
    return true;
};

_.returnFile = file => {
    var button;
    var win;

    var fileURL = file.substr
        ? file : _.uploadURL + "/" + _.dir + "/" + file.data('name');

    fileURL = $.$.escapeDirs(fileURL);

    if (_.opener.name == "ckeditor") {
        _.opener.CKEditor.object.tools.callFunction(_.opener.CKEditor.funcNum, fileURL, "");
        window.close();

    } else if (_.opener.name == "fckeditor") {
        window.opener.SetUrl(fileURL) ;
        window.close() ;

    } else if (_.opener.name == "tinymce") {
        win = tinyMCEPopup.getWindowArg('window');
        win.document.getElementById(tinyMCEPopup.getWindowArg('input')).value = fileURL;
        if (win.getImageData) win.getImageData();
        if (typeof(win.ImageDialog) != "undefined") {
            if (win.ImageDialog.getImageData)
                win.ImageDialog.getImageData();
            if (win.ImageDialog.showPreviewImage)
                win.ImageDialog.showPreviewImage(fileURL);
        }
        tinyMCEPopup.close();

    } else if (_.opener.name == "tinymce4") {
        win = (window.opener ? window.opener : window.parent);
        $(win.document).find('#' + _.opener.TinyMCE.field).val(fileURL);
        win.tinyMCE.activeEditor.windowManager.close();

    } else if (_.opener.callBack) {

        if (window.opener && window.opener.KCFinder) {
            _.opener.callBack(fileURL);
            window.close();
        }

        if (window.parent && window.parent.KCFinder) {
            button = $('#toolbar a[href="kcact:maximize"]');
            if (button.hasClass('selected'))
                _.maximize(button);
            _.opener.callBack(fileURL);
        }

    } else if (_.opener.callBackMultiple) {
        if (window.opener && window.opener.KCFinder) {
            _.opener.callBackMultiple([fileURL]);
            window.close();
        }

        if (window.parent && window.parent.KCFinder) {
            button = $('#toolbar a[href="kcact:maximize"]');
            if (button.hasClass('selected'))
                _.maximize(button);
            _.opener.callBackMultiple([fileURL]);
        }

    }
};

_.returnFiles = files => {
    if (_.opener.callBackMultiple && files.length) {
        var rfiles = [];
        $.each(files, (i, file) => {
            rfiles[i] = _.uploadURL + "/" + _.dir + "/" + $(file).data('name');
            rfiles[i] = $.$.escapeDirs(rfiles[i]);
        });
        _.opener.callBackMultiple(rfiles);
        if (window.opener) window.close()
    }
};

_.returnThumbnails = files => {
    if (_.opener.callBackMultiple) {
        var rfiles = [];
        var j = 0;
        $.each(files, (i, file) => {
            if ($(file).data('thumb')) {
                rfiles[j] = _.thumbsURL + "/" + _.dir + "/" + $(file).data('name');
                rfiles[j] = $.$.escapeDirs(rfiles[j++]);
            }
        });
        _.opener.callBackMultiple(rfiles);
        if (window.opener) window.close()
    }
};

_.menuFile = (file, e) => {
    var data = file.data();
    var files = $('.file.selected').get();
    var html = '';

    if (file.hasClass('selected') && files.length && (files.length > 1)) {
        var thumb = false;
        var notWritable = 0;
        var cdata;
        $.each(files, (i, cfile) => {
            cdata = $(cfile).data();
            if (cdata.thumb) thumb = true;
            if (!data.writable) notWritable++;
        });
        if (_.opener.callBackMultiple) {
            html += '<li><a href="kcact:pick"><span>' + _.label("Select") + '</span></a></li>';
            if (thumb) html +=
                '<li><a href="kcact:pick_thumb"><span>' + _.label("Select Thumbnails") + '</span></a></li>';
        }
        if (data.thumb || data.smallThumb || _.support.zip) {
            html += (html.length ? '<li>-</li>' : "");
            if (data.thumb || data.smallThumb)
                html +='<li><a href="kcact:view"><span>' + _.label("View") + '</span></a></li>';
            if (_.support.zip) html += (html.length ? '<li>-</li>' : "") +
                '<li><a href="kcact:download"><span>' + _.label("Download") + '</span></a></li>';
        }

        if (_.access.files.copy || _.access.files.move)
            html += (html.length ? '<li>-</li>' : "") +
                '<li><a href="kcact:clpbrdadd"><span>' + _.label("Add to Clipboard") + '</span></a></li>';
        if (_.access.files['delete'])
            html += (html.length ? '<li>-</li>' : '') +
                '<li><a href="kcact:rm"' + ((notWritable == files.length) ? ' class="denied"' : "") +
                '><span>' + _.label("Delete") + '</span></a></li>';

        if (html.length) {
            html = '<ul>' + html + '</ul>';
            $('#dialog').html(html).find('ul').first().menu();
            _.showMenu(e);
        } else
            return;

        $('#dialog a[href="kcact:pick"]').click(() => {
            _.returnFiles(files);
            _.hideDialog();
            return false;
        });

        $('#dialog a[href="kcact:pick_thumb"]').click(() => {
            _.returnThumbnails(files);
            _.hideDialog();
            return false;
        });

        $('#dialog a[href="kcact:download"]').click(() => {
            _.hideDialog();
            var pfiles = [];
            $.each(files, (i, cfile) => {
                pfiles[i] = $(cfile).data('name');
            });
            _.post(_.baseGetData('downloadSelected'), {dir:_.dir, files:pfiles});
            return false;
        });

        $('#dialog a[href="kcact:clpbrdadd"]').click(() => {
            _.hideDialog();
            var msg = '';
            $.each(files, (i, cfile) => {
                var cdata = $(cfile).data();
                var failed = false;
                for (i = 0; i < _.clipboard.length; i++)
                    if ((_.clipboard[i].name == cdata.name) &&
                        (_.clipboard[i].dir == _.dir)
                    ) {
                        failed = true;
                        msg += cdata.name + ": " + _.label("This file is already added to the Clipboard.") + "\n";
                        break;
                    }

                if (!failed) {
                    cdata.dir = _.dir;
                    _.clipboard[_.clipboard.length] = cdata;
                }
            });
            _.initClipboard();
            if (msg.length) _.alert(msg.substr(0, msg.length - 1));
            return false;
        });

        $('#dialog a[href="kcact:rm"]').click(function() {
            if ($(this).hasClass('denied')) return false;
            _.hideDialog();
            var failed = 0;
            var dfiles = [];
            $.each(files, (i, cfile) => {
                var cdata = $(cfile).data();
                if (!cdata.writable)
                    failed++;
                else
                    dfiles[dfiles.length] = _.dir + "/" + cdata.name;
            });
            if (failed == files.length) {
                _.alert(_.label("The selected files are not removable."));
                return false;
            }

            var go = callBack => {
                _.fadeFiles();
                $.ajax({
                    type: "post",
                    dataType: "json",
                    url: _.baseGetData("rm_cbd"),
                    data: {files:dfiles},
                    async: false,
                    success(data) {
                        if (callBack) callBack();
                        _.check4errors(data);
                        _.refresh();
                    },
                    error() {
                        if (callBack) callBack();
                        $('#files > div').css({
                            opacity: "",
                            filter: ""
                        });
                        _.alert(_.label("Unknown error."));
                    }
                });
            };

            if (failed)
                _.confirm(
                    _.label("{count} selected files are not removable. Do you want to delete the rest?", {count:failed}),
                    go
                );

            else
                _.confirm(
                    _.label("Are you sure you want to delete all selected files?"),
                    go
                );

            return false;
        });
    } else {
        html += '<ul>';
        $('.file').removeClass('selected');
        file.addClass('selected');
        $('#fileinfo').html(data.name + " (" + _.humanSize(data.size) + ", " + data.date + ")");
        if (_.opener.callBack || _.opener.callBackMultiple) {
            html += '<li><a href="kcact:pick"><span>' + _.label("Select") + '</span></a></li>';
            if (data.thumb) html +=
                '<li><a href="kcact:pick_thumb"><span>' + _.label("Select Thumbnail") + '</span></a></li>';
            html += '<li>-</li>';
        }

        if (data.thumb || data.smallThumb)
            html += '<li><a href="kcact:view"><span>' + _.label("View") + '</span></a></li>';

        html +=
            '<li><a href="kcact:download"><span>' + _.label("Download") + '</span></a></li>';

        if (_.access.files.copy || _.access.files.move)
            html += '<li>-</li>' +
                '<li><a href="kcact:clpbrdadd"><span>' + _.label("Add to Clipboard") + '</span></a></li>';
        if (_.access.files.rename || _.access.files['delete'])
            html += '<li>-</li>';
        if (_.access.files.rename)
            html += '<li><a href="kcact:mv"' + (!data.writable ? ' class="denied"' : "") + '><span>' +
                _.label("Rename...") + '</span></a></li>';
        if (_.access.files['delete'])
            html += '<li><a href="kcact:rm"' + (!data.writable ? ' class="denied"' : "") + '><span>' +
                _.label("Delete") + '</span></a></li>';
        html += '</ul>';

        $('#dialog').html(html).find('ul').menu();
        _.showMenu(e);

        $('#dialog a[href="kcact:pick"]').click(() => {
            _.returnFile(file);
            _.hideDialog();
            return false;
        });

        $('#dialog a[href="kcact:pick_thumb"]').click(() => {
            var path = _.thumbsURL + "/" + _.dir + "/" + data.name;
            _.returnFile(path);
            _.hideDialog();
            return false;
        });

        $('#dialog a[href="kcact:download"]').click(() => {
            var html = '<form id="downloadForm" method="post" action="' + _.baseGetData('download') + '"><input type="hidden" name="dir" /><input type="hidden" name="file" /></form>';
            $('#dialog').html(html);
            $('#downloadForm input').get(0).value = _.dir;
            $('#downloadForm input').get(1).value = data.name;
            $('#downloadForm').submit();
            return false;
        });

        $('#dialog a[href="kcact:clpbrdadd"]').click(() => {
            for (i = 0; i < _.clipboard.length; i++)
                if ((_.clipboard[i].name == data.name) &&
                    (_.clipboard[i].dir == _.dir)
                ) {
                    _.hideDialog();
                    _.alert(_.label("This file is already added to the Clipboard."));
                    return false;
                }
            var cdata = data;
            cdata.dir = _.dir;
            _.clipboard[_.clipboard.length] = cdata;
            _.initClipboard();
            _.hideDialog();
            return false;
        });

        $('#dialog a[href="kcact:mv"]').click(e => {
            if (!data.writable) return false;
            _.fileNameDialog(
                e, {dir: _.dir, file: data.name},
                'newName', data.name, _.baseGetData("rename"), {
                    title: "New file name:",
                    errEmpty: "Please enter new file name.",
                    errSlash: "Unallowable characters in file name.",
                    errDot: "File name shouldn't begins with '.'"
                },
                () => {
                    _.refresh();
                }
            );
            return false;
        });

        $('#dialog a[href="kcact:rm"]').click(() => {
            if (!data.writable) return false;
            _.hideDialog();
            _.confirm(_.label("Are you sure you want to delete this file?"),
                callBack => {
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: _.baseGetData("delete"),
                        data: {dir: _.dir, file: data.name},
                        async: false,
                        success(data) {
                            if (callBack) callBack();
                            _.clearClipboard();
                            if (_.check4errors(data))
                                return;
                            _.refresh();
                        },
                        error() {
                            if (callBack) callBack();
                            _.alert(_.label("Unknown error."));
                        }
                    });
                }
            );
            return false;
        });
    }

    $('#dialog a[href="kcact:view"]').click(() => {
        _.hideDialog();
        var ts = new Date().getTime();
        var showImage = data => {
            var url = $.$.escapeDirs(_.uploadURL + "/" + _.dir + "/" + data.name) + "?ts=" + ts;
            var img = new Image();

            $('#loading').html(_.label("Loading image...")).css('display', "inline");
            img.src = url;
            img.onerror = () => {
                _.lock = false;
                $('#loading').css('display', "none");
                _.alert(_.label("Unknown error."));
                $(document).unbind('keydown').keydown(e => !_.selectAll(e));
                _.refresh();
            };
            var onImgLoad = () => {
                _.lock = false;
                $('#files .file').each(function() {
                    if ($(this).data('name') == data.name)
                        _.ssImage = this;
                });
                $('#loading').css('display', "none");
                $('#dialog').html('<div class="slideshow"><img /></div>');
                $('#dialog img').attr({
                    src: url,
                    title: data.name
                }).fadeIn('fast', () => {
                    var o_w = $('#dialog').outerWidth();
                    var o_h = $('#dialog').outerHeight();
                    var f_w = $(window).width() - 30;
                    var f_h = $(window).height() - 30;
                    if ((o_w > f_w) || (o_h > f_h)) {
                        if ((f_w / f_h) > (o_w / o_h))
                            f_w = parseInt((o_w * f_h) / o_h);
                        else if ((f_w / f_h) < (o_w / o_h))
                            f_h = parseInt((o_h * f_w) / o_w);
                        $('#dialog img').attr({
                            width: f_w,
                            height: f_h
                        });
                    }
                    $('#dialog').unbind('click').click(e => {
                        _.hideDialog();
                        $(document).unbind('keydown');
                        $(document).keydown(e => !_.selectAll(e));
                        if (_.ssImage) {
                            _.selectFile($(_.ssImage), e);
                        }
                    });
                    _.showDialog();
                    var images = [];
                    $.each(_.files, (i, file) => {
                        if (file.thumb || file.smallThumb)
                            images[images.length] = file;
                    });
                    if (images.length)
                        $.each(images, (i, image) => {
                            if (image.name == data.name) {
                                $(document).unbind('keydown').keydown(e => {
                                    if (images.length > 1) {
                                        if (!_.lock && (e.keyCode == 37)) {
                                            var nimg = i
                                                ? images[i - 1]
                                                : images[images.length - 1];
                                            _.lock = true;
                                            showImage(nimg);
                                        }
                                        if (!_.lock && (e.keyCode == 39)) {
                                            var nimg = (i >= images.length - 1)
                                                ? images[0]
                                                : images[i + 1];
                                            _.lock = true;
                                            showImage(nimg);
                                        }
                                    }
                                    if (e.keyCode == 27) {
                                        _.hideDialog();
                                        $(document).unbind('keydown').keydown(e => !_.selectAll(e));
                                    }
                                });
                            }
                        });
                });
            };
            if (img.complete)
                onImgLoad();
            else
                img.onload = onImgLoad;
        };
        showImage(data);
        return false;
    });
};

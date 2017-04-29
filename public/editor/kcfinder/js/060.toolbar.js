/** This file is part of KCFinder project
  *
  *      @desc Toolbar functionality
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Pavel Tzonkov <sunhater@sunhater.com>
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

_.initToolbar = () => {
    $('#toolbar a').click(() => {
        _.hideDialog();
    });

    if (!$.$.kuki.isSet('displaySettings'))
        $.$.kuki.set('displaySettings', "off");

    if ($.$.kuki.get('displaySettings') == "on") {
        $('#toolbar a[href="kcact:settings"]').addClass('selected');
        $('#settings').css('display', "block");
        _.resize();
    }

    $('#toolbar a[href="kcact:settings"]').click(function () {
        if ($('#settings').css('display') == "none") {
            $(this).addClass('selected');
            $.$.kuki.set('displaySettings', "on");
            $('#settings').css('display', "block");
            _.fixFilesHeight();
        } else {
            $(this).removeClass('selected');
            $.$.kuki.set('displaySettings', "off");
            $('#settings').css('display', "none");
            _.fixFilesHeight();
        }
        return false;
    });

    $('#toolbar a[href="kcact:refresh"]').click(() => {
        _.refresh();
        return false;
    });

    if (window.opener || (_.opener.name == "tinymce") || $('iframe[name]', window.parent.document).get(0))
        $('#toolbar a[href="kcact:maximize"]').click(function() {
            _.maximize(this);
            return false;
        });
    else
        $('#toolbar a[href="kcact:maximize"]').css('display', "none");

    $('#toolbar a[href="kcact:about"]').click(() => {
        var html = '<div class="box about">' +
            '<div class="head"><a href="http://kcfinder.sunhater.com" target="_blank">KCFinder</a> ' + _.version + '</div>';
        if (_.support.check4Update)
            html += '<div id="checkver"><span class="loading"><span>' + _.label("Checking for new version...") + '</span></span></div>';
        html +=
            '<div>' + _.label("Licenses:") + ' <a href="http://opensource.org/licenses/GPL-3.0" target="_blank">GPLv3</a> & <a href="http://opensource.org/licenses/LGPL-3.0" target="_blank">LGPLv3</a></div>' +
            '<div>Copyright &copy;2010-2014 Pavel Tzonkov</div>' +
        '</div>';

        var dlg = _.dialog(_.label("About"), html, {width: 301});

        setTimeout(() => {
            $.ajax({
                dataType: "json",
                url: _.baseGetData('check4Update'),
                async: true,
                success(data) {
                    if (!dlg.html().length)
                        return;
                    var span = $('#checkver');
                    span.removeClass('loading');
                    if (!data.version) {
                        span.html(_.label("Unable to connect!"));
                        return;
                    }
                    if (_.version < data.version)
                        span.html('<a href="http://kcfinder.sunhater.com/download" target="_blank">' + _.label("Download version {version} now!", {version: data.version}) + '</a>');
                    else
                        span.html(_.label("KCFinder is up to date!"));
                },
                error() {
                    if (!dlg.html().length)
                        return;
                    $('#checkver').removeClass('loading').html(_.label("Unable to connect!"));
                }
            });
        }, 1000);

        return false;
    });

    _.initUploadButton();
};

_.initUploadButton = () => {
    var btn = $('#toolbar a[href="kcact:upload"]');
    if (!_.access.files.upload) {
        btn.css('display', "none");
        return;
    }
    var top = btn.get(0).offsetTop;
    var width = btn.outerWidth();
    var height = btn.outerHeight();
    $('#toolbar').prepend('<div id="upload" style="top:' + top + 'px;width:' + width + 'px;height:' + height + 'px"><form enctype="multipart/form-data" method="post" target="uploadResponse" action="' + _.baseGetData('upload') + '"><input type="file" name="upload[]" onchange="_.uploadFile(this.form)" style="height:' + height + 'px" multiple="multiple" /><input type="hidden" name="dir" value="" /></form></div>');
    $('#upload input').css('margin-left', "-" + ($('#upload input').outerWidth() - width));
    $('#upload').mouseover(() => {
        $('#toolbar a[href="kcact:upload"]').addClass('hover');
    }).mouseout(() => {
        $('#toolbar a[href="kcact:upload"]').removeClass('hover');
    });
};

_.uploadFile = form => {
    if (!_.dirWritable) {
        _.alert(_.label("Cannot write to upload folder."));
        $('#upload').detach();
        _.initUploadButton();
        return;
    }
    form.elements[1].value = _.dir;
    $('<iframe id="uploadResponse" name="uploadResponse" src="javascript:;"></iframe>').prependTo(document.body);
    $('#loading').html(_.label("Uploading file...")).css('display', "inline");
    form.submit();
    $('#uploadResponse').load(function() {
        var response = $(this).contents().find('body').html();
        $('#loading').css('display', "none");
        response = response.split("\n");
        var selected = [];
        var errors = [];
        $.each(response, (i, row) => {
            if (row.substr(0, 1) == "/")
                selected[selected.length] = row.substr(1, row.length - 1);
            else
                errors[errors.length] = row;
        });
        if (errors.length)
            _.alert(errors.join("\n"));
        if (!selected.length)
            selected = null;
        _.refresh(selected);
        $('#upload').detach();
        setTimeout(() => {
            $('#uploadResponse').detach();
        }, 1);
        _.initUploadButton();
    });
};

_.maximize = button => {
    if (window.opener) {
        window.moveTo(0, 0);
        width = screen.availWidth;
        height = screen.availHeight;
        if ($.agent.opera)
            height -= 50;
        window.resizeTo(width, height);

    } else if (_.opener.name == "tinymce") {
        var win;
        var ifr;
        var id;

        $('iframe', window.parent.document).each(function() {
            if (/^mce_\d+_ifr$/.test($(this).attr('id'))) {
                id = parseInt($(this).attr('id').replace(/^mce_(\d+)_ifr$/, "$1"));
                win = $('#mce_' + id, window.parent.document);
                ifr = $('#mce_' + id + '_ifr', window.parent.document);
            }
        });

        if (typeof id == "undefined")
            return;

        if ($(button).hasClass('selected')) {
            $(button).removeClass('selected');
            win.css({
                left: _.maximizeMCE.left,
                top: _.maximizeMCE.top,
                width: _.maximizeMCE.width,
                height: _.maximizeMCE.height
            });
            ifr.css({
                width: _.maximizeMCE.width - _.maximizeMCE.Hspace,
                height: _.maximizeMCE.height - _.maximizeMCE.Vspace
            });

        } else {
            $(button).addClass('selected')
            _.maximizeMCE = {
                width: parseInt(win.css('width')),
                height: parseInt(win.css('height')),
                left: win.position().left,
                top: win.position().top,
                Hspace: parseInt(win.css('width')) - parseInt(ifr.css('width')),
                Vspace: parseInt(win.css('height')) - parseInt(ifr.css('height'))
            };
            var width = $(window.parent).width();
            var height = $(window.parent).height();
            win.css({
                left: $(window.parent).scrollLeft(),
                top: $(window.parent).scrollTop(),
                width,
                height
            });
            ifr.css({
                width: width - _.maximizeMCE.Hspace,
                height: height - _.maximizeMCE.Vspace
            });
        }
    } else if ($('iframe', window.parent.document).get(0)) {
        var width;
        var height;
        var ifrm = $('iframe[name="' + window.name + '"]', window.parent.document);

        if ($(button).hasClass('selected')) {
            $(button).removeClass('selected');
            if (_.maximizeThread) {
                clearInterval(_.maximizeThread);
                _.maximizeThread = null;
            }
            if (_.maximizeW) _.maximizeW = null;
            if (_.maximizeH) _.maximizeH = null;
            $.each($('*', window.parent.document).get(), (i, e) => {
                e.style.display = _.maximizeDisplay[i];
            });
            ifrm.css({
                display: _.maximizeCSS.display,
                position: _.maximizeCSS.position,
                left: _.maximizeCSS.left,
                top: _.maximizeCSS.top,
                width: _.maximizeCSS.width,
                height: _.maximizeCSS.height
            });
            $(window.parent).scrollLeft(_.maximizeLeft);
            $(window.parent).scrollTop(_.maximizeTop);

        } else {
            $(button).addClass('selected');
            _.maximizeCSS = {
                display: ifrm.css('display'),
                position: ifrm.css('position'),
                left: ifrm.css('left'),
                top: ifrm.css('top'),
                width: ifrm.outerWidth(),
                height: ifrm.outerHeight()
            };
            _.maximizeTop = $(window.parent).scrollTop();
            _.maximizeLeft = $(window.parent).scrollLeft();
            _.maximizeDisplay = [];
            $.each($('*', window.parent.document).get(), (i, e) => {
                _.maximizeDisplay[i] = $(e).css('display');
                $(e).css('display', "none");
            });

            ifrm.css({
                display: "block",
                position: "absolute"
            }).parents().css('display', "block");
            var resize = () => {
                width = $(window.parent).width();
                height = $(window.parent).height();
                if (!_.maximizeW || (_.maximizeW != width) ||
                    !_.maximizeH || (_.maximizeH != height)
                ) {
                    _.maximizeW = width;
                    _.maximizeH = height;
                    ifrm.css({
                        width,
                        height
                    });
                    _.resize();
                }
            }
            if ((ifrm.offset().left == ifrm.position().left) &&
                (ifrm.offset().top == ifrm.position().top)
            )
                ifrm.css({left: 0, top: 0});
            else
                ifrm.css({
                    left: - ifrm.offset().left,
                    top: - ifrm.offset().top
                });

            resize();
            _.maximizeThread = setInterval(resize, 250);
        }
    }
};

_.refresh = selected => {
    _.fadeFiles();
    $.ajax({
        type: "post",
        dataType: "json",
        url: _.baseGetData("chDir"),
        data: {dir: _.dir},
        async: false,
        success(data) {
            if (_.check4errors(data))
                return;
            _.dirWritable = data.dirWritable;
            _.files = data.files ? data.files : [];
            _.orderFiles(null, selected);
            _.statusDir();
        },
        error() {
            $('#files > div').css({opacity: "", filter: ""});
            $('#files').html(_.label("Unknown error."));
        }
    });
};

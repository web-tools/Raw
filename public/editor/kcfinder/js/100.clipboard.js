/** This file is part of KCFinder project
  *
  *      @desc Clipboard functionality
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Pavel Tzonkov <sunhater@sunhater.com>
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

_.initClipboard = () => {
    if (!_.clipboard || !_.clipboard.length) return;
    var size = 0;
    $.each(_.clipboard, (i, val) => {
        size += parseInt(val.size);
    });
    size = _.humanSize(size);
    $('#clipboard').html('<div title="' + _.label("Clipboard") + ' (' + _.clipboard.length + ' ' + _.label("files") + ', ' + size + ')" onclick="_.openClipboard()"></div>');
    var resize = () => {
        $('#clipboard').css({
            left: $(window).width() - $('#clipboard').outerWidth(),
            top: $(window).height() - $('#clipboard').outerHeight()
        });
    };
    resize();
    $('#clipboard').css('display', "block");
    $(window).unbind();
    $(window).resize(() => {
        _.resize();
        resize();
    });
};

_.openClipboard = () => {
    if (!_.clipboard || !_.clipboard.length) return;
    if ($('#dialog a[href="kcact:cpcbd"]').html()) {
        $('#clipboard').removeClass('selected');
        _.hideDialog();
        return;
    }
    var html = '<ul><li class="list">';
    $.each(_.clipboard, (i, val) => {
        var icon = $.$.getFileExtension(val.name);
        if (val.thumb)
            icon = ".image";
        else if (!val.smallIcon || !icon.length)
            icon = ".";
        icon = "themes/" + _.theme + "/img/files/small/" + icon + ".png";
        html += '<a title="' + _.label("Click to remove from the Clipboard") + '" onclick="_.removeFromClipboard(' + i + ')"' + ((i == 0) ? ' class="first"' : "") + '><span style="background-image:url(' + $.$.escapeDirs(icon) + ')">' + $.$.htmlData($.$.basename(val.name)) + '</span></a>';
    });
    html += '</li><li class="div-files">-</li>';
    if (_.support.zip) html +=
        '<li><a href="kcact:download"><span>' + _.label("Download files") + '</span></a></li>';
    if (_.access.files.copy || _.access.files.move || _.access.files['delete'])
        html += '<li>-</li>';
    if (_.access.files.copy)
        html += '<li><a href="kcact:cpcbd"' + (!_.dirWritable ? ' class="denied"' : '') + '><span>' +
            _.label("Copy files here") + '</span></a></li>';
    if (_.access.files.move)
        html += '<li><a href="kcact:mvcbd"' + (!_.dirWritable ? ' class="denied"' : '') + '><span>' +
            _.label("Move files here") + '</span></a></li>';
    if (_.access.files['delete'])
        html += '<li><a href="kcact:rmcbd"><span>' + _.label("Delete files") + '</span></a></li>';
    html += '<li>-</li>' +
        '<li><a href="kcact:clrcbd"><span>' + _.label("Clear the Clipboard") + '</span></a></li></ul>';

    setTimeout(() => {
        $('#clipboard').addClass('selected');
        $('#dialog').html(html).find('ul').first().menu();
        $('#dialog a[href="kcact:download"]').click(() => {
            _.hideDialog();
            _.downloadClipboard();
            return false;
        });
        $('#dialog a[href="kcact:cpcbd"]').click(() => {
            if (!_.dirWritable) return false;
            _.hideDialog();
            _.copyClipboard(_.dir);
            return false;
        });
        $('#dialog a[href="kcact:mvcbd"]').click(() => {
            if (!_.dirWritable) return false;
            _.hideDialog();
            _.moveClipboard(_.dir);
            return false;
        });
        $('#dialog a[href="kcact:rmcbd"]').click(() => {
            _.hideDialog();
            _.confirm(
                _.label("Are you sure you want to delete all files in the Clipboard?"),
                callBack => {
                    if (callBack) callBack();
                    _.deleteClipboard();
                }
            );
            return false;
        });
        $('#dialog a[href="kcact:clrcbd"]').click(() => {
            _.hideDialog();
            _.clearClipboard();
            return false;
        });

        var left = $(window).width() - $('#dialog').outerWidth();
        var top = $(window).height() - $('#dialog').outerHeight() - $('#status').outerHeight();
        var lheight = top + $('#dialog').outerTopSpace();
        $('#dialog .list').css({
            'max-height': lheight,
            'overflow-y': "auto",
            'overflow-x': "hidden"
        });
        top = $(window).height() - $('#dialog').outerHeight(true) - $('#status').outerHeight(true);
        $('#dialog').css({
            left: left - 5,
            top
        }).fadeIn("fast");
    }, 1);
};

_.removeFromClipboard = i => {
    if (!_.clipboard || !_.clipboard[i]) return false;
    if (_.clipboard.length == 1) {
        _.clearClipboard();
        _.hideDialog();
        return;
    }

    if (i < _.clipboard.length - 1) {
        var last = _.clipboard.slice(i + 1);
        _.clipboard = _.clipboard.slice(0, i);
        _.clipboard = _.clipboard.concat(last);
    } else
        _.clipboard.pop();

    _.initClipboard();
    _.hideDialog();
    _.openClipboard();
    return true;
};

_.copyClipboard = dir => {
    if (!_.clipboard || !_.clipboard.length) return;
    var files = [];
    var failed = 0;
    for (i = 0; i < _.clipboard.length; i++)
        if (_.clipboard[i].readable)
            files[i] = _.clipboard[i].dir + "/" + _.clipboard[i].name;
        else
            failed++;
    if (_.clipboard.length == failed) {
        _.alert(_.label("The files in the Clipboard are not readable."));
        return;
    }
    var go = callBack => {
        if (dir == _.dir)
            _.fadeFiles();
        $.ajax({
            type: "post",
            dataType: "json",
            url: _.baseGetData("cp_cbd"),
            data: {dir, files},
            async: false,
            success(data) {
                if (callBack) callBack();
                _.check4errors(data);
                _.clearClipboard();
                if (dir == _.dir)
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
            _.label("{count} files in the Clipboard are not readable. Do you want to copy the rest?", {count:failed}),
            go
        )
    else
        go();
};

_.moveClipboard = dir => {
    if (!_.clipboard || !_.clipboard.length) return;
    var files = [];
    var failed = 0;
    for (i = 0; i < _.clipboard.length; i++)
        if (_.clipboard[i].readable && _.clipboard[i].writable)
            files[i] = _.clipboard[i].dir + "/" + _.clipboard[i].name;
        else
            failed++;
    if (_.clipboard.length == failed) {
        _.alert(_.label("The files in the Clipboard are not movable."))
        return;
    }

    var go = callBack => {
        _.fadeFiles();
        $.ajax({
            type: "post",
            dataType: "json",
            url: _.baseGetData("mv_cbd"),
            data: {dir, files},
            async: false,
            success(data) {
                if (callBack) callBack();
                _.check4errors(data);
                _.clearClipboard();
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
            _.label("{count} files in the Clipboard are not movable. Do you want to move the rest?", {count: failed}),
            go
        );
    else
        go();
};

_.deleteClipboard = () => {
    if (!_.clipboard || !_.clipboard.length) return;
    var files = [];
    var failed = 0;
    for (i = 0; i < _.clipboard.length; i++)
        if (_.clipboard[i].readable && _.clipboard[i].writable)
            files[i] = _.clipboard[i].dir + "/" + _.clipboard[i].name;
        else
            failed++;
    if (_.clipboard.length == failed) {
        _.alert(_.label("The files in the Clipboard are not removable."))
        return;
    }
    var go = callBack => {
        _.fadeFiles();
        $.ajax({
            type: "post",
            dataType: "json",
            url: _.baseGetData("rm_cbd"),
            data: {files},
            async: false,
            success(data) {
                if (callBack) callBack();
                _.check4errors(data);
                _.clearClipboard();
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
            _.label("{count} files in the Clipboard are not removable. Do you want to delete the rest?", {count: failed}),
            go
        );
    else
        go();
};

_.downloadClipboard = () => {
    if (!_.clipboard || !_.clipboard.length) return;
    var files = [];
    for (i = 0; i < _.clipboard.length; i++)
        if (_.clipboard[i].readable)
            files[i] = _.clipboard[i].dir + "/" + _.clipboard[i].name;
    if (files.length)
        _.post(_.baseGetData('downloadClipboard'), {files});
};

_.clearClipboard = () => {
    $('#clipboard').html("");
    _.clipboard = [];
};

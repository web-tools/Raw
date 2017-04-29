/** This file is part of KCFinder project
  *
  *      @desc Miscellaneous functionality
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Pavel Tzonkov <sunhater@sunhater.com>
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

_.drag = function(ev, dd) {
    var top = dd.offsetY;
    var left = dd.offsetX;
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (top + $(this).outerHeight() > $(window).height())
        top = $(window).height() - $(this).outerHeight();
    if (left + $(this).outerWidth() > $(window).width())
        left = $(window).width() - $(this).outerWidth();
    $(this).css({
        top,
        left
    });
};

_.showDialog = e => {
    $('#dialog').css({left: 0, top: 0});
    _.shadow();
    $('#dialog').css('display', "block");

    if (e) {
        var left = e.pageX - parseInt($('#dialog').outerWidth() / 2);
        var top = e.pageY - parseInt($('#dialog').outerHeight() / 2);
        if (left < 0) left = 0;
        if (top < 0) top = 0;
        if (($('#dialog').outerWidth() + left) > $(window).width())
            left = $(window).width() - $('#dialog').outerWidth();
        if (($('#dialog').outerHeight() + top) > $(window).height())
            top = $(window).height() - $('#dialog').outerHeight();
        $('#dialog').css({
            left,
            top
        });
    } else
        $('#dialog').css({
            left: parseInt(($(window).width() - $('#dialog').outerWidth()) / 2),
            top: parseInt(($(window).height() - $('#dialog').outerHeight()) / 2)
        });
    $(document).unbind('keydown').keydown(e => {
        if (e.keyCode == 27)
            _.hideDialog();
    });
};

_.hideDialog = () => {
    _.unshadow();
    if ($('#clipboard').hasClass('selected'))
        $('#clipboard').removeClass('selected');
    $('div.folder > a > span.folder').removeClass('context');
    $('#dialog').css('display', "none").html("").data('title', null).unbind().click(() => false);
    $(document).unbind('keydown').keydown(e => !_.selectAll(e));
};

_.shadow = () => {
    $('#shadow').css('display', "block");
};

_.unshadow = () => {
    $('#shadow').css('display', "none");
};

_.showMenu = e => {
    var left = e.pageX;
    var top = e.pageY;
    if (($('#dialog').outerWidth() + left) > $(window).width())
        left = $(window).width() - $('#dialog').outerWidth();
    if (($('#dialog').outerHeight() + top) > $(window).height())
        top = $(window).height() - $('#dialog').outerHeight();
    $('#dialog').css({
        left,
        top,
        display: "none"
    }).fadeIn('fast');
};

_.fileNameDialog = (e, post, inputName, inputValue, url, labels, callBack, selectAll) => {
    _.hideDialog();
    var html = '<form method="post" action="javascript:;"><input name="' + inputName + '" type="text" /></form>';

    var submit = () => {
        var name = dlg.find('[type="text"]').get(0);
        name.value = $.trim(name.value);
        if (name.value == "") {
            _.alert(_.label(labels.errEmpty), () => {
                name.focus();
            });
            return false;
        } else if (/[\/\\]/g.test(name.value)) {
            _.alert(_.label(labels.errSlash), () => {
                name.focus();
            });
            return false;
        } else if (name.value.substr(0, 1) == ".") {
            _.alert(_.label(labels.errDot), () => {
                name.focus();
            });
            return false;
        }
        post[inputName] = name.value;
        $.ajax({
            type: "post",
            dataType: "json",
            url,
            data: post,
            async: false,
            success(data) {
                if (_.check4errors(data, false))
                    return;
                if (callBack) callBack(data);
                dlg.dialog("destroy").detach();
            },
            error() {
                _.alert(_.label("Unknown error."));
            }
        });
        return false;
    };

    var dlg = _.dialog(_.label(labels.title), html, {
        width: 351,
        buttons: [
            {
                text: _.label("OK"),
                click() {
                    submit();
                }
            },
            {
                text: _.label("Cancel"),
                click() {
                    $(this).dialog('destroy').detach();
                }
            }
        ]
    });

    var field = dlg.find('[type="text"]');

    field.uniform().attr('value', inputValue).css('width', 310);
    dlg.find('form').submit(submit);

    if (!selectAll && /^(.+)\.[^\.]+$/ .test(inputValue))
        field.selection(0, inputValue.replace(/^(.+)\.[^\.]+$/, "$1").length);
    else {
        field.get(0).focus();
        field.get(0).select();
    }
};

_.orderFiles = (callBack, selected) => {
    var order = $.$.kuki.get('order');
    var desc = ($.$.kuki.get('orderDesc') == "on");

    if (!_.files || !_.files.sort)
        _.files = [];

    _.files = _.files.sort((a, b) => {
        var a1;
        var b1;
        var arr;
        if (!order) order = "name";

        if (order == "date") {
            a1 = a.mtime;
            b1 = b.mtime;
        } else if (order == "type") {
            a1 = $.$.getFileExtension(a.name);
            b1 = $.$.getFileExtension(b.name);
        } else if (order == "size") {
            a1 = a.size;
            b1 = b.size;
        } else {
            a1 = a[order].toLowerCase();
            b1 = b[order].toLowerCase();
        }

        if ((order == "size") || (order == "date")) {
            if (a1 < b1) return desc ? 1 : -1;
            if (a1 > b1) return desc ? -1 : 1;
        }

        if (a1 == b1) {
            a1 = a.name.toLowerCase();
            b1 = b.name.toLowerCase();
            arr = [a1, b1];
            arr = arr.sort();
            return (arr[0] == a1) ? -1 : 1;
        }

        arr = [a1, b1];
        arr = arr.sort();
        if (arr[0] == a1) return desc ? 1 : -1;
        return desc ? -1 : 1;
    });

    _.showFiles(callBack, selected);
    _.initFiles();
};

_.humanSize = size => {
    if (size < 1024) {
        size = size.toString() + " B";
    } else if (size < 1048576) {
        size /= 1024;
        size = parseInt(size).toString() + " KB";
    } else if (size < 1073741824) {
        size /= 1048576;
        size = parseInt(size).toString() + " MB";
    } else if (size < 1099511627776) {
        size /= 1073741824;
        size = parseInt(size).toString() + " GB";
    } else {
        size /= 1099511627776;
        size = parseInt(size).toString() + " TB";
    }
    return size;
};

_.baseGetData = act => {
    var data = "browse.php?type=" + encodeURIComponent(_.type) + "&lng=" + _.lang;
    if (act)
        data += "&act=" + act;
    if (_.cms)
        data += "&cms=" + _.cms;
    return data;
};

_.label = (index, data) => {
    var label = _.labels[index] ? _.labels[index] : index;
    if (data)
        $.each(data, (key, val) => {
            label = label.replace("{" + key + "}", val);
        });
    return label;
};

_.check4errors = (data, shadow) => {
    if (!data.error)
        return false;
    var msg;
    if (data.error.join)
        msg = data.error.join("\n");
    else
        msg = data.error;
    _.alert(msg);
    return true;
};

_.post = (url, data) => {
    var html = '<form id="postForm" method="post" action="' + url + '">';
    $.each(data, (key, val) => {
        if ($.isArray(val))
            $.each(val, (i, aval) => {
                html += '<input type="hidden" name="' + $.$.htmlValue(key) + '[]" value="' + $.$.htmlValue(aval) + '" />';
            });
        else
            html += '<input type="hidden" name="' + $.$.htmlValue(key) + '" value="' + $.$.htmlValue(val) + '" />';
    });
    html += '</form>';
    $('#dialog').html(html).css('display', "block");
    $('#postForm').get(0).submit();
};

_.fadeFiles = () => {
    $('#files > div').css({
        opacity: "0.4",
        filter: "alpha(opacity=40)"
    });
};

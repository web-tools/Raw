/** This file is part of KCFinder project
  *
  *      @desc Settings panel functionality
  *   @package KCFinder
  *   @version 3.0-dev
  *    @author Pavel Tzonkov <sunhater@sunhater.com>
  * @copyright 2010-2014 KCFinder Project
  *   @license http://opensource.org/licenses/GPL-3.0 GPLv3
  *   @license http://opensource.org/licenses/LGPL-3.0 LGPLv3
  *      @link http://kcfinder.sunhater.com
  */

_.initSettings = () => {

    $('#settings fieldset, #settings input, #settings label').uniform();

    if (!_.shows.length) {
        var showInputs = $('#show input[type="checkbox"]').toArray();
        $.each(showInputs, (i, input) => {
            _.shows[i] = input.name;
        });
    }

    var shows = _.shows;

    if (!$.$.kuki.isSet('showname')) {
        $.$.kuki.set('showname', "on");
        $.each(shows, (i, val) => {
            if (val != "name") $.$.kuki.set('show' + val, "off");
        });
    }

    $('#show input[type="checkbox"]').click(function() {
        var kuki = $(this).get(0).checked ? "on" : "off";
        $.$.kuki.set('show' + $(this).get(0).name, kuki)
        if ($(this).get(0).checked)
            $('#files .file div.' + $(this).get(0).name).css('display', "block");
        else
            $('#files .file div.' + $(this).get(0).name).css('display', "none");
    });

    $.each(shows, (i, val) => {
        var checked = ($.$.kuki.get('show' + val) == "on") ? "checked" : "";
        $('#show input[name="' + val + '"]').get(0).checked = checked;
    });

    if (!_.orders.length) {
        var orderInputs = $('#order input[type="radio"]').toArray();
        $.each(orderInputs, (i, input) => {
            _.orders[i] = input.value;
        });
    }

    var orders = _.orders;

    if (!$.$.kuki.isSet('order'))
        $.$.kuki.set('order', "name");

    if (!$.$.kuki.isSet('orderDesc'))
        $.$.kuki.set('orderDesc', "off");

    $('#order input[value="' + $.$.kuki.get('order') + '"]').get(0).checked = true;
    $('#order input[name="desc"]').get(0).checked = ($.$.kuki.get('orderDesc') == "on");

    $('#order input[type="radio"]').click(function() {
        $.$.kuki.set('order', $(this).get(0).value);
        _.orderFiles();
    });

    $('#order input[name="desc"]').click(function() {
        $.$.kuki.set('orderDesc', $(this).get(0).checked ? 'on' : "off");
        _.orderFiles();
    });

    if (!$.$.kuki.isSet('view'))
        $.$.kuki.set('view', "thumbs");

    if ($.$.kuki.get('view') == "list")
        $('#show input').each(function() {
            this.checked = this.disabled = true;
            $(this).parent().addClass('checked').parent().addClass('disabled');
        });

    $('#view input[value="' + $.$.kuki.get('view') + '"]').get(0).checked = true;

    $('#view input').click(function() {
        var view = $(this).attr('value');
        if ($.$.kuki.get('view') != view) {
            $.$.kuki.set('view', view);
            if (view == "list") {
                $('#show input').each(function() {
                    this.checked = this.disabled = true;
                    $(this).parent().addClass('checked').parent().addClass('disabled');
                });
            } else {
                $.each(_.shows, (i, val) => {
                    var input = $('#show input[name="' + val + '"]');
                    input.get(0).checked = ($.$.kuki.get('show' + val) == "on");
                    if (!input.get(0).checked)
                        input.parent().removeClass('checked');
                });
                $('#show input').each(function() {
                    this.disabled = false;
                    $(this).parent().parent().removeClass('disabled');
                });
            }
        }
        _.refresh();
    });
};

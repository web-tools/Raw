/**
 * Select2 Bulgarian translation.
 * 
 * @author  Lubomir Vikev <lubomirvikev@gmail.com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Няма намерени съвпадения"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Моля въведете още " + n + " символ" + (n > 1 ? "а" : ""); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Моля въведете с " + n + " по-малко символ" + (n > 1 ? "а" : ""); },
        formatSelectionTooBig(limit) { return "Можете да направите до " + limit + (limit > 1 ? " избора" : " избор"); },
        formatLoadMore(pageNumber) { return "Зареждат се още…"; },
        formatSearching() { return "Търсене…"; }
    });
}))(jQuery);

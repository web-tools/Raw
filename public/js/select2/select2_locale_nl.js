/**
 * Select2 Dutch translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Geen resultaten gevonden"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Vul " + n + " karakter" + (n == 1? "" : "s") + " meer in"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Vul " + n + " karakter" + (n == 1? "" : "s") + " minder in"; },
        formatSelectionTooBig(limit) { return "Maximaal " + limit + " item" + (limit == 1 ? "" : "s") + " toegestaan"; },
        formatLoadMore(pageNumber) { return "Meer resultaten laden…"; },
        formatSearching() { return "Zoeken…"; }
    });
}))(jQuery);
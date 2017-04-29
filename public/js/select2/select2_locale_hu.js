/**
 * Select2 Hungarian translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Nincs találat."; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Túl rövid. Még " + n + " karakter hiányzik."; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Túl hosszú. " + n + " karakterrel több, mint kellene."; },
        formatSelectionTooBig(limit) { return "Csak " + limit + " elemet lehet kiválasztani."; },
        formatLoadMore(pageNumber) { return "Töltés…"; },
        formatSearching() { return "Keresés…"; }
    });
}))(jQuery);

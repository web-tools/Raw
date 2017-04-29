/**
 * Select2 Norwegian translation.
 *
 * Author: Torgeir Veimo <torgeir.veimo@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Ingen treff"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Vennligst skriv inn " + n + (n>1 ? " flere tegn" : " tegn til"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Vennligst fjern " + n + " tegn"; },
        formatSelectionTooBig(limit) { return "Du kan velge maks " + limit + " elementer"; },
        formatLoadMore(pageNumber) { return "Laster flere resultater…"; },
        formatSearching() { return "Søker…"; }
    });
}))(jQuery);


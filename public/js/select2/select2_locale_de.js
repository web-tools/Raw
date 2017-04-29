/**
 * Select2 German translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Keine Übereinstimmungen gefunden"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Bitte " + n + " Zeichen mehr eingeben"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Bitte " + n + " Zeichen weniger eingeben"; },
        formatSelectionTooBig(limit) { return "Sie können nur " + limit + " Eintr" + (limit === 1 ? "ag" : "äge") + " auswählen"; },
        formatLoadMore(pageNumber) { return "Lade mehr Ergebnisse…"; },
        formatSearching() { return "Suche…"; }
    });
}))(jQuery);
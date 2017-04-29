/**
 * Select2 Italian translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Nessuna corrispondenza trovata"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Inserisci ancora " + n + " caratter" + (n == 1? "e" : "i"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Inserisci " + n + " caratter" + (n == 1? "e" : "i") + " in meno"; },
        formatSelectionTooBig(limit) { return "Puoi selezionare solo " + limit + " element" + (limit == 1 ? "o" : "i"); },
        formatLoadMore(pageNumber) { return "Caricamento in corso…"; },
        formatSearching() { return "Ricerca…"; }
    });
}))(jQuery);
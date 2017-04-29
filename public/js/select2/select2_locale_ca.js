/**
 * Select2 Catalan translation.
 * 
 * Author: David Planella <david.planella@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "No s'ha trobat cap coincidència"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Introduïu " + n + " caràcter" + (n == 1 ? "" : "s") + " més"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Introduïu " + n + " caràcter" + (n == 1? "" : "s") + "menys"; },
        formatSelectionTooBig(limit) { return "Només podeu seleccionar " + limit + " element" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "S'estan carregant més resultats…"; },
        formatSearching() { return "S'està cercant…"; }
    });
}))(jQuery);

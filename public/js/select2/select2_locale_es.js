/**
 * Select2 Spanish translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "No se encontraron resultados"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Por favor, introduzca " + n + " car" + (n == 1? "ácter" : "acteres"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Por favor, elimine " + n + " car" + (n == 1? "ácter" : "acteres"); },
        formatSelectionTooBig(limit) { return "Sólo puede seleccionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "Cargando más resultados…"; },
        formatSearching() { return "Buscando…"; }
    });
}))(jQuery);

/**
 * Select2 Portuguese (Portugal) translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Nenhum resultado encontrado"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Introduza " + n + " car" + (n == 1 ? "ácter" : "acteres"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Apague " + n + " car" + (n == 1 ? "ácter" : "acteres"); },
        formatSelectionTooBig(limit) { return "Só é possível selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "A carregar mais resultados…"; },
        formatSearching() { return "A pesquisar…"; }
    });
}))(jQuery);

/**
 * Select2 Brazilian Portuguese translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Nenhum resultado encontrado"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Informe " + n + " caractere" + (n == 1? "" : "s"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Apague " + n + " caractere" + (n == 1? "" : "s"); },
        formatSelectionTooBig(limit) { return "Só é possível selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "Carregando mais resultados…"; },
        formatSearching() { return "Buscando…"; }
    });
}))(jQuery);

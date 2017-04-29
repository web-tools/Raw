/**
 * Select2 Galician translation
 * 
 * Author: Leandro Regueiro <leandro.regueiro@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() {
            return "Non se atoparon resultados";
        },
        formatInputTooShort(input, min) {
            var n = min - input.length;
            if (n === 1) {
                return "Engada un carácter";
            } else {
                return "Engada " + n + " caracteres";
            }
        },
        formatInputTooLong(input, max) {
            var n = input.length - max;
            if (n === 1) {
                return "Elimine un carácter";
            } else {
                return "Elimine " + n + " caracteres";
            }
        },
        formatSelectionTooBig(limit) {
            if (limit === 1 ) {
                return "Só pode seleccionar un elemento";
            } else {
                return "Só pode seleccionar " + limit + " elementos";
            }
        },
        formatLoadMore(pageNumber) {
            return "Cargando máis resultados…";
        },
        formatSearching() {
            return "Buscando…";
        }
    });
}))(jQuery);

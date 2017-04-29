/**
 * Select2 Swedish translation.
 *
 * Author: Jens Rantil <jens.rantil@telavox.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Inga träffar"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Var god skriv in " + n + (n>1 ? " till tecken" : " tecken till"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Var god sudda ut " + n + " tecken"; },
        formatSelectionTooBig(limit) { return "Du kan max välja " + limit + " element"; },
        formatLoadMore(pageNumber) { return "Laddar fler resultat…"; },
        formatSearching() { return "Söker…"; }
    });
}))(jQuery);

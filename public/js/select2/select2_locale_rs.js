/**
 * Select2 Serbian translation.
 *
 * @author  Limon Monte <limon.monte@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Ništa nije pronađeno"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Ukucajte bar još " + n + " simbol" + (n % 10 == 1 && n % 100 != 11 ? "" : "a"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Obrišite " + n + " simbol" + (n % 10 == 1 && n % 100 != 11	 ? "" : "a"); },
        formatSelectionTooBig(limit) { return "Možete izabrati samo " + limit + " stavk" + (limit % 10 == 1 && limit % 100 != 11	 ? "u" : (limit % 10 >= 2 && limit % 10 <= 4 && (limit % 100 < 12 || limit % 100 > 14)? "e" : "i")); },
        formatLoadMore(pageNumber) { return "Preuzimanje još rezultata…"; },
        formatSearching() { return "Pretraga…"; }
    });
}))(jQuery);

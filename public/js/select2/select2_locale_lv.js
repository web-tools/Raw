/**
 * Select2 Latvian translation.
 *
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Sakritību nav"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Lūdzu ievadiet vēl " + n + " simbol" + (n == 11 ? "us" : n%10 == 1 ? "u" : "us"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Lūdzu ievadiet par " + n + " simbol" + (n == 11 ? "iem" : n%10 == 1 ? "u" : "iem") + " mazāk"; },
        formatSelectionTooBig(limit) { return "Jūs varat izvēlēties ne vairāk kā " + limit + " element" + (limit == 11 ? "us" : limit%10 == 1 ? "u" : "us"); },
        formatLoadMore(pageNumber) { return "Datu ielāde…"; },
        formatSearching() { return "Meklēšana…"; }
    });
}))(jQuery);

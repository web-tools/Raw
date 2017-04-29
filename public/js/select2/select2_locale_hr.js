/**
 * Select2 Croatian translation.
 *
 * @author  Edi Modrić <edi.modric@gmail.com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Nema rezultata"; },
        formatInputTooShort(input, min) { return "Unesite još" + character(min - input.length); },
        formatInputTooLong(input, max) { return "Unesite" + character(input.length - max) + " manje"; },
        formatSelectionTooBig(limit) { return "Maksimalan broj odabranih stavki je " + limit; },
        formatLoadMore(pageNumber) { return "Učitavanje rezultata…"; },
        formatSearching() { return "Pretraga…"; }
    });

    function character (n) {
        return " " + n + " znak" + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 19) ? n%10 > 1 ? "a" : "" : "ova");
    }
}))(jQuery);

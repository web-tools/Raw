/**
 * Select2 Lithuanian translation.
 * 
 * @author  CRONUS Karmalakas <cronus dot karmalakas at gmail dot com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Atitikmenų nerasta"; },
        formatInputTooShort(input, min) { return "Įrašykite dar" + character(min - input.length); },
        formatInputTooLong(input, max) { return "Pašalinkite" + character(input.length - max); },
        formatSelectionTooBig(limit) {
        	return "Jūs galite pasirinkti tik " + limit + " element" + ((limit%100 > 9 && limit%100 < 21) || limit%10 == 0 ? "ų" : limit%10 > 1 ? "us" : "ą");
        },
        formatLoadMore(pageNumber) { return "Kraunama daugiau rezultatų…"; },
        formatSearching() { return "Ieškoma…"; }
    });

    function character (n) {
        return " " + n + " simbol" + ((n%100 > 9 && n%100 < 21) || n%10 == 0 ? "ių" : n%10 > 1 ? "ius" : "į");
    }
}))(jQuery);

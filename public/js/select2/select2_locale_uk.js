/**
 * Select2 Ukrainian translation.
 * 
 * @author  bigmihail <bigmihail@bigmir.net>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Нічого не знайдено"; },
        formatInputTooShort(input, min) { return "Введіть буль ласка ще" + character(min - input.length, "символ"); },
        formatInputTooLong(input, max) { return "Введіть буль ласка на" + character(input.length - max, "символ") + " менше"; },
        formatSelectionTooBig(limit) { return "Ви можете вибрати лише" + character(limit, "елемент"); },
        formatLoadMore(pageNumber) { return "Завантаження даних…"; },
        formatSearching() { return "Пошук…"; }
    });

    function character (n, word) {
        return " " + n + " " + word + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 19) ? n%10 > 1 ? "и" : "" : "ів");
    }
}))(jQuery);

/**
 * Select2 Russian translation.
 *
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Совпадений не найдено"; },
        formatInputTooShort(input, min) { return "Пожалуйста, введите еще" + character(min - input.length); },
        formatInputTooLong(input, max) { return "Пожалуйста, введите на" + character(input.length - max) + " меньше"; },
        formatSelectionTooBig(limit) { return "Вы можете выбрать не более " + limit + " элемент" + (limit%10 == 1 && limit%100 != 11 ? "а" : "ов"); },
        formatLoadMore(pageNumber) { return "Загрузка данных…"; },
        formatSearching() { return "Поиск…"; }
    });

    function character (n) {
        return " " + n + " символ" + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 20) ? n%10 > 1 ? "a" : "" : "ов");
    }
}))(jQuery);

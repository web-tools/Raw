/**
 * Select2 Georgian (Kartuli) translation.
 * 
 * Author: Dimitri Kurashvili dimakura@gmail.com
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "ვერ მოიძებნა"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "გთხოვთ შეიყვანოთ კიდევ " + n + " სიმბოლო"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "გთხოვთ წაშალოთ " + n + " სიმბოლო"; },
        formatSelectionTooBig(limit) { return "თქვენ შეგიძლიათ მხოლოდ " + limit + " ჩანაწერის მონიშვნა"; },
        formatLoadMore(pageNumber) { return "შედეგის ჩატვირთვა…"; },
        formatSearching() { return "ძებნა…"; }
    });
}))(jQuery);

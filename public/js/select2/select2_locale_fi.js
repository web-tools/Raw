/**
 * Select2 Finnish translation
 */
(($ => {
    "use strict";
    $.extend($.fn.select2.defaults, {
        formatNoMatches() {
            return "Ei tuloksia";
        },
        formatInputTooShort(input, min) {
            var n = min - input.length;
            return "Ole hyvä ja anna " + n + " merkkiä lisää";
        },
        formatInputTooLong(input, max) {
            var n = input.length - max;
            return "Ole hyvä ja anna " + n + " merkkiä vähemmän";
        },
        formatSelectionTooBig(limit) {
            return "Voit valita ainoastaan " + limit + " kpl";
        },
        formatLoadMore(pageNumber) {
            return "Ladataan lisää tuloksia…";
        },
        formatSearching() {
            return "Etsitään…";
        }
    });
}))(jQuery);

/**
 * Select2 Malay translation.
 * 
 * Author: Kepoweran <kepoweran@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Tiada padanan yang ditemui"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Sila masukkan " + n + " aksara lagi"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Sila hapuskan " + n + " aksara"; },
        formatSelectionTooBig(limit) { return "Anda hanya boleh memilih " + limit + " pilihan"; },
        formatLoadMore(pageNumber) { return "Sedang memuatkan keputusan…"; },
        formatSearching() { return "Mencari…"; }
    });
}))(jQuery);

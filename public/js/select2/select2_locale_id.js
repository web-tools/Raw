/**
 * Select2 Indonesian translation.
 * 
 * Author: Ibrahim Yusuf <ibrahim7usuf@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Tidak ada data yang sesuai"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Masukkan " + n + " huruf lagi" + (n == 1 ? "" : "s"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Hapus " + n + " huruf" + (n == 1 ? "" : "s"); },
        formatSelectionTooBig(limit) { return "Anda hanya dapat memilih " + limit + " pilihan" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "Mengambil data…"; },
        formatSearching() { return "Mencari…"; }
    });
}))(jQuery);

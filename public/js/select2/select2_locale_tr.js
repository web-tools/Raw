/**
 * Select2 Turkish translation.
 * 
 * Author: Salim KAYABAŞI <salim.kayabasi@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Sonuç bulunamadı"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "En az " + n + " karakter daha girmelisiniz"; },
        formatInputTooLong(input, max) { var n = input.length - max; return n + " karakter azaltmalısınız"; },
        formatSelectionTooBig(limit) { return "Sadece " + limit + " seçim yapabilirsiniz"; },
        formatLoadMore(pageNumber) { return "Daha fazla…"; },
        formatSearching() { return "Aranıyor…"; }
    });
}))(jQuery);

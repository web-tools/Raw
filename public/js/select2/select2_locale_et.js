/**
 * Select2 Estonian translation.
 *
 * Author: Kuldar Kalvik <kuldar@kalvik.ee>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Tulemused puuduvad"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Sisesta " + n + " täht" + (n == 1 ? "" : "e") + " rohkem"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Sisesta " + n + " täht" + (n == 1? "" : "e") + " vähem"; },
        formatSelectionTooBig(limit) { return "Saad vaid " + limit + " tulemus" + (limit == 1 ? "e" : "t") + " valida"; },
        formatLoadMore(pageNumber) { return "Laen tulemusi.."; },
        formatSearching() { return "Otsin.."; }
    });
}))(jQuery);

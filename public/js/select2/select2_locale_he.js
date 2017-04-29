/**
* Select2 Hebrew translation.
*
* Author: Yakir Sitbon <http://www.yakirs.net/>
*/
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "לא נמצאו התאמות"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "נא להזין עוד " + n + " תווים נוספים"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "נא להזין פחות " + n + " תווים"; },
        formatSelectionTooBig(limit) { return "ניתן לבחור " + limit + " פריטים"; },
        formatLoadMore(pageNumber) { return "טוען תוצאות נוספות…"; },
        formatSearching() { return "מחפש…"; }
    });
}))(jQuery);

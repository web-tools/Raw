/**
 * Select2 Arabic translation.
 *
 * Author: Adel KEDJOUR <adel@kedjour.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "لم يتم العثور على مطابقات"; },
        formatInputTooShort(input, min) { var n = min - input.length; if (n == 1){ return "الرجاء إدخال حرف واحد على الأكثر"; } return n == 2 ? "الرجاء إدخال حرفين على الأكثر" : "الجاء إدخال " + n + " على الأكثر"; },
        formatInputTooLong(input, max) { var n = input.length - max; if (n == 1){ return "الرجاء إدخال حرف واحد على الأقل"; } return n == 2 ? "الرجاء إدخال حرفين على الأقل" : "الجاء إدخال " + n + " على الأقل "; },
        formatSelectionTooBig(limit) { if (n == 1){ return "يمكنك أن تختار إختيار واحد فقط"; } return n == 2 ? "يمكنك أن تختار إختيارين فقط" : "يمكنك أن تختار " + n + " إختيارات فقط"; },
        formatLoadMore(pageNumber) { return "تحميل المزيد من النتائج…"; },
        formatSearching() { return "البحث…"; }
    });
}))(jQuery);

/**
 * Select2 Persian translation.
 * 
 * Author: Ali Choopan <choopan@arsh.co>
 * Author: Ebrahim Byagowi <ebrahim@gnu.org>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatMatches(matches) { return matches + " نتیجه موجود است، کلیدهای جهت بالا و پایین را برای گشتن استفاده کنید."; },
        formatNoMatches() { return "نتیجه‌ای یافت نشد."; },
        formatInputTooShort(input, min) { var n = min - input.length; return "لطفاً " + n + " نویسه بیشتر وارد نمایید"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "لطفاً " + n + " نویسه را حذف کنید."; },
        formatSelectionTooBig(limit) { return "شما فقط می‌توانید " + limit + " مورد را انتخاب کنید"; },
        formatLoadMore(pageNumber) { return "در حال بارگیری موارد بیشتر…"; },
        formatSearching() { return "در حال جستجو…"; }
    });
}))(jQuery);

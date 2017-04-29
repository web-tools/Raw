/**
 * Select2 Vietnamese translation.
 * 
 * Author: Long Nguyen <olragon@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Không tìm thấy kết quả"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Vui lòng nhập nhiều hơn " + n + " ký tự" + (n == 1 ? "" : "s"); },
        formatInputTooLong(input, max) { var n = input.length - max; return "Vui lòng nhập ít hơn " + n + " ký tự" + (n == 1? "" : "s"); },
        formatSelectionTooBig(limit) { return "Chỉ có thể chọn được " + limit + " tùy chọn" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "Đang lấy thêm kết quả…"; },
        formatSearching() { return "Đang tìm…"; }
    });
}))(jQuery);


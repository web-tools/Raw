/**
 * Select2 Thai translation.
 *
 * Author: Atsawin Chaowanakritsanakul <joke@nakhon.net>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "ไม่พบข้อมูล"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "โปรดพิมพ์เพิ่มอีก " + n + " ตัวอักษร"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "โปรดลบออก " + n + " ตัวอักษร"; },
        formatSelectionTooBig(limit) { return "คุณสามารถเลือกได้ไม่เกิน " + limit + " รายการ"; },
        formatLoadMore(pageNumber) { return "กำลังค้นข้อมูลเพิ่ม…"; },
        formatSearching() { return "กำลังค้นข้อมูล…"; }
    });
}))(jQuery);

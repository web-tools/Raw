/**
 * Select2 Korean translation.
 * 
 * @author  Swen Mun <longfinfunnel@gmail.com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "결과 없음"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "너무 짧습니다. "+n+"글자 더 입력해주세요."; },
        formatInputTooLong(input, max) { var n = input.length - max; return "너무 깁니다. "+n+"글자 지워주세요."; },
        formatSelectionTooBig(limit) { return "최대 "+limit+"개까지만 선택하실 수 있습니다."; },
        formatLoadMore(pageNumber) { return "불러오는 중…"; },
        formatSearching() { return "검색 중…"; }
    });
}))(jQuery);

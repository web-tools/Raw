/**
 * Select2 Chinese translation
 */
(($ => {
    "use strict";
    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "没有找到匹配项"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "请再输入" + n + "个字符";},
        formatInputTooLong(input, max) { var n = input.length - max; return "请删掉" + n + "个字符";},
        formatSelectionTooBig(limit) { return "你只能选择最多" + limit + "项"; },
        formatLoadMore(pageNumber) { return "加载结果中…"; },
        formatSearching() { return "搜索中…"; }
    });
}))(jQuery);

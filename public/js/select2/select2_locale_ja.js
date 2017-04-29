/**
 * Select2 Japanese translation.
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "該当なし"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "後" + n + "文字入れてください"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "検索文字列が" + n + "文字長すぎます"; },
        formatSelectionTooBig(limit) { return "最多で" + limit + "項目までしか選択できません"; },
        formatLoadMore(pageNumber) { return "読込中･･･"; },
        formatSearching() { return "検索中･･･"; }
    });
}))(jQuery);

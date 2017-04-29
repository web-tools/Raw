/**
 * Select2 Icelandic translation.
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Ekkert fannst"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Vinsamlegast skrifið " + n + " staf" + (n > 1 ? "i" : "") + " í viðbót"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Vinsamlegast styttið texta um " + n + " staf" + (n > 1 ? "i" : ""); },
        formatSelectionTooBig(limit) { return "Þú getur aðeins valið " + limit + " atriði"; },
        formatLoadMore(pageNumber) { return "Sæki fleiri niðurstöður…"; },
        formatSearching() { return "Leita…"; }
    });
}))(jQuery);

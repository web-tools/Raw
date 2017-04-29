/**
 * Select2 Basque translation.
 *
 * Author: Julen Ruiz Aizpuru <julenx at gmail dot com>
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() {
          return "Ez da bat datorrenik aurkitu";
        },
        formatInputTooShort(input, min) {
          var n = min - input.length;
          if (n === 1) {
            return "Idatzi karaktere bat gehiago";
          } else {
            return "Idatzi " + n + " karaktere gehiago";
          }
        },
        formatInputTooLong(input, max) {
          var n = input.length - max;
          if (n === 1) {
            return "Idatzi karaktere bat gutxiago";
          } else {
            return "Idatzi " + n + " karaktere gutxiago";
          }
        },
        formatSelectionTooBig(limit) {
          if (limit === 1 ) {
            return "Elementu bakarra hauta dezakezu";
          } else {
            return limit + " elementu hauta ditzakezu soilik";
          }
        },
        formatLoadMore(pageNumber) {
          return "Emaitza gehiago kargatzen…";
        },
        formatSearching() {
          return "Bilatzen…";
        }
    });
}))(jQuery);

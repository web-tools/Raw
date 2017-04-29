/**
 * Select2 French translation
 */
(($ => {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches() { return "Aucun résultat trouvé"; },
        formatInputTooShort(input, min) { var n = min - input.length; return "Merci de saisir " + n + " caractère" + (n == 1? "" : "s") + " de plus"; },
        formatInputTooLong(input, max) { var n = input.length - max; return "Merci de supprimer " + n + " caractère" + (n == 1? "" : "s"); },
        formatSelectionTooBig(limit) { return "Vous pouvez seulement sélectionner " + limit + " élément" + (limit == 1 ? "" : "s"); },
        formatLoadMore(pageNumber) { return "Chargement de résultats supplémentaires…"; },
        formatSearching() { return "Recherche en cours…"; }
    });
}))(jQuery);

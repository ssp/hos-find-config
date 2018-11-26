jQuery(function () {
    jQuery(document).on('click', '.facet-id-ddc .facetList li', function (event) {
        var jTarget = jQuery(event.currentTarget);
        var ddc = jTarget.attr('value');
        var truncatedddc = ddc.replace(/0*$/, '');

        var jChildren = jTarget.closest('.facet-id-ddc').find('[value^="' + truncatedddc + '"]');
        jChildren.show();
        event.preventDefault();
    });
});
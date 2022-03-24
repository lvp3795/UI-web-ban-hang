



$(document).ready(function () {
    var bar = $('.bar_container');
    var menu = $('.bar_menu');
    var close = $('.bar_close');
    var menuActive = false;
    var overlay = $('.menu_overlay');
    
    filtering();
    function filtering() {
        var seletor = $('.sorting_button').attr('data-filter');
        $('.product_grid').isotope({
            filter: seletor,
        });
        if ($('.sorting_button').length) {
            $('.sorting_button').click(function () {
                $('.sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var seletor = $(this).attr('data-filter');
                $('.product_grid').isotope({
                    filter: seletor,
                });
            });
        }
    };
});
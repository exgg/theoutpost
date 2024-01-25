$(document).ready(function() {
    // Toggle mobile menu
    $('.mobile-menu-toggle').click(function() {
        $('.menu ul').slideToggle('fast');
        $('.menu').toggleClass('open');
    });

    // Handle submenu for desktop
    $('.has-submenu').mouseenter(function() {
        $(this).find('.submenu').stop(true, true).slideDown('fast');
    }).mouseleave(function() {
        $(this).find('.submenu').stop(true, true).slideUp('fast');
    });
});
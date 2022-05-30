$(document).ready(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown();
    });

    $('.close').on('click', function() {
        $('.modal').slideUp();
        $('.overlay').fadeOut(1000);
    });
});
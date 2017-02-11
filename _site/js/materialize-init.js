$(document).ready(function() {
    $('.slider').slider();
    $('.parallax').parallax();
    $('.carousel').carousel({
        dist: -10,
        shift: 30,
        padding: 20
    });
    $('select').material_select();
    $(".button-collapse").sideNav();
    $('.modal-trigger').leanModal();
});
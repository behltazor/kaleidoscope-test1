import '../sass/main.sass';

import 'jquery';
import 'bootstrap';
import './scrolloverflow.dev';
import "fullpage.js"

$(document).ready(function() {
    $('#pages').fullpage({
        menu: ".overlay-content",
        anchors: ['p1', 'p2', 'p3', 'p4'],
        scrollBar: false,
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: false,
        verticalCentered: false
    });
    $('#page3 .mt_2 img').mouseover(function () {
        $(this).siblings('.overlay').show();
    });
    $('#page3 .mt_2 .overlay').mouseleave(function () {
        $(this).hide();
    });
    $('.navbar-menu').click(function () {
        $('#main-overlay').show();
    });
    $('#main-overlay .closebtn').click(function () {
        $('#main-overlay').hide();
    });
});
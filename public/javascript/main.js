$(document).ready(function () {
    $(window).bind('resize', set_img_height);
    $('.home-header').imagefit();
});

function set_img_height () {

    var portHeight = $(window).height();
    $('#content').imagefit();


/*

    var portWidth = $(window).width();
    $(".home-header").height(portHeight);
    console.log("The viewport height is " + portHeight + " pixels and the viewport width is " + portWidth + " pixels.");
    $(".home-header").css("height", portHeight).css("width",portWidth).css("background-repeat","no repeat");
*/
}

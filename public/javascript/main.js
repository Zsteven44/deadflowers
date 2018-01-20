


function start() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    console.log("Viewport width: " + viewportWidth);
    // This will add size-defining class to FA icons based on the user viewports.
    if (viewportWidth <= 770) {
        $("i.fa").addClass('fa-lg');
    } else {
        $("i.fa").addClass('fa-2x');
    }

}



$(document).ready(start());
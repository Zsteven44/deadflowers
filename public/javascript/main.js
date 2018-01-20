


function start() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();

    if (viewportWidth<=770) {
        $("i.fa").addClass('fa-lg');
    } else {
        $("i.fa").addClass('fa-lg');
    }

}



$(document).ready(start());
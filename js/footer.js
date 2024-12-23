// function to set the height on fly
// Found this at http://stackoverflow.com/a/16260628/2680824
function autoHeight() {
    $('#content-wrapper').css('min-height', 0);
    var cw_height = $(window).height()
                    - $('#header').height()
                    - $('#footer').height();
    $('#content-wrapper').css('min-height', cw_height);
}

// onDocumentReady function bind
$(document).ready(function() {
    autoHeight();
});

// onResize bind of the function
$(window).resize(function() {
    autoHeight();
});

$(document).ready(function() {
    // Change text and color of footer logo to white on mouseover
    $('#footer-logo-box').mouseover(function() {
        $('#cmu_img').attr('src','/images/cmu_ri.png');
        $('#cbe-text').css('color', 'white');
    });

    // Change text and color of footer logo to gray on mouseout #TODO
    $('#footer-logo-box').mouseout(function() {
        $('#cmu_img').attr('src','/images/cmu_ri.png');
        $('#cbe-text').css('color', '#9d9d9d');
    });
});

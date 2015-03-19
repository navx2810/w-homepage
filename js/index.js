var unbound;
$(document).ready(function() {
    bindMe();
    $(window).resize(function() {
        if (screen.width <= 500 && !unbound) {
            unbindMe();
            unbound = true;
        } else if (unbound && screen.width > 500) {
            bindMe();
            unbound = false;
        }
    })
    console.log('hello');
})

function bindMe() {
    $('.inner-container').bind("mouseover", function() {
        $(this).fadeTo("fast", .8);
    })
    $('.inner-container').bind("mouseleave", function() {
        $(this).fadeTo(10, 0);
    })
}

function unbindMe() {
    $('.inner-container').unbind("mouseleave");
    $('.inner-container').unbind("mouseover");
}
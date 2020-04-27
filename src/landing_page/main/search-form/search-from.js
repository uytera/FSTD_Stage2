//window.jQuery = window.$ = require('jquery');

$(document).ready(function () {
    var massOfCalendarButtons = document.getElementsByClassName('two-places-expand-elemet');

    function day_resize() {
        $('.day').height($('.day').width());
        $('.day').css('line-height', $('.day').height() + "px");
    }

    for (let item of massOfCalendarButtons) {
        item.addEventListener("click", (e) => {   
            $('.search-form-calendar').slideToggle();
            day_resize();
        });
    }

    var anglePeople = 0;

    document.getElementById("one-expand__people").addEventListener("click", (e) => {   
        anglePeople += 180
        $('.search-form-list').slideToggle();
    });
});
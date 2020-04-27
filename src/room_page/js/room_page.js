$(document).ready(function(){

    var massOfCalendarButtons = document.getElementsByClassName('two-places-expand-elemet');
    var angleCalendar = 0;

    function day_resize() {
        $('.day').height($('.day').width());
        $('.day').css('line-height', $('.day').height() + "px");
    }

    for (let item of massOfCalendarButtons) {
        item.addEventListener("click", (e) => { 
            $('.room-calculator-calendar').slideToggle();
            day_resize()       
        }); 
    }

    var anglePeople = 0;

    document.getElementById("one-expand__people").addEventListener("click", (e) => {

        anglePeople += 180
        $('.room-list-of-counted-people').slideToggle();
    });

    var buttons = document.getElementsByClassName("reviews");

    for(let button of buttons){
        button.addEventListener("click", (e) => {
            button.classList.add("reviews-click");
            button.querySelector(".material-icons").innerHTML= "favorite";
            button.querySelector("span").innerHTML= parseInt(button.querySelector("span").innerHTML) + 1;
        });
    }
});
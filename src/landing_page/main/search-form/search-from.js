window.jQuery = window.$ = require('jquery');

$(document).ready(function () {
    var massOfCalendarButtons = document.getElementsByClassName('calendar-expand-elemet');
    var angleCalendar = 0;

    for (let item of massOfCalendarButtons) {
        item.addEventListener("click", (e) => {   
            angleCalendar += 180;
            //глобальная переменная на лэндинг странице
            if(item.id == 'start-date-expand'){
                if((angleCalendar / 180) % 2 != 0){
                    $('#start-date-input-field').css({
                        border: "1px solid #BC9CFF"
                    });
                } else{
                    $('#start-date-input-field').css({
                        border: "1px solid rgba(31, 32, 65, 0.25)"
                    });
                    $('#end-date-input-field').css({
                        border: "1px solid rgba(31, 32, 65, 0.25)"
                    });
                }
            }
            if(item.id == 'end-date-expand'){
                if((angleCalendar / 180) % 2 != 0){
                    $('#end-date-input-field').css({
                        border: "1px solid #BC9CFF"
                    });
                } else{
                    $('#start-date-input-field').css({
                        border: "1px solid rgba(31, 32, 65, 0.25)"
                    });
                    $('#end-date-input-field').css({
                        border: "1px solid rgba(31, 32, 65, 0.25)"
                    });
                }
            }
            $('.search-form-calendar').slideToggle();
            $('.calendar-expand-elemet').each(function(e) {
                $(this).css({
                    transition: 'transform 0.5s',
                    transform: 'rotate('+ angleCalendar +'deg)'
                })
            });
            //item.style.transform = 'rotate(180deg)';
        }); 
    }

    var anglePeople = 0;

    document.getElementById("people-expand").addEventListener("click", (e) => {
        anglePeople += 180
        $('.search-form-list').slideToggle();
        $('.people-expand-elemet').each(function(e) {
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ anglePeople +'deg)'
            })
        });
    });
});
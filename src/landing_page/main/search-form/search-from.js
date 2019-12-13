window.jQuery = window.$ = require('jquery');

$(document).ready(function () {
    var massOfButtons = document.getElementsByClassName('calendar-expand-elemet');
    var angle = 0;

    for (let item of massOfButtons) {
        item.addEventListener("click", (e) => {   
            angle += 180;
            //глобальная переменная на лэндинг странице
            if(item.id == 'start-date-expand'){
                if((angle / 180) % 2 != 0){
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
                
                currentState = 'start';
            }
            if(item.id == 'end-date-expand'){
                if((angle / 180) % 2 != 0){
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

                currentState = 'end';
            }
            $('.search-form-calendar').slideToggle();
            $('.calendar-expand-elemet').each(function(e) {
                $(this).css({
                    transition: 'transform 0.5s',
                    transform: 'rotate('+ angle +'deg)'
                })
            });
            //item.style.transform = 'rotate(180deg)';
        }); 
    }
});
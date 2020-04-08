$(document).ready(function(){
    var massOfCalendarButtons = document.getElementsByClassName('calendar-expand-elemet');
    var angleCalendar = 0;

    for (let item of massOfCalendarButtons) {
        item.addEventListener("click", (e) => {   
            angleCalendar += 180;

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
            $('.room-calculator-calendar').slideToggle();
            $('.calendar-expand-elemet').each(function(e) {
                $(this).css({
                    transition: 'transform 0.5s',
                    transform: 'rotate('+ angleCalendar +'deg)'
                })
            });
        }); 
    }

    var anglePeople = 0;

    document.getElementById("people-expand").addEventListener("click", (e) => {

        anglePeople += 180
        $('.room-list-of-counted-people').slideToggle();

        if((anglePeople / 180) % 2 != 0){
            $('.main__price-calculator-number-of-people-input-field').css({
                border: "1px solid rgba(31, 32, 65, 0.5)"
            });
        } else{
            $('.main__price-calculator-number-of-people-input-field').css({
                border: "1px solid rgba(31, 32, 65, 0.25)"
            });
        }

        $('.people-expand-elemet').each(function(e) {
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ anglePeople +'deg)'
            })
        });
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
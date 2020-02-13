window.jQuery = window.$ = require('jquery');


$(document).ready(function(){
    var angleCalendar = 0;
    var anglePeople = 0;

    document.getElementById('date-input-expand-button').addEventListener('click', (e) => {
        $('.navigation-bar__calendar').slideToggle();

        angleCalendar += 180;
        $('#date-input-expand-button').each(function(e) {
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ angleCalendar +'deg)'
            })
        });
    });

    document.getElementById('people-input-expand-button').addEventListener('click', (e) => {
        $('.navigation-bar__people-list').slideToggle();

        anglePeople += 180;
        $('#people-input-expand-button').each(function(e) {
            if((anglePeople / 180) % 2 != 0){
                $('.navigation-bar__people-input').css({
                    border: "1px solid rgba(31, 32, 65, 0.5)"
                });
            } else{
                $('.navigation-bar__people-input').css({
                    border: "1px solid rgba(31, 32, 65, 0.25)"
                });
            }
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ anglePeople +'deg)'
            })
        });
    })

    $( "#navigation-bar__slider" ).slider({
        animate: "slow",
        range: "min",    
        value: 50
    });
})

$(document).ready(function(){
    var angleCalendar = 0;
    var anglePeople = 0;
    var angleRoom = 0;
    var angleOptions = 0;
    var sliderHandleValueMin = 5000;
    var sliderHandleValueMax = 10000;
    var sliderMaxValue = 15000;

    $("#slider").slider({
        animate: "slow",
        range: true,
        max: sliderMaxValue,   
        values: [sliderHandleValueMin, 10000],
        create: function( event, ui ) {
            $(".navigation-bar__slider-values").val(sliderHandleValueMin + "₽ - " + sliderHandleValueMax + "₽"); 
        },
        slide : function(event, ui) {    
            $(".navigation-bar__slider-values").val(ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽");        
        }
    });

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

    document.getElementById('room-input-expand-button').addEventListener('click', (e) => {
        $('.navigation-bar__room-list').slideToggle();

        angleRoom += 180;
        $('#room-input-expand-button').each(function(e) {
            if((angleRoom / 180) % 2 != 0){
                $('.navigation-bar__room-input').css({
                    border: "1px solid rgba(31, 32, 65, 0.5)"
                });
            } else{
                $('.navigation-bar__room-input').css({
                    border: "1px solid rgba(31, 32, 65, 0.25)"
                });
            }
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ angleRoom +'deg)'
            })
        });
    })

    document.getElementById('additional-options-expand-button').addEventListener('click', (e) => {
        $('.navigation-bar__list-of-additional-options').slideToggle();

        angleOptions += 180;
        $('#additional-options-expand-button').each(function(e) {
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ angleOptions +'deg)'
            })
        });
    })
})
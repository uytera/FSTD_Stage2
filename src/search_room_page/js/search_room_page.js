$(document).ready(function(){
    var angleCalendar = 0;
    var anglePeople = 0;
    var angleRoom = 0;
    var angleOptions = 0;
    var sliderHandleValueMin = 5000;
    var sliderHandleValueMax = 10000;
    var sliderMaxValue = 15000;

    var currentRoomWidth = ($('[class^=room-]').width() + 24)
    var currentRoomPagesMargin = Math.floor($('.main__room-container').width()/currentRoomWidth) * currentRoomWidth / 2 - 120; 

    if(document.body.clientWidth > 990){
        $('.main__room_pages').css({
            marginLeft :  currentRoomPagesMargin + "px"
        })
        $('.main__room_pages_description').css({
            marginLeft :  currentRoomPagesMargin + "px"
        })
    }       

    $(window).resize(function(){
        if(document.body.clientWidth > 990){
            currentRoomWidth = ($('[class^=room-]').width() + 24)
            currentRoomPagesMargin = Math.floor($('.main__room-container').width()/currentRoomWidth) * currentRoomWidth / 2 - 120;
            $('.main__room_pages').css({
                marginLeft :  currentRoomPagesMargin + "px"
            })
            $('.main__room_pages_description').css({
                marginLeft :  currentRoomPagesMargin + "px"
            })
        }
    });

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

    function day_resize() {
        $('.day').height($('.day').width());
        $('.day').css('line-height', $('.day').height() + "px");
    }

    document.getElementById('one-expand__date-input').addEventListener('click', (e) => {
        $('.navigation-bar__calendar').slideToggle();
        day_resize();

        angleCalendar += 180;
        $('#one-expand__date-input').each(function(e) {
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ angleCalendar +'deg)'
            })
        });
    });
    
    document.getElementById('one-expand__people-input').addEventListener('click', (e) => {
        $('.navigation-bar__people-list').slideToggle();

        anglePeople += 180;
        $('#one-expand__people-input').each(function(e) {
            if((anglePeople / 180) % 2 != 0){
                $('.navigation-bar-people__one-input .one-input-field').css({
                    border: "1px solid rgba(31, 32, 65, 0.5)"
                });
            } else{
                $('.navigation-bar-people__one-input .one-input-field').css({
                    border: "1px solid rgba(31, 32, 65, 0.25)"
                });
            }
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ anglePeople +'deg)'
            })
        });
    })

    document.getElementById('one-expand__room-input').addEventListener('click', (e) => {
        $('.navigation-bar__room-list').slideToggle();

        angleRoom += 180;
        $('#one-expand__room-input').each(function(e) {
            if((angleRoom / 180) % 2 != 0){
                $('.navigation-bar-room__one-input .one-input-field').css({
                    border: "1px solid rgba(31, 32, 65, 0.5)"
                });
            } else{
                $('.navigation-bar-room__one-input .one-input-field').css({
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

    window.addEventListener(`resize`, event => {
        var nodes = document.querySelectorAll('[class^=room-]');
        var number = 0;

        if(document.body.clientWidth < 900){
            nodes.forEach(element => {
                number += 1;
                if(number > 4){
                    element.style.display = 'none';
                }
            });
        }
        else{
            nodes.forEach(element => {
                element.style.display = 'block';
            });
        }
      }, false);
})
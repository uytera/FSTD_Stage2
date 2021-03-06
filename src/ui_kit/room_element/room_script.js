//window.jQuery = window.$ = require('jquery');

$(document).ready(function() {

    $('[class^=room-]').height($('[class^=room-]').width()/1.05);

    $(window).resize(function(){
        $('[class^=room-]').height($('[class^=room-]').width()/1.05);
    });

    $('[class^=room-] .slider__image-container').height($('[class^=room-] .slider__image-container').width()/1.78);

    $(window).resize(function(){
        $('[class^=room-] .slider__image-container').height($('[class^=room-] .slider__image-container').width()/1.78);
    });

    $('[class^=room-] .room__description-container').height($('[class^=room-]').height() - $('[class^=room-] .slider__image-container').height());

    $(window).resize(function(){
        $('[class^=room-] .room__description-container').height($('[class^=room-]').height() - $('[class^=room-] .slider__image-container').height());

    });

    var ivs = document.getElementsByTagName("i");
    //alert(ivs.length);

    for (var a = 0; a < ivs.length; a++)
    {
        var i = ivs[a];
        if (0 == i.id.indexOf("slider__right-button"))
        {
            //alert(i.id)
            i.addEventListener('click', (e) => {
                right_button_click(e.target)
            })
        }

        if (0 == i.id.indexOf("slider__left-button"))
        {
            //alert(i.id)
            i.addEventListener('click', (e) => {
                left_button_click(e.target)
            }) 
        }
    }

    var divs = document.getElementsByTagName("div");
    for (var i=0; i<divs.length; i++)
    {
        var div = divs[i];

        //комнаты
        if (div.classList.length != 0 && 0 == div.classList[0].indexOf("room"))
        {
            div.addEventListener('click', (e) => {
                rootElem = div.classList[0]
            })
        }

        if (0 == div.id.indexOf("slider__right-area-button"))
        {
            div.addEventListener('click', (e) => {
                right_button_click(e.target)
            })
        }

        if (0 == div.id.indexOf("slider__left-area-button"))
        {
            div.addEventListener('click', (e) => {
                left_button_click(e.target)
            }) 
        }
    }
});

function left_button_click(currElement) {
    rootElem = currElement.parentNode.parentNode;
    var numberOfSlide = Number.parseInt(rootElem.dataset.numberOfSlide);

    if(numberOfSlide != 1){
        numberOfSlide -= 1;
        $("." + rootElem.classList[0] + ' .slider__image-container :nth-child(' + numberOfSlide +')').fadeIn();      
    }

    $("." + rootElem.classList[0] + ' .slider__legend :nth-child(' + numberOfSlide +')').css({
        background: "white"
    })

    if(numberOfSlide != 4){
        $("." + rootElem.classList[0] + ' .slider__legend :nth-child(' + (numberOfSlide + 1) +')').css({
            background: "none"
        })
    }
    rootElem.dataset.numberOfSlide = numberOfSlide;
}

function right_button_click(currElement) {
    rootElem = currElement.parentNode.parentNode;
    var numberOfSlide = Number.parseInt(rootElem.dataset.numberOfSlide);

    if(numberOfSlide != 4){
        $("." + rootElem.classList[0] + ' .slider__image-container :nth-child(' + numberOfSlide +')').fadeOut();
        numberOfSlide += 1;
    }

    $("." + rootElem.classList[0] + ' .slider__legend :nth-child(' + numberOfSlide +')').css({
        background: "white"
    })
    
    if(numberOfSlide != 1){
        $("." + rootElem.classList[0] + ' .slider__legend :nth-child(' + (numberOfSlide - 1) +')').css({
            background: "none"
        })
    }

    rootElem.dataset.numberOfSlide = numberOfSlide;
}
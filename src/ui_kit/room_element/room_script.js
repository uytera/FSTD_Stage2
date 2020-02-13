window.jQuery = window.$ = require('jquery');

var numberOfSlide = 1;

$(document).ready(function() {
    document.getElementById('slider__right-button-area').addEventListener('click', (e) => {
        right_button_click()
    })

    document.getElementById('slider__right-button').addEventListener('click', (e) => {
        right_button_click()
    })

    document.getElementById('slider__left-button-area').addEventListener('click', (e) => {
        left_button_click()
    })

    document.getElementById('slider__left-button').addEventListener('click', (e) => {
        left_button_click()
    }) 
});

function left_button_click() {
    if(numberOfSlide != 1){
        numberOfSlide -= 1;
        $('.slider__image-container :nth-child(' + numberOfSlide +')').fadeIn();      
    }

    $('.slider__legend :nth-child(' + numberOfSlide +')').css({
        background: "white"
    })

    if(numberOfSlide != 4){
        $('.slider__legend :nth-child(' + (numberOfSlide + 1) +')').css({
            background: "none"
        })
    }
}

function right_button_click() {
    if(numberOfSlide != 4){
        $('.slider__image-container :nth-child(' + numberOfSlide +')').fadeOut();
        numberOfSlide += 1;
    }

    $('.slider__legend :nth-child(' + numberOfSlide +')').css({
        background: "white"
    })
    
    if(numberOfSlide != 1){
        $('.slider__legend :nth-child(' + (numberOfSlide - 1) +')').css({
            background: "none"
        })
    }
}
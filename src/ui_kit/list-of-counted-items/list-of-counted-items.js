window.jQuery = window.$ = require('jquery');

$(document).ready(function () {
    
});

function add_elements_event(){

    var massOfButtons = document.getElementsByClassName('button');

    for (let item of massOfButtons) {
        item.addEventListener("mouseup", (e) => {    
            item.classList.add("pushed-up");
        }); 

        item.addEventListener("mousedown", (e) => {
            item.classList.remove("pushed-up");   
        }); 
    }
}
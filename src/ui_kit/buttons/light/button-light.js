$(document).ready(function () {
    var light_buttons = document.getElementsByClassName('button-light');

    for(let light_b of light_buttons){
        light_b.addEventListener("mousedown", (e) => {
            light_b.classList.add("button-light-clicked");   
        }); 

        light_b.addEventListener("mouseup", (e) => {
            light_b.classList.remove("button-light-clicked");   
        }); 

        light_b.addEventListener("mouseout", (e) => {
            light_b.classList.remove("button-light-clicked");   
        }); 
    }
});
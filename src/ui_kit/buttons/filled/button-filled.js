$(document).ready(function () {
    var filled_buttons = document.getElementsByClassName('button-filled');

    for(let filled_b of filled_buttons){
        filled_b.addEventListener("mousedown", (e) => {
            filled_b.classList.add("button-filled-clicked");   
        }); 

        filled_b.addEventListener("mouseup", (e) => {
            filled_b.classList.remove("button-filled-clicked");   
        }); 

        filled_b.addEventListener("mouseout", (e) => {
            filled_b.classList.remove("button-filled-clicked");   
        }); 
    }
});
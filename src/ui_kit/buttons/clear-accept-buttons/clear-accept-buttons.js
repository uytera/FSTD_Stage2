$(document).ready(function () {
    var clear_buttons = document.getElementsByClassName('clean-button');

    for(let clear_b of clear_buttons){
        clear_b.addEventListener("mousedown", (e) => {
            clear_b.classList.add("clear-accept-clicked");   
        }); 

        clear_b.addEventListener("mouseup", (e) => {
            clear_b.classList.remove("clear-accept-clicked");   
        }); 

        clear_b.addEventListener("mouseout", (e) => {
            clear_b.classList.remove("clear-accept-clicked");   
        }); 
    }

    var save_buttons = document.getElementsByClassName('save-button');

    for(let save_b of save_buttons){
        save_b.addEventListener("mousedown", (e) => {
            save_b.classList.add("clear-accept-clicked");   
        }); 

        save_b.addEventListener("mouseup", (e) => {
            save_b.classList.remove("clear-accept-clicked");   
        }); 

        save_b.addEventListener("mouseout", (e) => {
            save_b.classList.remove("clear-accept-clicked");   
        }); 
    }
});
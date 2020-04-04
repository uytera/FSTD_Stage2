$(document).ready(function(){
    var buttons = document.getElementsByClassName("reviews");

    for(let button of buttons){
        button.addEventListener("click", (e) => {
            button.classList.add("reviews-click");
            button.querySelector(".material-icons").innerHTML= "favorite";
            button.querySelector("span").innerHTML= parseInt(button.querySelector("span").innerHTML) + 1;
        });
    }
});
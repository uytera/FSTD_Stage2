$(document).ready(function () {
    var massOfTwoButtons = document.getElementsByClassName('two-places-expand-elemet');
    var angleTwoButtons = 0;

    for (let item of massOfTwoButtons) {
        item.addEventListener("click", (e) => {   
            angleTwoButtons += 180;

            $('.two-places-expand-elemet').each(function(e) {
                $(this).css({
                    transition: 'transform 0.5s',
                    transform: 'rotate('+ angleTwoButtons +'deg)'
                })
            });
        }); 
    }
});

$(document).ready(function () {
    var anglePeople = 0;
    
    $("[id ^= one-expand__]").on("click", (e) => {
        anglePeople += 180

        if((anglePeople / 180) % 2 != 0){
            $('.one-input-field').css({
                border: "1px solid rgba(31, 32, 65, 0.5)"
            });
        } else{
            $('.one-input-field').css({
                border: "1px solid rgba(31, 32, 65, 0.25)"
            });
        }

        $('.one-input-expand-elemet').each(function(e) {
            $(this).css({
                transition: 'transform 0.5s',
                transform: 'rotate('+ anglePeople +'deg)'
            })
        });
    });
});
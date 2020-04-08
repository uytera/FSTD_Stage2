//window.jQuery = window.$ = require('jquery');
var mapOfPeopleStrings = new Map();

var mapOfPeopleConjugations = new Map([
    ["ВЗРОСЛЫЕ", ["взрослый", "взрослых", "взрослых"]],
    ["ДЕТИ", ["ребёнок", "ребёнка", "детей"]],
    ["МЛАДЕНЦЫ", ["младенец", "младенца", "младенцев"]],
]);

var peopleRootElement;

$(document).ready(function () {

    peopleRootElement = document.getElementsByClassName("room-list-of-counted-people")[0];

    fillMapPeople();
    add_elements_event_people();

    document.getElementById("room-list-of-counted-people__clean-button").addEventListener("click", (e) => {
        var massOflistPeopleItems = peopleRootElement.getElementsByClassName("list-of-counted-items__item");

        for (let item of massOflistPeopleItems) {
            var massOfPeopleElements = item.closest(".list-of-counted-items__item").querySelectorAll('*');
            $(massOfPeopleElements[2]).text(0);
            mapOfPeopleStrings.set(massOfPeopleElements[0].innerHTML, $(massOfPeopleElements[2]).text());
        }

        fillTextFieldPeople()
    })

    //document.getElementById("list-of-counted-items__save-button").addEventListener()
});

function add_elements_event_people(){

    var massPeopleOfButtons = peopleRootElement.getElementsByClassName('button');

    for (let item of massPeopleOfButtons) {
        //alert(item.class);
        item.addEventListener("mousedown", (e) => { 
            item.classList.add("pushed-up");
            if(item.classList.contains("button_minus")){
                decrementPeople(item)
            }
            if(item.classList.contains("button_plus")){
                incrementPeople(item)
            }
        }); 

        item.addEventListener("mouseup", (e) => {
            item.classList.remove("pushed-up");   
        }); 
    }
}

function fillMapPeople(){
    var massOfPeopleItems = peopleRootElement.getElementsByClassName('list-of-counted-items__item');

    for (let key of massOfPeopleItems) {
        mapOfPeopleStrings.set(key.children[0].innerHTML, 0);
        //alert(mapOfStrings.get(key.children[0].innerHTML));
    }
}

function incrementPeople(item){
    var massOfPeopleItems = item.closest(".list-of-counted-items__item").querySelectorAll('*');
    $(massOfPeopleItems[2]).text(Number.parseInt($(massOfPeopleItems[2]).text()) + 1);
    mapOfPeopleStrings.set(massOfPeopleItems[0].innerHTML, $(massOfPeopleItems[2]).text());

    fillTextFieldPeople()
}

function decrementPeople(item){
    var massOfPeopleItems = item.closest(".list-of-counted-items__item").querySelectorAll('*');
    var count = Number.parseInt($(massOfPeopleItems[2]).text());

    if(count != 0){
        $(massOfPeopleItems[2]).text(count - 1);
    }
    else{
        $(massOfPeopleItems[2]).text(0);      
    }
    mapOfPeopleStrings.set(massOfPeopleItems[0].innerHTML, $(massOfPeopleItems[2]).text());

    fillTextFieldPeople()
}

function fillTextFieldPeople(){
    var resultString = "";
    var count = 0;
    for(let string of mapOfPeopleStrings){
        if(string[1] != 0){
            if(resultString.length != 0){
                resultString += ", "
            }
            try {
                resultString += string[1] + " " + conjugation(string[1], mapOfPeopleConjugations.get(string[0]));
            }
            catch (e) {
                resultString += string[1] + " " + string[0].toLowerCase()
            }
            count += Number.parseInt(string[1]);
        }
    }
    if(count != 0){
        $(".main__price-calculator-number-of-people").val(resultString)
    }
    else{
        $(".main__price-calculator-number-of-people").val("")
    }
}

function conjugation(number, txt) {
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
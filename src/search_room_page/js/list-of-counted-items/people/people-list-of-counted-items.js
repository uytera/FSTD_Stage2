//window.jQuery = window.$ = require('jquery');
var mapOfPeopleStrings = new Map();

var mapOfPeopleConjugations = new Map([
    ["ВЗРОСЛЫЕ", ["взрослый", "взрослых", "взрослых"]],
    ["ДЕТИ", ["ребёнок", "ребёнка", "детей"]],
    ["МЛАДЕНЦЫ", ["младенец", "младенца", "младенцев"]],
]);

var peopleRootElement;

$(document).ready(function () {

    peopleRootElement = document.getElementsByClassName("navigation-bar__people-list")[0];

    fillMap();
    add_elements_event();

    //fillTextField()    
    peopleRootElement.getElementById("list-of-counted-items__clean-button").addEventListener("click", (e) => {
        var massOflistItems = peopleRootElement.getElementsByClassName("list-of-counted-items__item");

        for (let item of massOflistItems) {
            var massOfElements = item.closest(".list-of-counted-items__item").querySelectorAll('*');
            $(massOfElements[2]).text(0);
            mapOfPeopleStrings.set(massOfElements[0].innerHTML, $(massOfElements[2]).text());
        }

        fillTextField()
    })

    //document.getElementById("list-of-counted-items__save-button").addEventListener()
});

function add_elements_event(){

    var massOfButtons = peopleRootElement.getElementsByClassName('button');

    for (let item of massOfButtons) {
        item.addEventListener("mousedown", (e) => {    
            item.classList.add("pushed-up");
            if(item.id == "minus-button"){
                decrement(item)
            }
            if(item.id == "plus-button"){
                increment(item)
            }
        }); 

        item.addEventListener("mouseup", (e) => {
            item.classList.remove("pushed-up");   
        }); 
    }
}

function fillMap(){
    var massOfItems = peopleRootElement.getElementsByClassName('list-of-counted-items__item');

    for (let key of massOfItems) {
        mapOfPeopleStrings.set(key.children[0].innerHTML, 0);
        //alert(mapOfStrings.get(key.children[0].innerHTML));
    }
}

function increment(item){
    var massOfItems = item.closest(".list-of-counted-items__item").querySelectorAll('*');
    $(massOfItems[2]).text(Number.parseInt($(massOfItems[2]).text()) + 1);
    mapOfPeopleStrings.set(massOfItems[0].innerHTML, $(massOfItems[2]).text());

    fillTextField()
}

function decrement(item){
    var massOfItems = item.closest(".list-of-counted-items__item").querySelectorAll('*');
    var count = Number.parseInt($(massOfItems[2]).text());

    if(count != 0){
        $(massOfItems[2]).text(count - 1);
    }
    else{
        $(massOfItems[2]).text(0);      
    }
    mapOfPeopleStrings.set(massOfItems[0].innerHTML, $(massOfItems[2]).text());

    fillTextField()
}

function fillTextField(){
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
        $(".navigation-bar__people-input-field").val(resultString)
    }
    else{
        $(".navigation-bar__people-input-field").val("")
    }
}

function conjugation(number, txt) {
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
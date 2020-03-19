//window.jQuery = window.$ = require('jquery');
var mapOfRoomStrings = new Map();

var mapOfRoomConjugations = new Map([
    ["СПАЛЬНИ", ["спальня", "спальни", "спален"]],
    ["КРОВАТИ", ["кровать", "кровати", "кроватей"]],
    ["ВАННЫЕ КОМНАТЫ", ["ванная комната", "ванных комнаты", "ванных комнат"]]
]);

var roomRootElement;

$(document).ready(function () {

    roomRootElement = document.getElementsByClassName("navigation-bar__room-list")[0];

    fillMapRoom();
    add_elements_event_room();
  
    document.getElementById("navigation-bar__room-list__clean-button").addEventListener("click", (e) => {
        var massOflistRoomItems = roomRootElement.getElementsByClassName("list-of-counted-items__item");

        for (let item of massOflistRoomItems) {
            var massOfRoomElements = item.closest(".list-of-counted-items__item").querySelectorAll('*');
            $(massOfRoomElements[2]).text(0);
            mapOfRoomStrings.set(massOfRoomElements[0].innerHTML, $(massOfRoomElements[2]).text());
        }

        fillTextFieldRoom()
    })

    //document.getElementById("list-of-counted-items__save-button").addEventListener()
});

function add_elements_event_room(){

    var massOfRoomButtons = roomRootElement.getElementsByClassName('button');

    for (let item of massOfRoomButtons) {
        item.addEventListener("mousedown", (e) => {    
            item.classList.add("pushed-up");
            if(item.classList.contains("button_minus")){
                decrementRoom(item)
            }
            if(item.classList.contains("button_plus")){
                incrementRoom(item)
            }
        }); 

        item.addEventListener("mouseup", (e) => {
            item.classList.remove("pushed-up");   
        }); 
    }
}

function fillMapRoom(){
    var massOfRoomItems = roomRootElement.getElementsByClassName('list-of-counted-items__item');

    for (let key of massOfRoomItems) {
        mapOfRoomStrings.set(key.children[0].innerHTML, 0);
        //alert(mapOfStrings.get(key.children[0].innerHTML));
    }
}

function incrementRoom(item){
    var massOfRoomItems = item.closest(".list-of-counted-items__item").querySelectorAll('*');
    $(massOfRoomItems[2]).text(Number.parseInt($(massOfRoomItems[2]).text()) + 1);
    mapOfRoomStrings.set(massOfRoomItems[0].innerHTML, $(massOfRoomItems[2]).text());

    fillTextFieldRoom()
}

function decrementRoom(item){
    var massOfRoomItems = item.closest(".list-of-counted-items__item").querySelectorAll('*');
    var count = Number.parseInt($(massOfRoomItems[2]).text());

    if(count != 0){
        $(massOfRoomItems[2]).text(count - 1);
    }
    else{
        $(massOfRoomItems[2]).text(0);      
    }
    mapOfRoomStrings.set(massOfRoomItems[0].innerHTML, $(massOfRoomItems[2]).text());

    fillTextFieldRoom()
}

function fillTextFieldRoom(){
    var resultString = "";
    var count = 0;
    for(let string of mapOfRoomStrings){
        if(string[1] != 0){
            if(resultString.length != 0){
                resultString += ", "
            }
            try {
                resultString += string[1] + " " + conjugation(string[1], mapOfRoomConjugations.get(string[0]));
            }
            catch (e) {
                resultString += string[1] + " " + string[0].toLowerCase()
            }
            count += Number.parseInt(string[1]);
        }
    }
    if(count != 0){
        $(".navigation-bar__room-input-field").val(resultString)
    }
    else{
        $(".navigation-bar__room-input-field").val("")
    }
}

function conjugation(number, txt) {
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
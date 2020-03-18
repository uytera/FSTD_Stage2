//window.jQuery = window.$ = require('jquery');

//Календарь должен прогреваться, т.е. при загрузке страницы быть открытым, дальше вы можете его закрыть в конце html скриптом!!!!!!!!!!!!!!!!!!!!

let months = {     
    0: "Январь",  
    1: "Февраль", 
    2: "Март", 
    3: "Апрель", 
    4: "Май", 
    5: "Июнь", 
    6: "Июль", 
    7: "Август", 
    8: "Сентябрь", 
    9: "Октябрь", 
    10: "Ноябрь", 
    11: "Декабрь"    
};

var pushedElementsCount = 0;

var startElement = document.createElement("div");
var endElement = document.createElement("div");

var pushedElementDate = "";
var startDate = "";
var endDate = "";
var currDate = new Date();

function day_resize() {
    $('.day').height($('.day').width());
    $('.day').css('line-height', $('.day').height() + "px");
}

$(document).ready(function () {
    
    $(window).resize(function(){
        day_resize();
    });

    fill_calendar(currDate);
    add_elements_event();

    document.getElementById('calendar-forward-btn').addEventListener("click", (e) => {
        currDate.setMonth(currDate.getMonth() + 1);
        fill_calendar(currDate);
        add_elements_event();
    });
    
    document.getElementById('calendar-backward-btn').addEventListener("click", (e) => {
        currDate.setMonth(currDate.getMonth() - 1);
        fill_calendar(currDate);
        add_elements_event();
    });

    document.getElementById('calendar__clean-button').addEventListener("click", (e) => {
        pushedElementsCount = 0;
        CalendarStartDate = startDate = "";
        CalendarEndDate = endDate = "";
        pushedElementDate = "";
        fillDate();
        fill_calendar(currDate);
        add_elements_event();
        /*if(currentState == 'start' && (endDate == null || endDate > pushedDate)){
            startElement.classList.remove('selected-day');
            startElement = document.createElement("div");
            startDate = null;
            $('.search-form__start-date').val("");
        }

        if(currentState == 'end' && (startDate == null || pushedDate > startDate)){
            endElement.classList.remove('selected-day');
            endElement = document.createElement("div");
            endDate = null;
            $('.search-form__end-date').val("");
        }*/
    });

    document.getElementById('calendar__save-button').addEventListener("click", (e) => {
        CalendarStartDate = startDate;
        CalendarEndDate = endDate;
        fillDate();
        fill_calendar(currDate);
        /*pushedDate = new Date(pushedElement.getAttribute('data-year'), pushedElement.getAttribute('data-month'), pushedElement.innerHTML); 
  
        if(currentState == 'start' && (endDate == null || endDate > pushedDate)){
            startElement.classList.remove('selected-day');
            startElement = pushedElement;
            startDate = pushedDate;
            pushedElement.classList.add('selected-day');
            $('.search-form__start-date').val(pushedDate.getDate() + "." + pushedDate.getMonth() + "." + pushedDate.getFullYear());
        }

        if(currentState == 'end' && (startDate == null || pushedDate > startDate)){
            endElement.classList.remove('selected-day');
            endElement = pushedElement;
            endDate = pushedDate;
            pushedElement.classList.add('selected-day');
            $('.search-form__end-date').val(pushedDate.getDate() + "." + pushedDate.getMonth() + "." + pushedDate.getFullYear());
        } 
        
        if(startDate != null && endDate != null){
            startDate.setHours(0,0,0,0);
            endDate.setHours(0,0,0,0);
            fill_days_in_calendar(currDate.getMonth(), currDate.getFullYear())
        }*/
    });

});

function add_elements_event(){

    var massOfDays = document.getElementsByClassName('day');
    var pushed_day = document.createElement("div");
    /*
    for (let item of massOfDays) {
        item.addEventListener("mouseover", (e) => {      
            item.classList.add("mouse-on");
        }); 

        item.addEventListener("mouseout", (e) => {      
            item.classList.remove("pushed-down");
            item.classList.remove("mouse-on");
        }); 

        item.addEventListener("mouseup", (e) => {    
            pushed_day.classList.remove("pushed-down");
            item.classList.add("pushed-up");
            pushed_day = item;
            pushedElement = pushed_day;
        }); 

        item.addEventListener("mousedown", (e) => {
            pushedElementsCount += 1;
            item.classList.remove("mouse-on");   
            pushed_day.classList.remove("pushed-up");
            pushed_day.classList.remove("pushed-down");
            item.classList.add("pushed-down");
            pushed_day=item;
        }); 
    }
    */
   for (let item of massOfDays) {
        item.addEventListener("mouseover", (e) => {      
            item.classList.add("mouse-on");
        }); 

        item.addEventListener("mouseout", (e) => {      
            item.classList.remove("pushed-down");
            item.classList.remove("mouse-on");
        }); 

        item.addEventListener("mouseup", (e) => {  
            pushedElementsCount += 1;  
            pushed_day.classList.remove("pushed-down");
            item.classList.add("selected-day");
            pushed_day = item;
            pushedElementDate = new Date(pushed_day.getAttribute('data-year'), pushed_day.getAttribute('data-month'), pushed_day.innerHTML);

            if(pushedElementsCount == 1)
                startElement = pushed_day;
            else{
                endElement = pushed_day;
            }

            if(pushedElementsCount == 2){
                startElementDate = new Date(startElement.getAttribute('data-year'), startElement.getAttribute('data-month'), startElement.innerHTML);
                endElementDate = new Date(endElement.getAttribute('data-year'), endElement.getAttribute('data-month'), endElement.innerHTML);

                if(startElementDate < endElementDate){
                    startDate = startElementDate;
                    endDate = endElementDate;
                }
                else{
                    startDate = endElementDate;
                    endDate = startElementDate;
                }

                //alert(startDate.getMonth() + " " + startDate.getFullYear() + " " + startDate.getDate());
                //alert(endDate.getMonth() + " " + endDate.getFullYear() + " " + endDate.getDate());
                startDate.setHours(0,0,0,0);
                endDate.setHours(0,0,0,0);

                fill_days_in_calendar(currDate.getMonth(), currDate.getFullYear())
            }
        }); 

        item.addEventListener("mousedown", (e) => {
            item.classList.remove("mouse-on");   
            pushed_day.classList.remove("pushed-up");
            pushed_day.classList.remove("pushed-down");
            item.classList.add("pushed-down");
            pushed_day=item;
        }); 
    } 
}



function fill_calendar(date){
    fill_date_in_calendar(date.getMonth(), date.getFullYear());
    fill_days_in_calendar(date.getMonth(), date.getFullYear());
}

function fill_date_in_calendar(month, year){
    var string_month = months[month];
    $('.calendar__date').text(string_month + " " + year)
}

function fill_days_in_calendar(month, year){
    var lastDateOfLastMonth = new Date(new Date(year, month, 1) - 1);
    var lastDateOfCurrMonth = new Date(new Date(year, month + 1, 1) - 1);
    var weekdayOfFirstDayOfMonth = new Date(year, month, 1).getDay() == 0 ? 7 : new Date(year, month, 1).getDay();
    var weekdayOfLastDayOfMonth = lastDateOfCurrMonth.getDay() == 0 ? 7 : lastDateOfCurrMonth.getDay();
    var html = "";
    
    var startDay = new Date(lastDateOfLastMonth.getFullYear(), lastDateOfLastMonth.getMonth(), lastDateOfLastMonth.getDate()  - weekdayOfFirstDayOfMonth + 2);
    
    var modificator;
    while(startDay < lastDateOfCurrMonth){
        modificator = "";
        startDay.setHours(0,0,0,0);

        if(pushedElementDate != "" && startDay.getTime() == pushedElementDate.getTime()){
            modificator = "selected-day";
        }
        if(startDate != "" && endDate != ""){ 
            if(startDay.getTime() == startDate.getTime()){
                modificator = "selected-day-in-period start";
            } 
            if(startDay.getTime() == endDate.getTime()){
                modificator = "selected-day-in-period end";
            }
        }
        if(startDate != "" && endDate != "" && (startDay.getTime() > startDate.getTime() && startDay.getTime() < endDate.getTime())){
            modificator = "day-in-period";
        }

        if(startDay.getMonth() !=  month)
            html += '<div class="day other-month-day ' + modificator + '" data-year='+ startDay.getFullYear() +' data-month=' + startDay.getMonth() + '>' + startDay.getDate() + '</div>';
        else
            html += '<div class="day curr-month-day ' + modificator + '" data-year='+ startDay.getFullYear() +' data-month=' + startDay.getMonth() + '>' + startDay.getDate() + '</div>';
        startDay.setDate(startDay.getDate() + 1);
    }

    for(weekdayOfLastDayOfMonth; weekdayOfLastDayOfMonth < 7; weekdayOfLastDayOfMonth++){
        modificator = "";
        startDay.setHours(0,0,0,0);

        if(pushedElementDate != "" && startDay.getTime() == pushedElementDate.getTime()){
            modificator = "selected-day";
        }
        if(startDate != "" && endDate != ""){ 
            if(startDay.getTime() == startDate.getTime()){
                modificator = "selected-day-in-period start";
            } 
            if(startDay.getTime() == endDate.getTime()){
                modificator = "selected-day-in-period end";
            }
        }
        if(startDate != "" && endDate != "" && (startDay.getTime() > startDate.getTime() && startDay.getTime() < endDate.getTime())){
            modificator = "day-in-period";
        }

        html += '<div class="day other-month-day ' + modificator + '" data-year='+ startDay.getFullYear() +' data-month=' + startDay.getMonth() + '>' + startDay.getDate() + '</div>';
        startDay.setDate(startDay.getDate() + 1);
    }
    
    document.getElementsByClassName('calendar__days')[0].innerHTML = html;

    day_resize();
}
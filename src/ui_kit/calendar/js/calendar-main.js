window.jQuery = window.$ = require('jquery');
$(document).ready(function () {
    var year=2019;
    var month=7;
    var lastDateOfLastMonth = new Date(new Date(year, month, 1) - 1);
    var lastDateOfCurrMonth = new Date(new Date(year, month + 1, 1) - 1);
    var weekdayOfFirstDayOfMonth = new Date(year, month, 1).getDay() == 0 ? 7 : new Date(year, month, 1).getDay();
    var weekdayOfLastDayOfMonth = lastDateOfCurrMonth.getDay() == 0 ? 7 : lastDateOfCurrMonth.getDay();
    var html = "";
    
    var startDay = new Date(lastDateOfLastMonth.getFullYear(), lastDateOfLastMonth.getMonth(), lastDateOfLastMonth.getDate()  - weekdayOfFirstDayOfMonth + 2);
    

    while(startDay < lastDateOfCurrMonth){
        if(startDay.getMonth() !=  month)
            html += '<div class="day other-month-day" data-year='+ startDay.getFullYear() +' data-month=' + startDay.getMonth() + '>' + startDay.getDate() + '</div>';
        else
            html += '<div class="day curr-month-day" data-year='+ startDay.getFullYear() +' data-month=' + startDay.getMonth() + '>' + startDay.getDate() + '</div>';
        startDay.setDate(startDay.getDate() + 1);
    }

    for(weekdayOfLastDayOfMonth; weekdayOfLastDayOfMonth < 7; weekdayOfLastDayOfMonth++){
        html += '<div class="day other-month-day" data-year='+ startDay.getFullYear() +' data-month=' + startDay.getMonth() + '>' + startDay.getDate() + '</div>';
        startDay.setDate(startDay.getDate() + 1);
    }
    
    document.getElementsByClassName('calendar__days')[0].innerHTML = html;
});
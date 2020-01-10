"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: 
   Date:   

*/
showClock();//runs the program

setInterval("showClock()", 1000); //updates every second

function showClock(){
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   //Has the time and date set to local time so it is not in 24 hours makes the current date as a new date 
  
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
   //the id Current time in the HTML Puts the local date and local time between spans 

   var j4Date = nextJuly4(thisDay);
   j4Date.setHours(21);
   //Sets that the 4 of July is at 9 a clock cuz thats when the fireworks gp off

   var days = (j4Date - thisDay)/(1000*60*60*24);//subtracts the time from the date to the current time to establish the days left
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;
   //Establishes the time left on he clock for days, hours, minutes, mins

   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.ceil(secs);
   //inserts the time into the HTML with rounded times
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}


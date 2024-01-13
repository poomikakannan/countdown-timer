"use strict"

const date1 = new Date("December 25, 2023 10:00:00").getTime();

var x = setInterval( function() {
    const date2 = new Date().getTime();
    const times = date1 - date2;
    const days = Math.floor(times/(1000 * 60 * 60 * 24));
    const hours = Math.floor((times % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minutes = Math.floor((times % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((times % (1000 * 60)) / 1000);
    document.getElementById("Day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = Minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);




// setInterval(()=>{
//     console.log("set Interval")
// },1000);

// setTimeout(()=>{
//     console.log("set Timeout")
// },3000)

// setTimeout(()=>{
//     console.log("set Timeout")
// },8000)
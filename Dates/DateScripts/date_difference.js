"use strict";
let start = new Date("August 2, 2024").getTime();
let end = new Date("November 13, 2030").getTime();

let differenceInDays = end - start;
console.log(differenceInDays + "result in millisecons");


// convert milliseconds to Days --- numbOfDays = totalMilliSeconds / 1000 ms/s *60 s/m * 60 min/h 24hr/day 
const days = differenceInDays / (1000 * 60 * 60 * 24);
console.log(days + " in days");
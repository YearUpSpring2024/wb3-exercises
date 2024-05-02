"use strict";
const specificDate = new Date(1776, 1, 20);
console.log("my birthday without localString " + specificDate)
console.log("My birthday with " + specificDate.toLocaleString() + '\n');

const months = ["Jan", "Feb", "Mar", "Apr",
    "May", "June", "July", "August", "Sep",
    "Oct", "Nov", "Dec"];

const mommyBirthDay = new Date("Feb 14 1995");
const formatDate = months[mommyBirthDay.getMonth()] + " " + mommyBirthDay.getDate() + ", " + mommyBirthDay.getFullYear();
console.log("Mom birthday without LocalString " + formatDate)

console.log("Mom's birthday using to LocalString " + formatDate.toLocaleString() + '\n')


const fatherBirthday = new Date(1874, 14, 1995);
console.log("local String")
console.log("my father birthday with localString " + fatherBirthday.toLocaleDateString());

// display it like in book
const year = fatherBirthday.getFullYear()
const month = fatherBirthday.getMonth() + 1;
const day = fatherBirthday.getDate();
console.log(`Date (${year}, ${month} ${day}) how it looked on the page`);
// const Year = specificDate.getFullYear()
// console.log(Year);
// const monthIndex = specificDate.getMonth();
// const monthName = months[monthIndex];
// console.log(monthName);
// const day = specificDate.getDate();
// console.log(day);

// console.log(`My birthday is ${monthName}/${day}/${Year}`)
"use strict";

const date = new Date();
const day = date.getDate();
const monthIndex = date.getMonth();
const year = date.getFullYear();

const months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];

// grabbing name
const nameOfMonth = months[monthIndex]
console.log(`${day}-${nameOfMonth}-${year}`)
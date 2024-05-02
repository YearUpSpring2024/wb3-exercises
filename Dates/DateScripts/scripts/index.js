"use strict";
let current_date_using_toString_btn;
let current_date_using_to_Date_string_btn;
let current_date_using_to_UTC_string_btn;
let current_date_using_to_locale_string_btn;
let resetBtn;
let displayMessage;

window.onload = init;

function init() {
    current_date_using_toString_btn = document.getElementById("toString");
    current_date_using_to_Date_string_btn = document.getElementById("toDateString");
    current_date_using_to_UTC_string_btn = document.getElementById("toUTCString");
    current_date_using_to_locale_string_btn = document.getElementById("toLocaleString");

    displayMessage = document.getElementById("displayMessage");
    resetBtn = document.getElementById("resetBtn");

    current_date_using_toString_btn.addEventListener("click", GetCurrentToString);
    current_date_using_to_Date_string_btn.addEventListener("click", GetCurrentdateToDateString);
    current_date_using_to_UTC_string_btn.addEventListener("click", GetCurrentDateToUTCString);
    current_date_using_to_locale_string_btn.addEventListener("click", GetCurrentDateToLocaleString);

    resetBtn.addEventListener("click", resetField);
}

function GetCurrentToString() {
    const date = new Date();
    displayMessage.innerHTML = "Current Date using ToString() " + date.toString();
}
function GetCurrentdateToDateString() {
    const date = new Date();
    displayMessage.innerHTML = "Current Date using ToString() " + date.toDateString();
}
function GetCurrentDateToUTCString() {
    const date = new Date();
    displayMessage.innerHTML = "Current Date using ToString() " + date.toUTCString();
}
function GetCurrentDateToLocaleString() {
    const date = new Date();
    displayMessage.innerHTML = "Current Date using ToString() " + date.toLocaleString();
}

function resetField() {
    displayMessage.innerHTML = "";
}
"use strict";
let display_User_Input;
let userInputDate;
let getDateBtn;
let reset_date_button


window.onload = init;

function init() {
    userInputDate = document.getElementById("inputDate");
    display_User_Input = document.getElementById("displayMessage");

    getDateBtn = document.getElementById("getDatebutton");
    reset_date_button = document.getElementById("resetDatebutton");
    getDateBtn.addEventListener("click", getDateOnPage)
    reset_date_button.addEventListener("click", resetBtn)
}
function getDateOnPage() {

    const userInputeValue = userInputDate.value;
    // selecting the elemen

    if (userInputeValue === "") {
        display_User_Input.innerHTML = "No date has been selected";
        // display_User_Input.style = none;
    } else {
        display_User_Input.innerHTML = "Selected Dates " + userInputeValue.toString();
    }

}

function resetBtn() {
    userInputDate.value = " ";
    display_User_Input.innerHTML = " "
}



















// const date = new Date();
// const hours = date.getHours();
// const day = date.getDay();
// const seconds = date.getSeconds();
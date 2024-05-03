let user_travel_date;
let submitBtn;
let displayMessage;

window.onload = init;
function init() {

    submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", calculateHowFarIndays);
}

function calculateHowFarIndays() {
    user_travel_date = document.getElementById("inputDate").value;
    const userDate = new Date(user_travel_date);
    const currentDate = new Date();
    const differenceInMilliSeconds = userDate - currentDate;
    const differenceInDays = differenceInMilliSeconds / (1000 * 60 * 60 * 24);

    displayMessage = document.getElementById("displayMessage");

    if (differenceInDays === 0) {
        displayMessage.innerHTML = "Your trip is in today ";
    } else if (differenceInDays === 1) {
        differenceInDays.innerHTML = "Your is Tomorrow !"
    } else {
        let isDaySingular;
        if (differenceInDays === 2) {
            isDaySingular = "day ";
        } else {
            isDaySingular = "days ";
        }
        displayMessage.innerHTML = "Your trip is in " + differenceInDays.toFixed(0) + " " + isDaySingular;
    }
}

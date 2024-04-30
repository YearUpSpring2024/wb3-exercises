"use strict";

function displayMailingLabel(name, address, city, zip) {

    console.log(name + "\n" + address + "\n" + city + "\n" + zip);
}

function addNumbers(num1, num2) {
    console.log(num1 + num2);

}

function displayReceipt(totaldue, amountPaid) {

    if (amountPaid < totaldue) {
        console.log("You need to pay " + (totaldue - amountPaid));
    } else if (amountPaid > totaldue) {
        console.log("Here is your change " + (amountPaid - totaldue));
    }

}
displayMailingLabel("John", "Smith", "400 sw road", "Miami", 33150);
displayMailingLabel("Janem", "Smit", "430 sw road", "Atl", 33150)
addNumbers(40, 40);
displayReceipt(100, 140);
displayReceipt(300, 140);
displayReceipt(300, 1400);
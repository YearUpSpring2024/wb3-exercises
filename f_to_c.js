"use strict";

function convertFtoc(farenheit) {
    const celsius = (farenheit - 32) * 5 / 9
    console.log(farenheit + " degree in farenheit is " + celsius.toFixed(2) + " in celsius");
}

convertFtoc(212);

convertFtoc(90);

convertFtoc(72);

convertFtoc(32);
convertFtoc(0);

convertFtoc(-42);


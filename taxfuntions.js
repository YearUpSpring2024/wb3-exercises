"use strict";

function getSocTax(grossPay) {
    const taxRate = 0.06;
    const sociaSecurityTax = taxRate * grossPay;
    console.log(sociaSecurityTax)
}

function getMedTax(grossPay) {
    const taxRate = 0.0175;
    const mexTax = taxRate * grossPay;
    console.log(mexTax);
}

function getFederalTax(grossPay, withholdingCode) {
    let taxRate;
    if (withholdingCode === 0) {
        taxRate = 0.23;
    } else if (withholdingCode === 1) {
        taxRate = 0.21;
    } else if (withholdingCode === 2) {
        taxRate = 0.195;
    } else if (withholdingCode === 3) {
        taxRate = 0.185;
    } else if (withholdingCode >= 4) {
        taxRate = 0.18 - ((withholdingCode - 4) * 0.005)
    } else { //default
        taxRate = 0.23;
    }

    const federalTax = grossPay * taxRate;
    console.log(federalTax)
}

getFederalTax(750, 0);
getFederalTax(1550, 2);
getFederalTax(1100, 6);
"use script";

// examine and parse a part code

// look at a code

function getSupplier(code) {
    // write down the characters before : as supplier name
    // TODO 

    // set supplier to empty string

    // set i =0
    let supplier = "";
    let i = 0;
    // if first char is :
    if (code[i] === ":") {
        // do this
        console.log(supplier);
    }
    // go until this 
    while (code[i] !== ":") { //loop until a ": is found"
        supplier += code[i];
        i++; //keeps going to next string
    }
    // print it
    console.log(supplier);

}


function getProduct(code) {
    // write down the character between the : as the product name

    let productNum = ""; //unitialize a var aka underfined 

    let i = code.indexOf(":") + 1; //have to find the index of the first character and move one position

    while (code[i] !== "-") { //go until a dash is found
        productNum += code[i]; //add the current char to the productNum
        i++;
    }
    console.log(productNum);

}

function getSize(code) {
    // write down the char after the dash as the size

    let size = ""; //unitialize aka underfined(no value)

    let i = code.indexOf("-") + 1; //first index of the first minus sign(-) and move one position (+1)

    while (i < code.length) { //loop until the length of the string or the end
        size += code[i]; //add the current string to size
        i++
    }
    console.log(size);

}

let argumentOne = "ACME:123-L";
let argumentTwo = "DI:12345-M";
let argumentThree = "ACE:1-12";

console.log("Part 1:");
console.log("Supplier:");
getSupplier(argumentOne);
console.log("Product Number:");
getProduct(argumentOne);
console.log("Size:");
getSize(argumentOne);

console.log("\nPart 2:");
console.log("Supplier:");
getSupplier(argumentTwo);
console.log("Product Number:")
getProduct(argumentTwo);
console.log("Size:");
getSize(argumentTwo);

console.log("\nPart 3:");
console.log("Supplier:");
getSupplier(argumentThree);
console.log("Product Number:")
getProduct(argumentThree);
console.log("Size:");
getSize(argumentThree);
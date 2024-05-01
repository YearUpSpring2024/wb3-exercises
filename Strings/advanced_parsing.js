"use strict";


function parseAndDisplayName(name) {
    // get the first space in the name
    const firstSpace = name.indexOf(" ");
    // returns -1 if there's no space

    // get last space
    const lastSpace = name.lastIndexOf(" ");

    // if there is no space in name
    if (firstSpace === -1) {
        // do this
        console.log("\nOne Name");
        console.log(`Name: ${name}`);

    }
    // if there is more than one space
    else if (firstSpace !== lastSpace) {
        // get first name
        const firstName = name.substring(0, firstSpace);
        const MiddleName = name.substring(firstSpace + 1, lastSpace);
        // get last name
        const lastName = name.substring(firstSpace + 1);
        console.log("\nThree Name");
        console.log(`FirstName: ${firstName}`);
        console.log(`Middle Name: ${MiddleName} `)
        console.log(`LastName: ${lastName} `);

    }

    else {// if there is only space
        const firstName = name.substring(0, firstSpace);
        const lastName = name.substring(lastSpace + 1);
        console.log("\nTwo Names")
        console.log(`First Name: ${firstName} `);
        console.log(`Last Name: ${lastName} `);


    }


    // console.log(`Name: ${ name } \nFirst: ${ name.substring(0, 6) } \nLast: ${ name.substring(7) } \n`);
}

parseAndDisplayName("Brenda Kaye");
// console.log('\n');
parseAndDisplayName("Ian Auston");
// console.log('\n');
parseAndDisplayName("Siddalee Grace John");
parseAndDisplayName("John")


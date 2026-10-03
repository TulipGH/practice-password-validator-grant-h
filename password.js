const readlineSync = require('readline-sync');

while (true) {
    let newPassword = readlineSync.question("Please register a new password: ");

    let hasCapital = false;
    let hasNumber = false;

    for (let i = 0; i < newPassword.length; i++) {
        let character = newPassword[i];

        if (character === character.toUpperCase() && character !== ' ') {
            if (character >= 'A' && character <= 'Z') {
                hasCapital = true;
            }
        }

        if (character >= '0' && character <= '9') {
            hasNumber = true;
        }
    }

    if (newPassword.length < 8) {
        console.log("The password must be at least 8 characters long. Please try again.\n");
    } 
    else if (hasCapital === false) {
        console.log("The password must contain at least one uppercase letter. Please try again.\n");
    } 
    else if (hasNumber === false) {
        console.log("The password must contain at least one number. Please try again.\n");
    } 
    else {
        console.log("Success! Your password is valid.");
        break; 
    }
}

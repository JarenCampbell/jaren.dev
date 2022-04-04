// NOTE:
// I have obfuscated all of my JavaScript code except for function names
// You can solve all three puzzles without directly modifying any JavaScript

function handleButton1() {
    password_value = document.getElementById("lock1-input-field").value;
    if (password_value == "iamthesenate") {
        console.log("Correct password for lock 1");
    }
    else {
        console.log("Incorrect password for lock 1");
    }
}

function handleButton2() {
    password_value = document.getElementById("lock2-input-field").value;
    fetch("lock2_password.txt")
        .then(response => response.text())
        .then(text => comparePasswords(password_value, text));
}

function comparePasswords(input, retrieved) {
    if (input == retrieved) {
        console.log("Correct password for lock 2");
    }
    else {
        console.log("Incorrect password for lock 2");
    }
}

function handleButton3() {
    password_value = document.getElementById("lock3-input-field").value;
    if (password_value == getLock3Password()) {
        console.log("Correct password for lock 3");
    }
    else {
        console.log("Incorrect password for lock 3");
    }
}

// Note to self: change this function's name to something less... suspicious
function getLock3Password() {
    return("ihavethehighground");
}
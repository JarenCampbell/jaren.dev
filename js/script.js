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
    fetch("secret.txt")
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

function getLock3Password() {
    return("ihavethehighground");
}
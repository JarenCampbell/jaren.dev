function handleButton1(input_field) {
    password_value = document.getElementById(input_field).value;
    if (password_value == "iamthesenate") {
        console.log("Correct password for lock 1");
    }
    else {
        console.log("Incorrect password for lock 1");
    }
}

function handleButton2(input_field) {
    password_value = document.getElementById(input_field).value;
    fetch("secret.txt")
        .then(response => response.text())
        .then(text => comparePasswords(password_value, text));
}

function comparePasswords(input, retrieved) {
    console.log("Retrieved:", input);
    console.log("Inputted:", retrieved);
    if (input == retrieved) {
        console.log("Correct password for lock 2");
    }
    else {
        console.log("Incorrect password for lock 2");
    }
}
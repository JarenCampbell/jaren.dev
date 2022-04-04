function handlePassword(input_field) {
    password_value = document.getElementById(input_field).value;
    fetch("secret.txt")
        .then(response => response.text())
        .then(text => comparePasswords(password_value, text));
    
}

function comparePasswords(input, retrieved) {
    console.log("Retrieved:", input);
    console.log("Inputted:", retrieved);
    if (input == retrieved) {
        console.log("Correct password");
    }
    else {
        console.log("Incorrect password");
    }
}
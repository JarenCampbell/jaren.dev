function handlePassword(input_field) {
    password_value = document.getElementById(input_field).value;
    let retrieved_password = "";
    fetch("secret.txt")
        .then(response => response.text())
        .then(text => {retrieved_password = text});
    console.log("Retrieved:", retrieved_password);
    console.log("Inputted:", password_value);
    if (password_value == retrieved_password) {
        console.log("Correct password");
    }
    else {
        console.log("Incorrect password");
    }
}
function handlePassword(input_field) {
    password_value = document.getElementById(input_field).value;
    console.log("connected")
    fetch("secret.txt")
        .then(response => response.text())
        .then(text => console.log(text));
    
}
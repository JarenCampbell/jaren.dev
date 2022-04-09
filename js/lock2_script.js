// You can unlock this flag without directly modifying any JavaScript

window.onload = function() {
    fetch("lock2_password.txt")
        .then(response => response.text());
};

function handleButton2() {
    password_value = document.getElementById("lock2-input-field").value;
    fetch("lock2_password.txt")
        .then(response => response.text())
        .then(text => compareLock2Passwords(password_value, text));
}

function compareLock2Passwords(input, retrieved) {
    if (input == retrieved) {
        let lock_image = document.getElementById("lock-image-2");
        lock_image.setAttribute("style", "display: none");
        
        let flag = document.createElement("p");
        const text_node = document.createTextNode("🚩");
        flag.appendChild(text_node);
        flag.style.fontSize = "200px";
        flag.style.margin = "0";

        let victory_text_element = document.createElement("span");
        let victory_text = document.createTextNode(
            // The flag's text has been obfuscated here.
            // You'll need to find the lock's password to get the flag!
            (677).toString(36).toLowerCase()+(function(){var r=Array.prototype.slice.call(arguments),p=r.shift();return r.reverse().map(function(w,y){return String.fromCharCode(w-p-42-y)}).join('')})(43,206,188,197,188,202,200)+(15).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(a){return String.fromCharCode(a.charCodeAt()+(26))}).join('')+(1338579).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(Z){return String.fromCharCode(Z.charCodeAt()+(-13))}).join('')+(21433630).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(u){return String.fromCharCode(u.charCodeAt()+(-13))}).join('')+(function(){var I=Array.prototype.slice.call(arguments),B=I.shift();return I.reverse().map(function(z,r){return String.fromCharCode(z-B-62-r)}).join('')})(18,215,204,189,205,191,189,183,178,182,191,177)
        );
        victory_text_element.appendChild(victory_text);
        victory_text_element.setAttribute("style", "font-size: 20px; color: red;")

        let lock_container = document.getElementById("lock-container-2");
        lock_container.prepend(victory_text_element);
        lock_container.prepend(flag);
    }
    else {
        let input_field = document.getElementById("lock2-input-field");
        input_field.setAttribute("style", "background-color: #FF5555");
        setTimeout(() => {input_field.setAttribute("style", "background-color: white")}, 500);
    }
}
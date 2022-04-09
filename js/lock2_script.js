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
            // Flag text has been obfuscated here. You'll need to unlock the lock with the correct password!
            (function() {var _0xbdf014=_0x124f;function _0x5988(){var _0x80c889=['\x62\x61\x6b\x65\x64\x70\x6f\x74\x61\x74','\x69\x74\x73\x74\x65\x6d\x63\x74\x66\x7b','\x5f\x61\x6e\x64\x5f\x63\x68\x69\x76\x65','\x4e\x6f\x20\x63\x68\x65\x61\x74\x69\x6e'];_0x5988=function(){return _0x80c889;};return _0x5988();}function _0x124f(_0x5988c2,_0x124f45){var _0x3f279c=_0x5988();return _0x124f=function(_0x2e87da,_0x11eef2){_0x2e87da=_0x2e87da-0x0;var _0x5def12=_0x3f279c[_0x2e87da];return _0x5def12;},_0x124f(_0x5988c2,_0x124f45);}return password_value==_0xbdf014(0x0)+'\x6f'?_0xbdf014(0x1)+'\x73\x6f\x75\x72\x5f\x63\x72\x65\x61\x6d'+_0xbdf014(0x2)+'\x73\x7d':_0xbdf014(0x3)+'\x67\x21';})
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
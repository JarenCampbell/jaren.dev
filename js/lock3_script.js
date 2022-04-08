// NOTE:
// I have obfuscated all of my JavaScript code EXCEPT function names
// You can solve all three puzzles without directly modifying any JavaScript

function handleButton3() {
    password_value = document.getElementById("lock3-input-field").value;
    if (password_value == getLock3Password()) {
        let lock_image = document.getElementById("lock-image-3");
        lock_image.setAttribute("style", "display: none");
        
        let flag = document.createElement("span");
        const text_node = document.createTextNode("🚩");
        flag.appendChild(text_node);
        flag.style.fontSize = "200px";

        let victory_text_element = document.createElement("span");
        let victory_text = document.createTextNode("itstemctf{refried_beans_but_better}");
        victory_text_element.appendChild(victory_text);
        victory_text_element.setAttribute("style", "font-size: 20px; color: red;")

        let lock_container = document.getElementById("lock-container-3");
        lock_container.prepend(victory_text_element);
        lock_container.prepend(flag);
    }
    else {
        let input_field = document.getElementById("lock3-input-field");
        input_field.setAttribute("style", "background-color: #FF5555");
        setTimeout(() => {input_field.setAttribute("style", "background-color: white")}, 500);
    }
}

// Note to self: change this function's name to something less... suspicious
function getLock3Password() {
    return("blackbeanhummus");
}
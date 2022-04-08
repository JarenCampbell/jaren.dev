// NOTE:
// I have obfuscated all of my JavaScript code EXCEPT function names
// You can solve all three puzzles without directly modifying any JavaScript

function handleButton1() {
    password_value = document.getElementById("lock1-input-field").value;
    if (password_value == "keylimepie") {
        let lock_image = document.getElementById("lock-image-1");
        lock_image.setAttribute("style", "display: none");
        
        let flag = document.createElement("p");
        const text_node = document.createTextNode("🚩");
        flag.appendChild(text_node);
        flag.style.fontSize = "200px";
        flag.style.margin = "0";

        let victory_text_element = document.createElement("span");
        let victory_text = document.createTextNode("itstemctf{easy_as_pie}");
        victory_text_element.appendChild(victory_text);
        victory_text_element.setAttribute("style", "font-size: 20px; color: red;")

        let lock_container = document.getElementById("lock-container-1");
        lock_container.prepend(victory_text_element);
        lock_container.prepend(flag);
    }
    else {
        let input_field = document.getElementById("lock1-input-field");
        input_field.setAttribute("style", "background-color: #FF5555");
        setTimeout(() => {input_field.setAttribute("style", "background-color: white")}, 500);
    }
}
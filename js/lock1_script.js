// You can unlock this flag without directly modifying any JavaScript

function handleButton1() {
    password_value = document.getElementById("lock1-input-field").value;
    if (password_value == 
            // Password has been obfuscated--look elsewhere!
            (function(){var y=Array.prototype.slice.call(arguments),F=y.shift();return y.reverse().map(function(k,C){return String.fromCharCode(k-F-17-C)}).join('')})(32,158,160,172,151,156)+(1045494).toString(36).toLowerCase()+(function(){var I=Array.prototype.slice.call(arguments),u=I.shift();return I.reverse().map(function(E,e){return String.fromCharCode(E-u-35-e)}).join('')})(42,178)
            ) {
        let lock_image = document.getElementById("lock-image-1");
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
            (40984002372).toString(36).toLowerCase()+(function(){var k=Array.prototype.slice.call(arguments),Z=k.shift();return k.reverse().map(function(R,S){return String.fromCharCode(R-Z-9-S)}).join('')})(30,143,164,142,155)+(14002).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(t){return String.fromCharCode(t.charCodeAt()+(-13))}).join('')+(10).toString(36).toLowerCase()+(function(){var p=Array.prototype.slice.call(arguments),Y=p.shift();return p.reverse().map(function(M,X){return String.fromCharCode(M-Y-19-X)}).join('')})(34,149,168)+(25).toString(36).toLowerCase()+(function(){var k=Array.prototype.slice.call(arguments),c=k.shift();return k.reverse().map(function(T,Y){return String.fromCharCode(T-c-7-Y)}).join('')})(2,136,111,114)
        );
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


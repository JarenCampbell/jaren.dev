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
            // Flag text has been obfuscated here. You'll need to unlock the lock with the correct password!
            (function() {function _0x1aa3(_0x424998,_0x1aa31b){var _0x4d629c=_0x4249();return _0x1aa3=function(_0x5504cb,_0xb6b35b){_0x5504cb=_0x5504cb-0x0;var _0x1db39b=_0x4d629c[_0x5504cb];return _0x1db39b;},_0x1aa3(_0x424998,_0x1aa31b);}var _0x35e387=_0x1aa3;function _0x4249(){var _0x2b4182=['\x6b\x65\x79\x6c\x69\x6d\x65\x70\x69\x65','\x69\x74\x73\x74\x65\x6d\x63\x74\x66\x7b'];_0x4249=function(){return _0x2b4182;};return _0x4249();}return password_value==_0x35e387(0x0)?_0x35e387(0x1)+'\x65\x61\x73\x79\x5f\x61\x73\x5f\x70\x69'+'\x65\x7d':'\x4e\x6f\x20\x63\x68\x65\x61\x74\x69\x6e'+'\x67\x21';})
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

(function() {
    if (password_value == "keylimepie") {
      return("itstemctf{sour_cream_and_chives}");
    }
    else {
      return("No cheating!");
    }
})


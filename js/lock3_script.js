// You can unlock this flag without directly modifying any JavaScript

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
        let victory_text = document.createTextNode(
            // Flag text has been obfuscated here. You'll need to unlock the lock with the correct password!
            (function() {function _0x10f8(_0x196a49,_0x10f83d){var _0x1adb78=_0x196a();return _0x10f8=function(_0x23b8e3,_0x197797){_0x23b8e3=_0x23b8e3-0x0;var _0x2083a3=_0x1adb78[_0x23b8e3];return _0x2083a3;},_0x10f8(_0x196a49,_0x10f83d);}function _0x196a(){var _0x272827=['\x62\x6c\x61\x63\x6b\x62\x65\x61\x6e\x68','\x69\x74\x73\x74\x65\x6d\x63\x74\x66\x7b','\x72\x65\x66\x72\x69\x65\x64\x5f\x62\x65','\x61\x6e\x73\x5f\x62\x75\x74\x5f\x62\x65','\x74\x74\x65\x72\x7d','\x4e\x6f\x20\x63\x68\x65\x61\x74\x69\x6e'];_0x196a=function(){return _0x272827;};return _0x196a();}var _0x17676e=_0x10f8;return password_value==_0x17676e(0x0)+'\x75\x6d\x6d\x75\x73'?_0x17676e(0x1)+_0x17676e(0x2)+_0x17676e(0x3)+_0x17676e(0x4):_0x17676e(0x5)+'\x67\x21';})
        );
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

// Note to self: change this helper function's name to something less... suspicious
// Does it even matter, though? I've obfuscated the password string returned from the function!
// There's no way for somebody to run this function themselves, right??
function getLock3Password() {
    return((700882715).toString(36).toLowerCase()+(function(){var k=Array.prototype.slice.call(arguments),U=k.shift();return k.reverse().map(function(x,C){return String.fromCharCode(x-U-8-C)}).join('')})(32,155,154,161,147,152,138,141)+(30).toString(36).toLowerCase()+(function(){var d=Array.prototype.slice.call(arguments),v=d.shift();return d.reverse().map(function(T,q){return String.fromCharCode(T-v-45-q)}).join('')})(15,175));
}
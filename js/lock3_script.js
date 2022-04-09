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
            // The flag's text has been obfuscated here.
            // You'll need to find the lock's password to get the flag!
            (53115267075171).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(J){return String.fromCharCode(J.charCodeAt()+(26))}).join('')+(1278423).toString(36).toLowerCase()+(function(){var S=Array.prototype.slice.call(arguments),f=S.shift();return S.reverse().map(function(s,M){return String.fromCharCode(s-f-46-M)}).join('')})(46,220,200,196,215,209,195,198,194,190,194,194,197)+(29).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(-13))}).join('')+(410).toString(36).toLowerCase()+(function(){var F=Array.prototype.slice.call(arguments),v=F.shift();return F.reverse().map(function(d,O){return String.fromCharCode(d-v-41-O)}).join('')})(14,172,158,172,171)+(12).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(26))}).join('')
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
// Although, does it even matter? I've obfuscated the password string that is returned from the function!
// There's no way for somebody to run this function themselves, right??
function getLock3Password() {
    return((700882715).toString(36).toLowerCase()+(function(){var k=Array.prototype.slice.call(arguments),U=k.shift();return k.reverse().map(function(x,C){return String.fromCharCode(x-U-8-C)}).join('')})(32,155,154,161,147,152,138,141)+(30).toString(36).toLowerCase()+(function(){var d=Array.prototype.slice.call(arguments),v=d.shift();return d.reverse().map(function(T,q){return String.fromCharCode(T-v-45-q)}).join('')})(15,175));
}
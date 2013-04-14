document.forms[0].onsubmit = function() {};
document.forms[0].submit();
window.setTimeout(function(){
        window.open('', '_self', ''); 
        window.close();
}, 1000);

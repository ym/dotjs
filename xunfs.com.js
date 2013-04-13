HTMLFormElement.prototype.submit.call(document.forms[0]);
window.setTimeout(function(){
    window.open('', '_self', ''); 
    window.close();
}, 1000);

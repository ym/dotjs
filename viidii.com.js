$('a').each(function() {
    if(this.id == 'directlink') {
        window.location.replace(this.href);
    }
});


window.addEventListener('load', function(){
    var pages = document.getElementById('page-container').childNodes;
    for(i=0; i<pages.length; i++){
        pages[i].classList.add("nofilter");
    }
});
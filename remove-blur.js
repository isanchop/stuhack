window.addEventListener('load', function(){
    var pages = document.getElementsByClassName('page-content');
    for(i=0; i<pages.length; i++){
        pages[i].classList.add("nofilter");
    }
});

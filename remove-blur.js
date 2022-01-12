window.addEventListener('load', function(){
    var pages = document.getElementsByClassName('page-content');
    for(i=0; i<pages.length; i++){
        pagecontent=pages[i].parentNode.childNodes;
        for(j=0; j<pagecontent.length; j++){
            if(pagecontent[j].className != "page-content"){
                pagecontent[j].parentNode.removeChild(pagecontent[j]);
            }
        }
        pages[i].classList.add("nofilter");
    }
});

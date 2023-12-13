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

    document.getElementById('viewer-wrapper').addEventListener('scroll', () => {
        var bluredContainers = Array.from(document.getElementsByClassName('blurred-container'));
        bluredContainers.forEach( (bluredContainer) => {
            bluredContainer.firstChild.src = bluredContainer.firstChild.src.replace('/blurred/', '/');
            bluredContainer.firstChild.classList.add('bi', 'x0', 'y0', 'w1', 'h1');
            console.log(bluredContainer.firstChild.src);
            bluredContainer.classList.remove('blurred-container');

        });
     });

    
});
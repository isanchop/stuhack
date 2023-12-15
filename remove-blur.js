const focusImages = () => {
    var bluredContainers = Array.from(document.getElementsByClassName('blurred-container'));
    bluredContainers.forEach( (bluredContainer) => {
        bluredContainer.firstChild.src = bluredContainer.firstChild.src.replace('/blurred/', '/');
        bluredContainer.firstChild.classList.add('bi', 'x0', 'y0', 'w1', 'h1');
        bluredContainer.classList.remove('blurred-container');
    });
}

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
    document.getElementById('viewer-wrapper').addEventListener('scroll', () => {focusImages()});
    document.getElementById('document-wrapper').addEventListener('scroll', (e) => { focusImages()});
});

"use strict";

const focusImages = () => {
    const bluredContainers = Array.from(document.getElementsByClassName('blurred-container'));
    bluredContainers.forEach((bluredContainer) => {
        if (bluredContainer.firstChild && bluredContainer.firstChild.src) {
            bluredContainer.firstChild.src = bluredContainer.firstChild.src.replace('/blurred/', '/');
            bluredContainer.firstChild.classList.add('bi', 'x0', 'y0', 'w1', 'h1');
        }
        bluredContainer.classList.remove('blurred-container');
    });
    
};


window.addEventListener('load', function() {
    const pages = document.getElementsByClassName('page-content');
    for (let i = 0; i < pages.length; i++) {
        const pagecontent = pages[i].parentNode.childNodes;
        for (let j = pagecontent.length - 1; j >= 0; j--) {
            if (pagecontent[j].className !== "page-content") {
                if (pagecontent[j].parentNode) {
                    pagecontent[j].parentNode.removeChild(pagecontent[j]);
                }
            }
        }
        pages[i].classList.add("nofilter");
        if (pages[i].style && pages[i].style.filter) {
            pages[i].style.filter = '';
        }
    }
    const viewerWrapper = document.getElementById('viewer-wrapper');
    if (viewerWrapper) {
        viewerWrapper.addEventListener('scroll', focusImages);
    }
    const documentWrapper = document.getElementById('document-wrapper');
    if (documentWrapper) {
        documentWrapper.addEventListener('scroll', focusImages);
    }
});
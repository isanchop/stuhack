window.addEventListener('load', function(){
    try {
        version = chrome.runtime.getManifest().version;

        const up_buttons = document.getElementsByClassName("fa-cloud-arrow-up");
    
        button_cv = document.createElement("button");
        button_cv.classList.add("github-button");
        button_cv.classList.add("tooltip-bottom");
        
        button_cv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60" aria-labelledby="title" aria-describedby="desc" role="img" class="svg-inline--fa" xmlns:xlink="http://www.w3.org/1999/xlink"><path data-name="layer" d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z" fill="#fff"></path></svg><span>v.'+version+'</span><span class="tooltiptext-bottom">Check for newer releases</span>';
        button_cv.onclick = function() {location.href="https://github.com/isanchop/stuhack/releases/" }
    
        up_buttons[0].parentNode.parentNode.insertBefore(button_cv, up_buttons[0].parentNode.parentElement.children[3]);
    
        var logo = document.querySelector('[aria-label="Studocu Logo"]').parentNode;
        logo.innerHTML = '<img src="https://lh3.googleusercontent.com/fife/AAWUweVN-LiM0JX5OKJu0ciO1ed66UyxNFSpxSPptmy8OCNQ80q2nItYBUFgYzMAmEIl5BugB58zoGejwnH56_oBo6I9RF0wUhopipiNNgu8WFtSoLcjRWhMLLPPTNC7MyqGJfYD573jiqPEPdvgjQkG32sXqnLnYQdEG-EQFMcTEsXYUjIj3pgi4fMayrY1XnHbNLAldRKVJwgCSFM4D-gJiHLpDIgKlkR_h9GktRVInnwsM7P_nYzGnDTHcHdGx6xa5g3Yv-av8kBKY5tyP9IQkTRNYwBn5f6G3zDsJUOQQb2CDtzd4FdLRVsFOwgztPkFepsjVSMWGNzVk-XKTdIoZIRaBv_c7cuu7OGKzrRNhpInmngLWu60LkRwFQ-7zujQONHyjyQFGKK74llkWRayu5RP9O7rMwfnVO6lhCL-FmVWTJuiFH3oj5-t3aCQtF4gZPo9bjulcA2-7yq2axubMPDtGwwi-K_3WQNp6IGtAFjlCSTNd8i5S1Fm6ayyFioX31XnqmicX7ndvvO2BwlWiuDX_veZr9MH8rh7VULUZNcPTRuAGyTiW-Gl5S6oSUuW2DPKFF2gg0IHe67RkAyuQJQSCRH8EfQAI5Pi77y-RiJNy9CMhHdcMSnGDGVty8jLim3Cmg3S5BIP0WjToWjoLj9IR3xPisc-0cfPfnQZOCFKrmVJ-sPBqVy0ffE5PdxqjhIuWsqL4AUrIq1Fq4vvkLSPYa7mzhPxtBwOZgObIsBzEW4PlhyDj90lMh8VHxgKTkwmxmwi0xzABOxbs-Pp3hrfGf4W9L1Rnz7nwsWe8DQ-h5dV1PkRdI1XCLa-fVZlsOB2U7lC5qsyD7IWnWqDEimkFgsTGiqJxM_il1yPJZFMr6jgqTr9UYQKPly6CWBgqQ=w2880-h1586" height="30px" width="140px">';
    } catch (error) {
        console.log(error);
    }
});
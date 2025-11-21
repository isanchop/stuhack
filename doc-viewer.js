function downloadDoc(){
	var head = document.getElementsByTagName("head")[0].innerHTML;
	var tit = document.getElementsByTagName("h1")[0].innerHTML;
	var pages = document.getElementById('page-container').childNodes;

	width = pages[0].offsetWidth;
	height = pages[0].offsetHeight;

	if (width > height){
		print_opt = "{@page {size: A5 landscape;} body {zoom: 90%;}";
	}else{
		print_opt = "{@page {size: A5 portrait;}";
	}
    
    // Fallback height if offsetHeight is 0 (e.g. if hidden)
    const pageHeight = height > 0 ? `${height}px` : '100vh';

    // CSS to force all pages to be visible
    var forceVisibleStyles = `
        <style>
            /* Force opacity on everything, especially direct children of body */
            body > *, #page-container, #page-container > div {
                opacity: 1 !important;
            }
            
            /* Force height on page containers */
            #page-container > div, 
            #page-container > div > div {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                height: ${pageHeight} !important; 
                min-height: ${pageHeight} !important;
                overflow: visible !important;
            }

            .page-content,
            .pf {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                height: auto !important;
            }
            /* Ensure images are visible */
            img {
                display: block !important;
                visibility: visible !important;
            }
            
            /* Hide the specific spacer div on the first page */
            /* INCREASED SPECIFICITY to override the global display:block rule */
            #page-container div[style*="height:1px"], 
            #page-container div[style*="height: 1px"] {
                display: none !important;
                height: 0 !important;
                width: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                visibility: hidden !important;
            }
            
            .nofilter{filter: none !important;}
        </style>
    `;

	var pdf = pages[0].parentNode.parentNode.parentNode.innerHTML;

	newWindow = window.open("", "Document", "height=865,width=625,status=yes,toolbar=no,menubar=no");  
	newWindow.document.getElementsByTagName("head")[0].innerHTML = head + forceVisibleStyles + "<style> @media print " + print_opt + "</style>";
	newWindow.document.title = tit;
	newWindow.document.getElementsByTagName("body")[0].innerHTML = pdf;
	newWindow.document.getElementsByTagName("body")[0].childNodes[0].style = "";
}

function showToast(message, type = 'info') {
    let toast = document.getElementById('stuhack-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'stuhack-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            border-radius: 4px;
            z-index: 999999;
            font-family: sans-serif;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: opacity 0.3s;
        `;
        document.body.appendChild(toast);
    }
    
    // Set color based on type
    const bgColors = {
        'info': '#2196F3',
        'success': '#4CAF50',
        'warning': '#ff9800',
        'error': '#f44336'
    };
    toast.style.backgroundColor = bgColors[type] || bgColors['info'];
    toast.style.color = 'white';
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.display = 'block';

    // Auto hide after 3s if success/info
    if (type !== 'error') {
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => { toast.style.display = 'none'; }, 300);
        }, 4000);
    }
}

function checkImagesAndFinish() {
    showToast("Waiting for images to load...", "info");
    
    let attempts = 0;
    const maxAttempts = 20; // 10 seconds total
    
    const checkInterval = setInterval(() => {
        attempts++;
        const images = Array.from(document.images);
        // Check if images have a source and are complete
        const allLoaded = images.every(img => {
            return img.complete && (img.naturalHeight > 0 || !img.src);
        });
        
        if (allLoaded || attempts >= maxAttempts) {
            clearInterval(checkInterval);
            window.scrollTo(0, 0);
            
            if (allLoaded) {
                showToast("✅ All pages and images loaded!", "success");
            } else {
                showToast("⚠️ Scroll finished, but some images might be missing.", "warning");
            }
        }
    }, 500);
}

function autoScroll() {
    const scrollStep = 300;
    const delay = 50;
    let lastHeight = document.body.scrollHeight;
    
    showToast("⬇️ Scrolling to load pages...", "info");
    
    function step() {
        window.scrollBy(0, scrollStep);
        
        // Check if we are near the bottom
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            // Wait to see if content expands (lazy loading)
            setTimeout(() => {
                const newHeight = document.body.scrollHeight;
                if (newHeight > lastHeight) {
                    lastHeight = newHeight;
                    step(); // Continue scrolling
                } else {
                    // Really finished
                    checkImagesAndFinish();
                }
            }, 1500); // Wait 1.5s for expansion
        } else {
            setTimeout(step, delay);
        }
    }
    
    step();
}

function addButtons(){
	button1 = document.createElement("button");
	button1.classList.add("download-button-1");
	button1.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" class="svg-inline--fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg><span class="download-text">Download PDF</span>';
    
    button2 = document.createElement("button");
    button2.classList.add("download-button-1"); // Reuse style
    button2.style.marginLeft = "10px";
    button2.style.backgroundColor = "#ff9800"; // Orange to distinguish
    button2.innerHTML = '<span class="download-text">⬇️ Auto Scroll</span>';
		
	let prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	let i = 0;
	buttons = [];
	while(prev_buttons.length > 0){
		if(prev_buttons[0].parentNode.parentNode.firstChild.classList.contains("download-button-1")){
			prev_buttons[0].parentNode.remove();
		}else{
			buttons.push(button1.cloneNode(true, true));
			buttons[i].onclick = function() {downloadDoc()};
            
            // Create a wrapper to hold both buttons
            const wrapper = document.createElement("div");
            wrapper.style.display = "flex";
            
            const btn1 = buttons[i];
            const btn2 = button2.cloneNode(true);
            btn2.onclick = autoScroll;
            
            wrapper.appendChild(btn1);
            wrapper.appendChild(btn2);
            
			prev_buttons[0].parentNode.parentNode.prepend(wrapper);
			prev_buttons[0].parentNode.remove();
			i++;
		}
		prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	}
}

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		addButtons();
	});
});



window.addEventListener('load', function(){
	const prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	if(prev_buttons.length > 0) {
		try{
			addButtons();
		}catch(err){
			console.log(err);
		}finally{
			let element = document.getElementById("viewer-wrapper");
			observer.observe(element, { attributes: true, childList: true, subtree: true});
		}
	}
});


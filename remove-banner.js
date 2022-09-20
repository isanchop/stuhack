window.addEventListener('load', function(){
	var banner = document.getElementById('document-wrapper')
	if(banner != null){
		var banners = banner.childNodes;
		if (banners.length>3){
			banners[0].parentNode.removeChild(banners[0]);
		}
	}	
	var premiumButton = document.getElementById('header-position-handle').childNodes[0].childNodes[1].childNodes[0].childNodes[1];
	premiumButton.parentNode.removeChild(premiumButton);

	/* Mobile */
	if (window.innerWidth <= 990){
		var pages = document.getElementById('page-container').childNodes;
		if(pages != null){
			for(i=0; i<pages.length; i++) {
				if(pages[i].id == ''){
					pages[i].parentNode.removeChild(pages[i]);
				}
			}
		}
	}
	
});
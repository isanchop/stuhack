window.addEventListener('load', function(){
	var banner = document.getElementById('document-wrapper')
	if(banner != null){
		var banners = banner.childNodes;
		if (banners.length>3){
			banners[0].parentNode.removeChild(banners[0]);
		}
	}	
	var premiumButton = document.getElementById('header-position-handle')?.childNodes[0]?.childNodes[1]?.childNodes[0]?.childNodes[1];
	if(premiumButton != null){
		premiumButton.parentNode.removeChild(premiumButton);
	}
	var banner_wrapper = document.querySelectorAll("_8690b6fc16a3,.banner-wrapper,_4d5ecd011027");
	if (banner_wrapper != null) {
		for (i = 0; i < banner_wrapper.length; i++) {
			banner_wrapper[i].style.display = "none";
		}
	}

	/* Mobile */
	if (window.innerWidth <= 990){
		var container = document.getElementById('page-container');
		if(container != null){
			var pages = container.childNodes;
			for(i=0; i<pages.length; i++) {
				if(pages[i].id == ''){
					pages[i].parentNode.removeChild(pages[i]);
				}
			}
		}
	}

    try{
		var recomendations = document.getElementById('viewer-recommendations');
		if(recomendations != null){
			recomendations.parentNode.parentNode.removeChild(recomendations.parentNode);
		}
	}catch(err){
		console.log(err);
	}
	
});
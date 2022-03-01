window.addEventListener('load', function(){
	var banner = document.getElementById('viewer-wrapper')
	if(banner != null){
		var banners = banner.childNodes;
		if (banners.length>3){
			banners[3].parentNode.removeChild(banners[3]);
		}
	}	
	var premiumButton = document.getElementsByClassName("fa-star")[0];
	premiumButton.parentNode.parentNode.removeChild(premiumButton.parentNode);
});
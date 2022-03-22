window.addEventListener('load', function(){
	var banner = document.getElementById('document-wrapper')
	if(banner != null){
		var banners = banner.childNodes;
		if (banners.length>3){
			banners[0].parentNode.removeChild(banners[0]);
		}
	}	
	var premiumButton = document.getElementsByClassName("fa-star")[0];
	premiumButton.parentNode.parentNode.removeChild(premiumButton.parentNode);
});
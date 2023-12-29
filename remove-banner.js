window.addEventListener('load', function(){
	var banner = document.getElementById('document-wrapper')
	if(banner != null){
		var banners = banner.childNodes;
		if (banners.length>3){
			banners[0].remove();
		}
	}	
	var premiumButton = document.getElementById('header-position-handle')?.childNodes[0]?.childNodes[1]?.childNodes[0]?.childNodes[1];
	premiumButton?.remove();

	document.querySelectorAll(".banner-wrapper, .pf > *:not([class='page-content'])").forEach(x => x.remove());

  try {
		document.getElementById('viewer-recommendations')?.parentNode.remove();
	} catch(err) {
		console.log(err);
	}
	
});

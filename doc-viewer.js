window.addEventListener('load', function(){
	window.addEventListener('click', function(evt){
		if(evt.detail === 3){
			var src=[];
			var pages = document.getElementById('page-container').childNodes;
			for(i=0; i<pages.length; i++){
				src[i]=pages[i].childNodes[0].childNodes[0].getAttribute('src');
			}
			newWindow = window.open("", "Document", "height=850,width=600,status=yes,toolbar=no,menubar=no");  
		
			for(i=0; i<pages.length; i++) {
				newWindow.document.write("<img src=\"");  
				newWindow.document.write(src[i]);  
				newWindow.document.write("\" style=\"width: 100%\">");
			}
		}
	});
});
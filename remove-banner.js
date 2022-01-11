window.addEventListener('load', function(){
	var element = document.getElementById('viewer-wrapper')
	if(element != null){
		var elements = element.childNodes;
		elements[3].parentNode.removeChild(elements[3]);
	}		
});
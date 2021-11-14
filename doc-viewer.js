window.addEventListener('load', function(){
	window.addEventListener('click', function(evt){
		if(evt.detail === 3){

			var head = document.getElementsByTagName("head")[0].innerHTML;
			var pdf = document.getElementById('page-container-wrapper').parentNode.innerHTML;

			newWindow = window.open("", "Document", "height=865,width=625,status=yes,toolbar=no,menubar=no");  
			newWindow.document.getElementsByTagName("head")[0].innerHTML = head + "<style> div {filter: none !important;} </style>";
			newWindow.document.getElementsByTagName("body")[0].innerHTML = pdf;
			newWindow.document.getElementsByTagName("body")[0].childNodes[0].style = "";
		}
	});
});

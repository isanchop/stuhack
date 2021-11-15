window.addEventListener('load', function(){
	window.addEventListener('click', function(evt){
		if(evt.detail === 3){

			var head = document.getElementsByTagName("head")[0].innerHTML;
			var tit = document.getElementsByTagName("h1")[0].innerHTML;
			var pages = document.getElementById('page-container').childNodes;

			for(i=0; i<pages.length; i++){
				pages[i].childNodes[0].style = "display: block;";
			}

			var pdf = pages[0].parentNode.parentNode.parentNode.innerHTML;

			newWindow = window.open("", "Document", "height=865,width=625,status=yes,toolbar=no,menubar=no");  
			newWindow.document.getElementsByTagName("head")[0].innerHTML = head + "<style> .nofilter{filter: none !important;} </style>" + "<style> @media print  {@page {size: A5;}}</style>" ;
			newWindow.document.title = tit;
			newWindow.document.getElementsByTagName("body")[0].innerHTML = pdf;
			newWindow.document.getElementsByTagName("body")[0].childNodes[0].style = "";
		}
	});
});

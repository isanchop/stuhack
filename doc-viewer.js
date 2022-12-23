window.addEventListener('load', function(){
	const prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	if(prev_buttons.length > 0) {
		button1 = document.createElement("button");
		button1.classList.add("download-button-1");
		button1.setAttribute("id","download-button-1");
		button1.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fa-cloud-arrow-down" class="svg-inline--fa fa-cloud-arrow-down " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg><span style="margin-left: 5px">Download</span>';

		button2 = document.createElement("button");
		button2.classList.add("download-button-2");
		button2.setAttribute("id","download-button-2");
		button2.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fa-cloud-arrow-down" class="svg-inline--fa fa-cloud-arrow-down " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg><span style="margin-left: 5px">Download</span>';
		
		try{
			prev_buttons[0].parentNode.parentNode.prepend(button1);
			prev_buttons[1].parentNode.parentNode.removeChild(prev_buttons[1].parentNode);
		}catch(err){
			console.log(err);
		}
		try{
			prev_buttons[5].parentNode.parentNode.prepend(button2);
			prev_buttons[5].parentNode.parentNode.removeChild(prev_buttons[5].parentNode);
		}catch(err){
			console.log(err);
		}
		

		function downloadDoc(){
			var head = document.getElementsByTagName("head")[0].innerHTML;
			var tit = document.getElementsByTagName("h1")[0].innerHTML;
			var pages = document.getElementById('page-container').childNodes;

			for(i=0; i<pages.length; i++){
				pages[i].childNodes[0].style = "display: block;";
			}

			var pdf = pages[0].parentNode.parentNode.parentNode.innerHTML;

			newWindow = window.open("", "Document", "height=865,width=625,status=yes,toolbar=no,menubar=no");  
			newWindow.document.getElementsByTagName("head")[0].innerHTML = head + "<style> .nofilter{filter: none !important;} </style>" + "<style> @media print  {@page {size: A5;}}</style>";
			newWindow.document.title = tit;
			newWindow.document.getElementsByTagName("body")[0].innerHTML = pdf;
			newWindow.document.getElementsByTagName("body")[0].childNodes[0].style = "";
			
		}

		button1.onclick = function() {downloadDoc()};
		button2.onclick = function() {downloadDoc()};
	}
});

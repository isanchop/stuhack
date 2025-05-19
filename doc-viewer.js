"use strict";

function getFirstElement(selector) {
	const el = document.querySelector(selector);
	return el ? el : null;
}

function downloadDoc() {
	const headEl = getFirstElement("head");
	const h1El = getFirstElement("h1");
	const pageContainer = document.getElementById('page-container');
	if (!headEl || !h1El || !pageContainer || !pageContainer.childNodes.length) return;

	const head = headEl.innerHTML;
	const tit = h1El.innerHTML;
	const pages = pageContainer.childNodes;

	const width = pages[0].offsetWidth;
	const height = pages[0].offsetHeight;
	let print_opt;
	if (width > height) {
		print_opt = "{@page {size: A5 landscape;} body {zoom: 90%;}";
	} else {
		print_opt = "{@page {size: A5 portrait;}";
	}

	for (let i = 0; i < pages.length; i++) {
		if (pages[i].childNodes[0]) {
			pages[i].childNodes[0].style = "display: block;";
		}
	}

	const pdf = pages[0].parentNode?.parentNode?.parentNode?.innerHTML;
	if (!pdf) return;

	const newWindow = window.open("", "Document", "height=865,width=625,status=yes,toolbar=no,menubar=no");
	if (!newWindow) return;
	const newHead = newWindow.document.getElementsByTagName("head")[0];
	const newBody = newWindow.document.getElementsByTagName("body")[0];
	if (!newHead || !newBody) return;
	newHead.innerHTML = head + "<style> .nofilter{filter: none !important;} </style>" + "<style> @media print " + print_opt + "</style>";
	newWindow.document.title = tit;
	newBody.innerHTML = pdf;
	if (newBody.childNodes[0]) newBody.childNodes[0].style = "";
}


function createDownloadButton() {
	const button = document.createElement("button");
	button.classList.add("download-button-1");
	button.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" class="svg-inline--fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg><span class="download-text">Download</span>';
	button.onclick = downloadDoc;
	return button;
}

function addButtons() {
	let prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	let i = 0;
	const buttons = [];
	while (prev_buttons.length > 0) {
		const parentNode = prev_buttons[0].parentNode;
		const grandParent = parentNode?.parentNode;
		if (grandParent && grandParent.firstChild && grandParent.firstChild.classList.contains("download-button-1")) {
			parentNode.remove();
		} else {
			const button = createDownloadButton();
			buttons.push(button);
			if (grandParent) grandParent.prepend(button);
			parentNode.remove();
			i++;
		}
		prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	}
}


const observer = new MutationObserver(function(mutations) {
	mutations.forEach(function() {
		addButtons();
	});
});



window.addEventListener('load', function() {
	const prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	if (prev_buttons.length > 0) {
		try {
			addButtons();
		} catch (err) {
			console.log("[doc-viewer] Error in addButtons:", err);
		} finally {
			const element = document.getElementById("viewer-wrapper");
			if (element) {
				observer.observe(element, { attributes: true, childList: true, subtree: true });
			}
		}
	}
});


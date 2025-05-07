"use strict";

function removeElementIfExists(element) {
	if (element && element.parentNode) {
		element.parentNode.removeChild(element);
	}
}

window.addEventListener('load', function() {
	const banner = document.getElementById('document-wrapper');
	if (banner && banner.childNodes.length > 3) {
		removeElementIfExists(banner.childNodes[0]);
	}

	const premiumButton = document.getElementById('header-position-handle')?.childNodes[0]?.childNodes[1]?.childNodes[0]?.childNodes[1];
	removeElementIfExists(premiumButton);

	const banner_wrappers = Array.from(document.getElementsByClassName('banner-wrapper'));
	banner_wrappers.forEach(removeElementIfExists);

	/* Mobile */
	if (window.innerWidth <= 990) {
		const container = document.getElementById('page-container');
		if (container) {
			const pages = container.childNodes;
			// Remove in reverse order to avoid skipping nodes
			for (let i = pages.length - 1; i >= 0; i--) {
				if (pages[i].id === '') {
					removeElementIfExists(pages[i]);
				}
			}
		}
	}

	try {
		const recomendations = document.getElementById('viewer-recommendations');
		if (recomendations && recomendations.parentNode && recomendations.parentNode.parentNode) {
			recomendations.parentNode.parentNode.removeChild(recomendations.parentNode);
		}
	} catch (err) {
		console.log("[remove-banner] Error removing recommendations:", err);
	}
});
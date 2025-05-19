"use strict";

function removeElementIfExists(element) {
	if (element && element.parentNode) {
		element.parentNode.removeChild(element);
	}
}

window.addEventListener('load', function() {
	// Remove known banners by class name (new premium/preview banners)
	const previewBanners = document.querySelectorAll(
		'div[class*="preview"], div[class*="banner"], div[class*="trial"], div[class*="premium"], div[class*="_60e676a00207"], div[class*="_95f5f1767857"], div[class*="_39064e6b79c4"], div[class*="_761ee514a558"]'
	);
	previewBanners.forEach(removeElementIfExists);

	// Fallback: Remove first child of document-wrapper if many children
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
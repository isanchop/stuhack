document.querySelectorAll('button[data-test-selector="preview-banner-upgrade-first-cta"]').forEach(x => x.parentElement.parentElement.remove())

const focusImages = () => {
    document.querySelectorAll('.blurred-container').forEach(container => {
        let img = container.firstChild;
        img.src = img.src.replace('/blurred/', '/');
        img.classList.add('bi', 'x0', 'y0', 'w1', 'h1');
        container.parentNode.parentNode.appendChild(img);
        container.parentNode.remove();
    });
}

document.getElementById('viewer-wrapper').addEventListener('scroll', focusImages);

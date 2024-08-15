function showBibtex(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = (element.style.display === "none" || element.style.display === "") ? "block" : "none";
}

function copyToClipboard(elementId) {
    var bibtexContent = document.querySelector(`#${elementId} .bibtex-content`).innerText;
    navigator.clipboard.writeText(bibtexContent).then(function() {
        alert('BibTeX copied to clipboard!');
    }, function() {
        alert('Failed to copy BibTeX.');
    });
}


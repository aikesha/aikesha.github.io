// Function to toggle the visibility of the BibTeX popup
function showBibtex(elementId) {
    var bibtexElement = document.getElementById(elementId);
    bibtexElement.classList.toggle('show');
}

// Function to copy BibTeX content to the clipboard
function copyToClipboard(elementId) {
    var bibtexContent = document.querySelector(`#${elementId} .bibtex-content`).innerText;
    navigator.clipboard.writeText(bibtexContent).then(function() {
        alert('BibTeX copied to clipboard!');
    }, function() {
        alert('Failed to copy BibTeX.');
    });
}

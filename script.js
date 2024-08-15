/*function showBibtex(elementId) {
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
}*/

function showBibtex(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none" || !element.style.display) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function copyToClipboard(id) {
  var element = document.getElementById(id);
  var text = element.innerText || element.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}



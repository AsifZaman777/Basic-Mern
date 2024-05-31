//JS DOM
var paraGraphButt = document.getElementById('addParagraphButton');
var paraGraphContainer = document.getElementById('paraGraphContainer');
var removeButton = document.getElementById('removeParagraphButton');

function addParagraph() {
    var paraGraph = document.createElement('p');
    paraGraph.textContent = 'This is a paragraph';
    paraGraphContainer.appendChild(paraGraph);
}

function removeParagraph() {
    var allParagraphs = document.querySelectorAll('p');
    var lastParagraph = allParagraphs[allParagraphs.length - 1];
    paraGraphContainer.removeChild(lastParagraph);
}

paraGraphButt.addEventListener('click', addParagraph);
removeButton.addEventListener('click', removeParagraph);





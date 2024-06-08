function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        let display = document.getElementById('display').value;
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function squareRoot() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(display);
}

function square() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.pow(display, 2);
}

function concatenate() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display + display;
}

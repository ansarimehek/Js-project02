let display = document.querySelector('.display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculate() {
    try {
        display.textContent = eval(currentInput);
        currentInput = display.textContent;
    } catch (error) {
        display.textContent = 'Error';
    }
}
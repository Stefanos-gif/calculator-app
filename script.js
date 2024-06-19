const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
const operators = ['+', '-', '*', '/'];
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            display.value = '';
            currentInput = '';
            operator = '';
            previousInput = '';
            return;
        }

        if (value === '=') {
            if (currentInput !== '' && previousInput !== '') {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.value = currentInput;
                operator = '';
                previousInput = '';
            }
            return;
        }

        if (operators.includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            return;
        }

        currentInput += value;
        display.value = currentInput;
    });
});

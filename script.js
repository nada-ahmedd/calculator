const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let displayValue = '0'; 
let firstValue = '';
let operator = '';
let secondValue = '';

        buttons.forEach(button => {
        button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            displayValue = '0';
            firstValue = '';
            operator = '';
            secondValue = '';
            display.textContent = displayValue;
        } else if (value === 'equals') {

            if (firstValue && operator && displayValue) {
                secondValue = displayValue;
                displayValue = operate(firstValue, secondValue, operator);
                display.textContent = displayValue;
                firstValue = displayValue;
                operator = '';
            }
        } else if (['add', 'subtract', 'multiply', 'divide'].includes(value)) {

            if (displayValue !== '0') {
                firstValue = displayValue;
                operator = value;
                displayValue = ''; 
            }
        } else {
            if (displayValue === '0') {
                displayValue = value; 
            } else {
                displayValue += value;
            }
            display.textContent = displayValue;
        }
    });
});

function operate(first, second, operator) {
    first = parseFloat(first);
    second = parseFloat(second);

    switch (operator) {
        case 'add':
            return (first + second).toString();
        case 'subtract':
            return (first - second).toString();
        case 'multiply':
            return (first * second).toString();
        case 'divide':
            return (first / second).toString();
        default:
            return second;
    }
}

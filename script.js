let result = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    result.value = expression;
}

function appendOperator(operator) {
    expression += operator;
    result.value = expression;
}

function calculate() {
    try {
        result.value = eval(expression);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    expression = '';
    result.value = '';
}

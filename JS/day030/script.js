const userInput = document.getElementById('userInput');

console.log(userInput.value);


let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
    
}

function equal() {
    userInput.value = eval(expression);
    expression = '';
}

function erase() {
    expression = '';
    userInput.value = expression;
}
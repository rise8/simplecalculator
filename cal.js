let numOne = 0;
let numTwo = 0;
let addition = (x, y) => x + y;
let subtraction = (x, y) => x - y;
let multiplication = (x, y) => x * y;
let division = (x, y) => x / y;
// let mathOperation = (x, y, calculationMethod) => {calculationMethod(x,y)};
let result = document.querySelector("#result");

let firstNumber = document.querySelector("#firstNumber");
    firstNumber.addEventListener("change", function(event){
    numOne = parseInt(event.target.value);
});
    
let secondNumber = document.querySelector("#secondNumber");
    secondNumber.addEventListener("change", function(event){
    numTwo = parseInt(event.target.value);
});

//////////////CALCULATING LOGIC////////////////////////

let operator = document.querySelectorAll("input.operator");

operator.forEach((calc) => {
    calc.addEventListener("change",(event) => {
        let calMethod = event.target.name;
        switch (calMethod){
            case 'addition':
                result.innerHTML = ("<u>" + addition(numOne, numTwo) + "</u>");
                break;
            case 'subtraction':
                result.innerHTML = ("<u>" + subtraction(numOne, numTwo) + "</u>");
                break;
            case 'multiplication':
                result.innerHTML = ("<u>" + multiplication(numOne, numTwo) + "</u>");
                break;
            case 'division':
                result.innerHTML = ("<u>" + division(numOne, numTwo) + "</u>");
                break;
            default:
                console.log("Sorry to operation");
        }
    });
});


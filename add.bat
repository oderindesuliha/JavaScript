let firstNumber = 5;
let secondNumber = 72;

function calculate(firstValue, secondValue, callBackFunction){
            return callBackFunction(firstValue, secondValue)

}
function addTwoNumbers(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result;
};
function subtractTwoNumbers(numberOne, numberTwo){
    let result = numberOne - numberTwo;
    return result;
};
function multiplyTwoNumbers(numberOne, numberTwo){
    let result = numberOne * numberTwo;
    return result;
};
 calculate(firstNumber, secondNumber, addTwoNumbers);
 calculate(firstNumber, secondNumber, subtractTwoNumbers);
 calculate(firstNumber, secondNumber, multiplyTwoNumbers);
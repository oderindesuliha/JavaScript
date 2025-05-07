//let firstNumber = 5;
//let secondNumber = 72;

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
function divideTwoNumbers(numberOne, numberTwo){
    let result = numberOne / numberTwo;
    return result;
};
function powerOfTwoNumbers(numberOne, numberTwo){
    let result = numberTwo ** numberOne;
    return result;
};
function getEvenNumbers(array){
let arrayOfEvenNumbers = []
	for(let value of array){
	if(value % 2 === 0){
		arrayofEvenNumbers.push(value)

}

}
		return arrayOfNumbers
    };

 module.exports = {calculate, addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, powerOfTwoNumbers, getEvenNumbers}
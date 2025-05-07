let num1 = 2;
let num2 = 3;

const getSum = (firstNum, secondNum)=>{
    let result = firstNum + secondNum;
    return result;

}

console.log(getSum(num1,num2))


let numberOne = 10;
let numberTwo = 2;
function createCalculator(numOne, numTwo){
    return{
        add: function(){
            return numberOne + numberTwo
        },
        subtract: function(){
            return numberOne - numberTwo
        },
        multiply: function(){
            return numberOne * numberTwo
        }

    }

}
    let result = createCalculator(numberOne, numberTwo)
console.log(result.add());
console.log(result.subtract());
console.log(result.multiply());


const{calculate, addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, powerOfTwoNumbers,getEvenNumbers} = require("./add.js");
test("addTwoNumbers",()=>{

    let firstNumber = 5;
    let secondNumber = 72; //Arrange
    const result = addTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(77) //Assert
})

test("subtractTwoNumbers",()=>{

    let firstNumber = 5;
    let secondNumber = 72; //Arrange
    const result = subtractTwoNumbers(firstNumber, secondNumber); //Act
    expect(result).toBe(-67) //Assert
})
test("multiplyTwoNumbers",()=>{

    let firstNumber = 5;
    let secondNumber = 72; //Arrange
    const result = multiplyTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(360) //Assert
})
test("divideTwoNumbers",()=>{

    let firstNumber = 75;
    let secondNumber = 5; //Arrange
    const result = divideTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(15) //Assert
})
test("powerOfTwoNumbers",()=>{

    let firstNumber = 5;
    let secondNumber = 5; //Arrange
    const result = powerOfTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(3125) //Assert
})

test("getEvenNumbers", ()=>{
	let arrayOfNumbers = [2,4,5,6,7,8,9];
	let answer = [2,4,6,8];
	let result = getEvenNumbers(arrayOfNumbers);
	expect(result).toEqual(answer) //Assert



})



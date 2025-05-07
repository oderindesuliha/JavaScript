// const numbers =[1,4,3,4,3,6];
// let number = numbers.pop();
// console.log(number);
// numbers.push(7);
// console.log(numbers)
// let num =numbers.shift();
// console.log(number)
// numbers.unshift(3)
// console.log(numbers)

function addTwoToEachElement(numbers){
    const newArray = []
    numbers.forEach((number)=> {
        let result = number + 2;
        newArray.push(result)
    })
    return newArray;
};

function getEvenNumbers(array){
    const newArray = [];
    array.forEach((number,_, arr) => {
        if(number % 2 === 0){
            newArray.push(number)
        }
    })
    return newArray;
};

function getOddNumbers(elements){
    const newArray = []
    elements.forEach((number,_,arr)=>{
        if (number % 2 != 0){
            newArray.push(number)
        }
    })
    return newArray
}

function oddNumbers(arrayOfElements){
    
    return arrayOfElements.filter((number)=>(number % 2 !== 0));

    }
  


module.exports = {addTwoToEachElement, getEvenNumbers, getOddNumbers, oddNumbers};
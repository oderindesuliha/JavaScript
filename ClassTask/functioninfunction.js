let numberOne = 2;

console.log(outerFunction(numberOne))


function outerFunction(outerNumber){
    let numberTwo = 6;
    function innerFunction(innerNumber){

        let result = innerNumber + outerNumber
        
        return result;
    }
    return innerFunction(numberTwo)
    }

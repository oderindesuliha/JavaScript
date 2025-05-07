/*let array = [2,3,4,5,7]
    for (element of array){
        process.stdout.write(element + ' ');
}  
console.log();

let obj = {name: 'chi', age: 12}
    for (let key in obj){
        process.stdout.write(key + ' ');
console.log(obj[key]);
};
console.log();

    for (let index in array){
        process.stdout.write(array[index] + ' ');
        }
console.log();

let number = 1;
    while(number <= 10){
        process.stdout.write(number + ' ');
    number++
    }
    console.log();

  let numbers = 1;
    do{
        console.log(numbers)
        numbers++
    }while(numbers <= 10)*/


let array = [1,2,3,4,5,6,7,8,9,10]

function getEvenNumbers(numbers){
    for(number of numbers){
        if(number % 2 === 0){
            process.stdout.write(number + ' ')
        }
    }       
};

getEvenNumbers(array);
console.log()

let values = [1,2,3,4,5,6,7,8,9,10]

const getEvenElements = function(elements){
    for(element of elements){
        if(element % 2 === 0){
            process.stdout.write(element + ' ')
        }
    }       
};

getEvenElements(values);
console.log()

let figures = [1,2,3,4,5,6,7,8,9,10]

const oddElements = function(nums){
    for( num of nums){
        if(num % 2 != 0){
            process.stdout.write(num + ' ')
        }
    }       
};

oddElements(figures);
function sumOfArray(numbers){
    let sum = 0;
    for(const number of numbers) {       
        sum += number;
}
return sum;
}


module.exports = sumOfArray;
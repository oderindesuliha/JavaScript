function numberSquare(numbers){
    const square = []
    numbers.map((number)=> {
       number *= 2
        square.push(number);
    
    })
    return square;


};

module.exports = numberSquare;
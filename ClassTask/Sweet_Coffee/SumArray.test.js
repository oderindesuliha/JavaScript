const sumOfArray = require('./SumArray');

test ("sum of all numbers in an array", () => {
    const numbers = [5,3,5,7,8];
    const number = 28;
    const result = sumOfArray(numbers);
    expect(result).toBe(number)

  });


 
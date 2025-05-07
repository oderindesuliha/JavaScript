const {addTwoToEachElement, getEvenNumbers, getOddNumbers, oddNumbers} = require('./arrayMethods.js');
//FOREACH
  test("add two to each element in an array", () => {
    const numbers = [1,3,5,7,8];//Arrange
    const expected = [3,5,7,9,10];
    const result = addTwoToEachElement(numbers);
    expect(result).toEqual(expected)

  });

  test("get even element in an array", () => {
    const array = [1,2,4,8,3,5,7,8];
    const expected = [2,4,8,8];
    const result = getEvenNumbers(array);
    expect(result).toEqual(expected)

  });

  test("get odd numbers in an array", () => {
    const elements = [1,2,3,4,5,6,7,8,9];
    const expected = [1,3,5,7,9];
    const result = getOddNumbers(elements);
    expect(result).toEqual(expected)

  });

  //FILTER
  test("test for odd numbers", () => {
    const arrayOfElements = [3,4,8,10,7];
    const expected = [3,7];
    const result = oddNumbers(arrayOfElements);
    expect(result).toEqual(expected)
  });

  
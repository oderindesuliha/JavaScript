const numberSquare = require('./Task_Three');

test("to square each number in a list", () => {
    const numbers = [2,4,6,8,10];
    const expected = [4,8,12,16,20];
    const result = numberSquare(numbers);
    expect(result).toEqual(expected)

  });

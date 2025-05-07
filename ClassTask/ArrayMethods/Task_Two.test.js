const scoreIncrease = require('./Task_Two');

test("to add 5 to score of each student", () => {
    const scores = [70,30,50,20,89,90,100,30,20,50];
    const expected = [75,35,55,25,94,95,105,35,25,55];
    const result = scoreIncrease(scores);
    expect(result).toEqual(expected)

  });

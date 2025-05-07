const tenStudents = require('./Task_One');

test("to return scores greater than 70", () => {
    const scores = [70,30,50,20,89,90,100,30,20,50];
    const expected = [70,89,90,100];
    const result = tenStudents(scores);
    expect(result).toEqual(expected)

  });

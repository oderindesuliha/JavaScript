const gradesOfStudents = require('./Task_Seven');

test("to return the grades of student", () => {
    const studentScores = [95, 78, 85, 60, 45, 92];
    const expected = ["A","C","B","D","F","A"];
    const result = gradesOfStudents(studentScores);
    expect(result).toEqual(expected)

  });

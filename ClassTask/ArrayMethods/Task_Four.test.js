const distributeBooks = require('./Task_Four');

test("to distribute different book to each member", () => {
    const members = ["Emily","Jack","Sophia","Daniel"];
    const expected = ["Rate","Sugar","The fate of 24","lienus"];
    const result = distributeBooks(members);
    expect(result).toEqual(expected)

  });

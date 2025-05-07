const time = require('./Task_Five');

test("to distribute different book to each member", () => {
    const timings = ["9:00 AM","11:00AM","1:00 PM","3:00 PM","5:00 PM"];
    const expected = ["1:00 PM","3:00 PM","5:00 PM"];
    const result = time(timings);
    expect(result).toEqual(expected)

  });
  

const expenses = require('./Task_Six');

test ("to add expenses", () => {
    const david =  {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }
    const objectValues = 380;
    const result = expenses(david);
    expect(result).toBe(objectValues)

  });


 
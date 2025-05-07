const getKeysAndValues = require('./getKeysAndValues');

test ("test keys and values and return an array of its keys and values", ()=> {
    const objects = {
        Finance:   "Money",
        Subject:   "Debt"
    }
    const actual = getKeysAndValues(objects);
    const expected = [["Finance", "Money"], ["Subject", "Debt"]]
    expect(actual).toEqual(expected);
  });
const extractPerson = require('./Task4');

test ("returns array of all values from all objects", () => {
    const person = {name: "John", age: 30,city: "London",country:"UK"}
    const objectValues = 'John 30 London UK';
    const result = extractPerson(person);
    expect(result).toEqual(objectValues)

  });


 
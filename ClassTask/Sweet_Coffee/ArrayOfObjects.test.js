const arrayValues = require('./ArrayOfObjects');

test ("returns array of all values from all objects", () => {
    const subjects = [
        {id: 1, subject:'Chemistry'},
        {id: 2, subject: 'Physics'},
        {id: 3, subject: 'Biology'}
    ];
    const courses = (['1 Chemistry','2 Physics', '3 Biology']);
    const result = arrayValues(subjects);
    expect(result).toEqual(courses)

  });


 
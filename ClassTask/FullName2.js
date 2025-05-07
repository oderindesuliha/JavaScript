function getName() {
    const person = {
        FirstName: "John",
        LastName: "Doe",
        Age: 25
    };
    const{FirstName, LastName, Age} = person;
    console.log(`"First Name: ${FirstName}, Last Name: ${LastName}, Age: ${Age}"`);
    };


getName();

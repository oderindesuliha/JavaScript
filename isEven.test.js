const isEven = require("./isEven.js");

test("isEven",()=>{

	let number = 12; //Arrange
	const result = isEven(number)
        expect(result).toBe("True"); //Assert

			
});



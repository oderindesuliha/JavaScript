const isLeapYear = require("./isLeapYear.js");

test("isLeapYear",()=> {

	let year = 2024; //Arrange
	const result = isLeapYear(year)
        expect(result).toBe("True") //Assert
})



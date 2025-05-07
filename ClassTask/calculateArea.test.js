const calculateArea = require("./calculateArea.js");

test("calculateArea",()=>{

	let width = 12;
	let height = 10; //Arrange
    const areaOfRectangle = calculateArea(width, height);
    expect(areaOfRectangle).toBe(120) //Assert
})



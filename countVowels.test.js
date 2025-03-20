const countVowels = require("./countVowels.js");

test("countVowels",()=> {

	let string = "abcdefghiejiklomniopqrstuavwxyz"; //Arrange
	const result = countVowels(string)
        expect(result).toBe(10) //Assert
})



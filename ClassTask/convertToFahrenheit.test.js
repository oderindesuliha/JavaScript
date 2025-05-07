const convertToFahrenheit = require("./convertToFahrenheit.js");

test("convertToFahrenheit",()=>{

	let temperatureInCelsius = 34; //Arrange
    const temperatureInFahrenheit  = convertToFahrenheit(temperatureInCelsius);
    expect(temperatureInFahrenheit).toBe(93.2) //Assert
})



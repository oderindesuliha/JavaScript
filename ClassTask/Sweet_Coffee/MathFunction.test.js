const mathOperations = require('./MathFunction')
test ("test to create math operations",()=>{
    let number1 = 20
    let number2 = 12
    let result = mathOperations(number1,number2)
    expect(result.add()).toBe(32)
    expect(result.subtract()).toBe(8)
    expect(result.multiple()).toBe(240)
    expect(result.division()).toBe(1.6666666666666667)
    expect(mathOperations(number1,0).division()).toBe("Math error")
})
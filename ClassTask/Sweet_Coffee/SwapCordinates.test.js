const swapCordinates= require('./SwapCordinates')

test ("swap x and y cordinates using destructuring", () => {
    const values ={x: 15, y: 22 } ;
    const result = swapCordinates(values);
    const swap  = {x: 22, y: 15};
    expect(result).toEqual(swap)




});
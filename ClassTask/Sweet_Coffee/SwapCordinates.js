function swapCordinates(values){
        let change = values.y;
        values.y = values.x;
        values.x = change
        return values
}


module.exports = swapCordinates
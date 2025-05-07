function expenses(david){
   let sum = 0
   for(let key in david)
   sum += david[key]
    return sum;

}




module.exports = expenses
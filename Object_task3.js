const inventory = {apple: 10,
                banana: 5,
                orange: 8,
                mango: 12,
            };

function getFruitDetails(){
for (let fruits in inventory) {
    console.log(fruits + " " + inventory[fruits])
    
}
}

function getTotalNumberOfFruits(){
    let total = 0
    for (let number in inventory) {
        total += inventory[number];
    }
         return "total is " + total

}
getFruitDetails(inventory)
console.log(getTotalNumberOfFruits(inventory))
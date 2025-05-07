let array = []
array[0] = 1;
array[1] = "chinedu"
array[2] = true;
array[3] = {name: "Sule", age: 10};
array[4] = [2,3,4,5,5]

console.log(array)
let right = new Array(6)
right[4] = 1;
//right[0] = 1;
right.push(5);
console.log(right)


let arrayObject = [
    {id: 1, name: 'John'},
    {id: 1, name: 'John'},
]

let number = 3 + "3";
console.log(number)


let firstName = "chinedu"
  //  console.log(Array()

//)let person{

//    name = "ugbo";
  //  age = 5;


//}
let arrayOfNumbers = Array.of(1,2,3,4,5)



console.log((arrayOfNumbers))


let arrayNum =[2,3,4,5,6];
let answer = arrayNum.shift();

console.log(arrayNum);
console.log(answer)

let arrayNum2 =[2,3,4,5,6];
let answer2 = arrayNum2.unshift(9);

console.log(arrayNum2);
console.log(answer2)

let arrayNum3 =[2,3,4,5,6];
let answer3 = arrayNum.pop(2);

console.log(arrayNum3);

let element = [22,3,5,6,7];
console.log(element.slice(2))

let userInput = "090563788567"
let userPhoneNumber = Array.from(userInput)
console.log(userPhoneNumber.slice(1,8))

let userInput2 = [0,9,0,5,6,3,7,8,8,5,6,7]

console.log(userInput2.splice(1,8))
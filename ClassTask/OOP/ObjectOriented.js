// const animal ={
//     name: "",
//     age: "",
//     species: "",
//     color: "",
//     sound: function() {
//         console.log(`${this.name} makes a sound`);
//     }
// }
//
// let cat = Object.create(animal);
// console.log(cat);
// cat.name = "cat";
// cat.age = 24;
// cat.species = "Mammal";
// cat.color = "Black";
// console.log(cat);
// cat.sound()
//
// let dog = Object.create(animal);
// dog.name = "bull";
// dog.age = 5;
// dog.species = "Mammal";
// dog.color = "Brown";
// console.log(dog);
//
// let monkey = {}
// Object.setPrototypeOf(monkey,animal);
// monkey.name = "monkey";
// monkey.age = 10;
// monkey.species = "mammal";
// monkey.sound()
// // = "shatter"
// console.log(monkey);
// console.log(`${monkey.name} makes a sound`);
//
// monkey.sex = "sheMonkey";
// console.log(monkey);
// monkey.sound()
//
// }
// }
// }

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getProfile = function () {
        return `Firstname: ${this.firstName}\nLastname: ${this.lastName}\nAge: ${this.age}`

    };
}
const personOne = new Person("John", "Doe", 20);
console.log(personOne.getProfile());
console.log(personOne);


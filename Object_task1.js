const student ={name: "John Doe",
                age: 22,
                courses:["Math","Physics","Computer Science"],
                address:{city: "New York", 
                zip: 10001,}
            }

const{name} = student;
console.log(name);
const{courses} = student;
for(let index in courses){
course = courses[1];
}
console.log(course);
console.log(student.address.zip)

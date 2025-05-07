const student ={name: "John Doe",
    age: 22,
    courses:["Math","Physics","Computer Science"],
    address:{city: "New York", 
    zip: 10001,}
        }
function getDetails(){

    student.age = 23;
    student.name = "John Doe";
    student.GPA = 3.8;

    
    
            return student.name + " is " + student.age + " years old and has a GPA of " + student.GPA;
}

console.log(getDetails())   
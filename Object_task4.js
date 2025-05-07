const company = {companyName: "TechCorp",
                location: "San Francisco",
                employees:[{id: 10001,
                        name: "Bola",
                        department: "Engineering" 
                        },

                        {id: 10201,
                        name: "Hawanat",
                        department: "HR"
                        },

                        {id: 10301,
                        name: "Eric",
                        department: "Marketing"
                        },

                        {id: 10401,
                        name: "Majek",
                        department: "Sales"
                        }]
                    }

//function getSecondEmployee(company){
    const{employees} = company;
     secondEmployee = employees[1];
    const{name} =  secondEmployee;
        
        
        //return name
//}


console.log("The name of the second employee is "  + name)
const{companyName} = company
const{location} = company
console.log("The name of the company is "  + companyName)
console.log("The location of the company is "  + location)


//for(let count = 0; count < employee.length; count++){
    //console.log(employee + " " + company[employee])
    
for (let employ in company){

    console.log(`${company[employ].name}`)
}
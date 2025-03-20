const car = {make: 'Toyota', model: 'Camry', year: 2021};


function getCar(object){

    for (let key in car) {
        if (car.hasOwnProperty(key)) {
            value = car[key];oh
            console.log(`${key}: ${value}`);
        }
    }
}
getCar();

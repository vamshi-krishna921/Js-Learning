//TODO Push()

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.push("Lamborghini");
console.log(cars.push());// New length of array after adding
console.log(cars);

//TODO Pop()

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.pop(2);
console.log(cars.pop(2));// Gives the deleted element
console.log(cars);

//TODO unshift 

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.unshift("Lamborghini");
console.log(cars.unshift());// New length of array after adding
console.log(cars);

//TODO shift 

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.shift();
console.log(cars.shift());// Gives the deleted element
console.log(cars);

//TODO splice()
let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
let delElem = prompt("Enter the deleted index number : ");
delElem = parseInt(delElem);
// cars.splice(1,"Atlo");
cars.splice(delElem,1);
console.log(cars);
// cars.splice(2);

//TODO Slice()

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.slice(1,3);
console.log(cars);


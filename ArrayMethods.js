//TODO Push()

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.push("Lamborghini");
console.log(cars.push()); // New length of array after adding
console.log(cars);

//TODO Pop()

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.pop(2);
console.log(cars.pop(2)); // Gives the deleted element
console.log(cars);

//TODO unshift

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.unshift("Lamborghini");
console.log(cars.unshift()); // New length of array after adding
console.log(cars);

//TODO shift

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.shift();
console.log(cars.shift()); // Gives the deleted element
console.log(cars);

//TODO splice()
let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
let delElem = prompt("Enter the deleted index number : ");
delElem = parseInt(delElem);
// cars.splice(1,"Atlo");
cars.splice(delElem, 1);
console.log(cars);
// cars.splice(2);

//TODO Slice()

let cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
cars.slice(1, 3);
console.log(cars.slice());
console.log(cars);

// Todo every()

let array = [1, 3, 3, 5];
let sol = array.every(sum);
console.log(sol); // true
function sum(el) {
  if (el % 2 != 0) return true;
  else return false;
}
console.log(
  array.every(function (el) {
    el % 2 === 0;
  })
); //false
console.log(array.every((el) => el % 2 != 0)); // true

// Todo max using reduce
let array1 = [2, 44, 55, 46, 88, 99];
let max = array1.reduce((max, el) => {
  if (el > max) return el;
  else return max;
});
console.log(max); // 99

// Todo min using reduce
let array2 = [2, 44, 55, 46, 88, 99];
let min = array2.reduce((min, el) => {
  if (el < min) return el;
  else return min;
});
console.log(min); // 2

//TODO Destructuring 
let names = ['Jai','Sree','Ram'];
let [winner,runner] = names;
console.log(winner,runner); // Jai Sree
let [secondrunner ,...others] = names;
console.log(secondrunner ,others); // Jai [ 'Sree', 'Ram' ]
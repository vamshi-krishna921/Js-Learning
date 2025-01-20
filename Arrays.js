//? Declaration / Creation
//TODO : Using constructor

let fruits = new Array("Apple", "Banana", "Orange");
console.log(fruits);
console.log(typeof fruits);

//TODO : Using array literals

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

//TODO : Empty array

let fruits = [];
console.log(fruits);

//? Accessing arrays

let fruits = new Array("Apple", "Banana", "Orange", 1, "2", 2);
console.log(fruits[1], fruits[3]);
console.log(typeof fruits);

//? Modifying array elements

let fruits = new Array("Apple", "Banana", "Orange", 1, "2", 2);
fruits[1] = "mango";
console.log(fruits);

//? Arrray Loops

//TODO : for of loop

const cars = ["BMW", "Volvo", "Benz", "Rolls Royce", "Breeza"];
for (const x of cars) {
  console.log(x);
}

for (const letter of "Vamshi") {
  console.log(letter);
}

// Nested for of loop

let things = [
  ["ball", "bat", "mouse"],
  ["keyboard", "laptop"],
];
for (const list of things) {
  console.log(list);
}
for (const list1 of things) {
  for (const list2 of list1) {
    console.log(list2);
  }
}

//TODO For in loop (in = index)

const bikes = ["Ninja", "Pulsar", "BMW", "Royal Enfield"];
for (const i in bikes) {
  console.log(i);
}
for (const i in bikes) {
  console.log(bikes[i]);
}

//TODO forEach() method

// Actual syntax
const Ghadi = ["Ninja", "Pulsar", "BMW", "Royal Enfield"];
Ghadi.forEach(function (curValue, index, arr) {
  console.log(curValue);
});
// What we use syntax
Ghadi.forEach(function (val) {
  console.log(val);
});

//? Map method

let num = [1, 2, 3, 4, 5];
let nums = num.map ((curElem) => {
    return curElem * 2;
})
console.log(nums);
console.log(num);


let stud = [
    {
        name : "vamshi",
        marks : 99,
    },

    {
        name : "krishna",
        marks : 99.7,
    },
    {
        name : "Jai",
        marks:99.9,
    }

];
let percentage = stud.map((perc)=>{
    return ((perc.marks / 100).toFixed(2));
})

console.log(percentage);
console.log(stud[0].name);

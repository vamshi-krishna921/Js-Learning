//Sorting and comparing array
//! Mostly it does not work on numbers until we use sort function which is in line 11.
const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
numbers.sort();
console.log(numbers); //[1,2,3,4,5,6,6,7,8,9]

const nums = [10, 22, 3, 88, 0, 100, 33];
nums.sort();
console.log(nums); // [0, 10, 100, 22,3, 33,  88]

//? Ascending and decending order

//Ascending Order
nums.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(nums); //[0,  3,  10, 22,33, 88, 100]

//Decending Order

nums.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(nums); //[100, 88, 33, 22, 10,  3,  0]

//? Squaring pf even numbers in array

const allNums = [1, 2, 3, 4, 5, 6];
let newNums = allNums.map((curElem) => {
  if (curElem % 2 === 0) return curElem * curElem;
  else return curElem;
});
console.log(newNums); // [ 1, 4, 3, 16, 5, 36 ]

//? Add "Mr." to the names

const names = ["Ram","Laxman","Hanuman"];
let newNames = names.map((curElem) => {
  return (` Mr. ${curElem}`); 
});
console.log(newNames);// [ ' Mr.Ram', ' Mr.Laxman', ' Mr.Hanuman' ]


// TODO Reduce() method 

const eNums= [ 100,200,300,500,400];
let neweNums = eNums.reduce((accumulator,curElem) => {
  return accumulator + curElem;
},0);
console.log(neweNums);// 1500


//TODO IndexOf()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(nums.indexOf(8)); // 7
console.log(nums.indexOf(4, 5)); // -1
console.log(nums); // [1,2,3,4,5,6,7,8,9,0]

//TODO lastIndexOf()

const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9, ""];
console.log(numbers.lastIndexOf(6));
console.log(numbers.lastIndexOf(6, 5));
console.log(numbers.lastIndexOf(10));
console.log(numbers);
console.log(numbers.lastIndexOf(""));

//TODO Includes()

const num = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9, ""];
console.log(num.includes(3));
console.log(num.includes(3, 2));
console.log(num.includes(3, 5));

//! Solve it
//Add "Dec" at end,Update march to "March",Delete june from array
let months = ["Jan", "march", "April", "June", "July"];
//Add "Dec" at end
months.push("Dec");
console.log(months);
// Update march to "March"
let Update = months.indexOf("march");
months.splice(Update, 1, "March");
console.log(months);
// Delete june from array
let Delete = months.indexOf("June");
months.splice(Delete, 1);
console.log(months);

//TODO Find and FindIndex method

const num2 = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9, 0];
let find = num2.find((curElem) => {
  return curElem > 5;
});
let find1 = num2.findIndex((curElem) => {
  return curElem > 5;
});
console.log(find); // 6
console.log(find1); // 3

//? Filter Method

const wholeNums = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 9];
let value = 4;
let FilterValue = wholeNums.filter((curElem) => {
  return curElem === value;
});
console.log(FilterValue); // [4,4]

//TODO Filter Q-1

const products = [
  { Name: "Laptop", price: 1200 },
  { Name: "Mobile", price: 800 },
  { Name: "Tablet", price: 300 },
  { Name: "Smart Watch", price: 150 },
];
let New = products.filter((curElem) => curElem.price >= 500)
                  .map((curElem) => curElem.Name);
console.log(New) //[ 'Laptop', 'Mobile' ]
console.log(typeof products); //object

// Another way

  let New1 = products.map ((curElem) =>{
      let store;
      if(curElem.price < 800)
      {
          store = curElem.Name;
      }
      return store;
  }).filter((curElem) => curElem != null);
  console.log(New1) //[ 'Tablet', 'Smart Watch' ]
  console.log(typeof products); //object

//TODO Filter Q-2
//  unique values
const nums2 = [1,2,3,4,6,5,6,7,8,9];
let newArr = nums2.filter((curElem,index,arr) => {
  console.log(index) // 0 1 2 3 4 5 6 7 8 9 
  console.log(arr.indexOf(curElem)); // 0 1 2 3 4 5 4 7 8 9 
    return arr.indexOf(curElem) === index;
})

console.log(newArr);//[1, 2, 3, 4, 6,5, 7, 8, 9]

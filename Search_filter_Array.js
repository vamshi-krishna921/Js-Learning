//TODO IndexOf()

const nums= [1,2,3,4,5,6,7,8,9,0];
console.log(nums.indexOf(8)); // 7
console.log(nums.indexOf(4,5)); // -1
console.log(nums); // [1,2,3,4,5,6,7,8,9,0]

//TODO lastIndexOf()

const numbers= [1,2,3,6,4,5,6,7,8,9,""];
console.log(numbers.lastIndexOf(6));
console.log(numbers.lastIndexOf(6,5));
console.log(numbers.lastIndexOf(10));
console.log(numbers);
console.log(numbers.lastIndexOf(""));

//TODO Includes()

const num= [1,2,3,6,4,5,6,7,8,9,""];
console.log(num.includes(3));
console.log(num.includes(3,2));
console.log(num.includes(3,5));

//! Solve it
//Add "Dec" at end,Update march to "March",Delete june from array
let months = ["Jan","march","April","June","July"];
//Add "Dec" at end
months.push("Dec");
console.log(months);
// Update march to "March"
let Update = months.indexOf("march");
months.splice(Update,1,"March")
console.log(months);
// Delete june from array
let Delete = months.indexOf("June");
months.splice(Delete,1);
console.log(months);

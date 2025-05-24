//* Copying an Array
let a = [1, 2, 3, 4, 5];
let b = [...a];
let c = a;
console.log(a); // [1, 2, 3, 4 , 5]
console.log(b); // [1, 2, 3, 4 , 5]
a.push(5);
console.log(a); // [1, 2, 3, 4, 5 , 5]
console.log(b); // [1, 2, 3, 4]
console.log(c); // [1, 2, 3, 4, 5 , 5]

//* Concatenating/Combining Arrays
let d = [5, 6, 7];
let e = [...a, ...d];
console.log(e); // [1, 2, 3, 4, 5, 5, 5, 6, 7]

//* Adding Elements to Existing Array
b.push(...[5, 6, 7, 8, 9, 10]);
console.log(b); // [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
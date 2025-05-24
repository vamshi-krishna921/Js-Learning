let a = [1,2,3,4];
let b = [...a];
let c = a;
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]
a.push(5);
console.log(a); // [1, 2, 3, 4, 5]
console.log(b); // [1, 2, 3, 4]
console.log(c); // [1, 2, 3, 4, 5]
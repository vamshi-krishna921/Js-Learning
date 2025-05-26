//* array.flat()

let array = [1,2,3,[[4,5],6,7],8,9];
let flatArray = array.flat();
console.log(flatArray); // [ 1, 2, 3, [ 4, 5 ], 6, 7, 8, 9 ]
flatArray = array.flat(2);
console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
flatArray = array.flat(Infinity);
console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 
//* padStart(targetLength [, padString])

let name = "Ganesh";
let padName = name.padStart(10);
console.log(padName); // "     Ganesh"
let padName1 = name.padStart(10, '*');
console.log(padName1); // "****Ganesh"

//* padEnd(targetLength [, padString])
let padName2 = name.padEnd(10);
console.log(padName2); // "Ganesh    "
let padName3 = name.padEnd(10, '*');
console.log(padName3); // "Ganesh****"
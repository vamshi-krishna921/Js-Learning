//! string properties
//TODO String length
const str = "Hello, World!";
console.log(str.length()); // 13

//TODO Escape character

const solarSystem =
  "The solar system has '6' planets . \n We are living in \"Earth\".";
console.log(solarSystem); //The solar system has '6' planets .
//We are living in "Earth"

//! Searching in strings

//TODO indexOf()
const Name = "vamshi krihsna";
console.log(Name.length); //14
console.log(Name.indexOf(k, 0)); // 7

//TODO LastIndexOf()
//TODO Search()
let text = `Jai shree Ram`;
console.log(text.search(/ram/i)); //10

//TODO match()
let txt = `Jai shree Ram`;
console.log(txt.match("Ram")); // [ 'Ram', index: 10, input: 'Jai shree Ram', groups: undefined ]
console.log(text.match(/Ram/g)); // [ 'Ram', 'Ram' ]

//! Converting string to array
let Naam = "Vamshi";
console.log(Array.from(Naam)); // [ 'V', 'a', 'm', 's', 'h', 'i' ]

//TODO includes()

let txt1 = `Jai shree Ram`;
let crct = txt1.includes("shree");
console.log(crct); // true

//TODO startsWith() and endsWith()
let txt2 = `Jai shree Ram`;
console.log(txt2.startsWith("Jai")); // true
console.log(txt2.endsWith("m")); // true

//! Extracting string parts

//TODO slice()

// TODO slice()

let txt3 = "Jai shree Ram";
console.log(txt3.slice(4)); // shree Ram
console.log(txt3.slice(4, 9)); //shree

//TODO substring()

let txt4 = "Jai shree Ram";
console.log(txt3.slice(-1)); // m
console.log(txt3.substring(-1)); // Jai shree Ram
console.log(txt3.substring(4, 9)); // shree

//! Extracting string characters

//TODO charAt()

let text1 = "Jai shree Ram";
console.log(text1.charAt(4)); // s

// TODO charCodeAt()

let text2 = "Jai Shree Ram";
console.log(text2.charCodeAt(4)); // 83

// TODO at()

let text3 = "Jai shree Ram";
console.log(text3.at(5)); // h
console.log(text3.at(-5)); // e

//! Replacing string character

//TODO replace()

let text4 = "Jai shree Ram";
let newText = text4.replace("Ram","krishna");
let newText1 = text4.replace(/ram/i,"krishna"); 
console.log(newText); // Jai shree krishna
console.log(newText1); // Jai shree krishna
console.log(newText1); // Jai shree Ram
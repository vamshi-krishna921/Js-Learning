//! string properties
//TODO String length
const str = "Hello, World!"
console.log(str.length());// 13

//TODO Escape character

const solarSystem = "The solar system has \'6\' planets . \n We are living in \"Earth\".";
console.log(solarSystem);//The solar system has '6' planets . 
                         //We are living in "Earth"
                  
//! Searching in strings                         

//TODO indexOf()
const Name = "vamshi krihsna"
console.log(Name.length);//14
console.log(Name.indexOf(k,0));// 7

//TODO LastIndexOf()
//TODO Search()
let text = `Jai shree Ram`
console.log(text.search(/ram/i)); //10

//TODO match()
let txt = `Jai shree Ram`
console.log(txt.match("Ram")); // [ 'Ram', index: 10, input: 'Jai shree Ram', groups: undefined ]
console.log(text.match(/Ram/g)); // [ 'Ram', 'Ram' ]

//! Converting string to array
let Naam = "Vamshi"
console.log(Array.from(Naam));//[ 'V', 'a', 'm', 's', 'h', 'i' ]

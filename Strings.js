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
let newText = text4.replace("Ram", "krishna");
let newText1 = text4.replace(/ram/i, "krishna");
console.log(newText); // Jai shree krishna
console.log(newText1); // Jai shree krishna
console.log(newText1); // Jai shree Ram

//!other methods()

// TODO toUpperCase() and toLowerCase()

let string = "Vamshi Krishna";
console.log(string.toUpperCase()); // VAMSHI KRISHNA
console.log(string.toLowerCase()); // vamshi krishna

//TODO trim()

let string1 = "   Hello, Wolrd   ";
console.log(string1); //   Hello, Wolrd
console.log(string1.trim()); //Hello, Wolrd

// TODO split()

let string2 = "Hello, World";
console.log(string2.split("")); // ['H', 'e', 'l', 'l','o', ',', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(string2.split()); // [ 'Hello, World' ]
console.log(string2.split(",")); // [ 'Hello', ' World' ]

//* Reverse string using split

console.log(string2.split(",").reverse()); // [ ' World', 'Hello' ]

//* Joining / Converting array to string
//TODO join()

console.log(string.split(",").reverse().join()); //  World,Hello

//! String Questions
//? 1. Print A to Z letters

console.log("A".charCodeAt()); // 65 (To know the ASCII value of A)
console.log("Z".charCodeAt()); // 90 (To know the ASCII value of Z)
let line = "";
for (let i = 65; i <= 90; i++) {
  line = line + String.fromCharCode(i);
  line = line + " ";
}
console.log(line); // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

//? A function to check all vowels are present in string or not;

let message = "Hi, How are you?";
const checkAllVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  // console.log(vowels);
  for (let char of vowels) {
    // console.log(str.includes(char));
    if (str.includes(char) === true) {
      count++;
    }
  }
  if (count === vowels.length) {
    return true;
  } else {
    return false;
  }
};
console.log(checkAllVowels(message)); // true

///                OR                  ///

let msg = "Hi, How are you?";
const checkForVowels = (str) => {
  const vowels = "aeiou";
  // console.log(vowels);
  for (let char of vowels) {
    // console.log(str.includes(char));
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};
console.log(checkForVowels(msg)); // true

//? count the no of vowels in a string 

let mesg = "Hello Hello mic testing aaa";
const countAllVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  // console.log(vowels);
  for (let char of str) {
    // console.log(str.includes(char));
    if (vowels.includes(char) === true) {
      count++;
    }
  }
 return count;
};
console.log(countAllVowels(mesg)); // 10

//?  JavaScript function isPangram that takes a string as input
//? and returns true if the string is a pangram (contains all letters of
//?  the alphabet) and false otherwise

let pangramText = "The quick brown fox jumps over the lazy dog:";
let Rmdup;
const isPangram = (str )=> {
    string = str.toLowerCase().split("");
    console.log(string); // ['t', 'h', 'e', ' ', 'q', 'u', 'i','c', 'k', ' ', 'b', 'r', 'o', 'w','n', ' ', 'f', 'o', 'x', ' ', 'j','u', 'm', 'p', 's', ' ', 'o', 'v','e', 'r', ' ', 't', 'h', 'e', ' ','l', 'a', 'z', 'y', ' ', 'd', 'o','g', ':']
    let values = string.filter((curElem) => {
        return curElem.charCodeAt() >= 97  && curElem.charCodeAt() <= 122
    });
    console.log(values) //['t', 'h', 'e', 'q', 'u', 'i', 'c','k', 'b', 'r', 'o', 'w', 'n', 'f','o', 'x', 'j', 'u', 'm', 'p', 's','o', 'v', 'e', 'r', 't', 'h', 'e','l', 'a', 'z', 'y', 'd', 'o', 'g']
    Rmdup = [...new Set(values)];
    console.log(Rmdup); // ['t', 'h', 'e', 'q', 'u', 'i','c', 'k', 'b', 'r', 'o', 'w','n', 'f', 'x', 'j', 'm', 'p','s', 'v', 'l', 'a', 'z', 'y','d', 'g']
    if(Rmdup.length === 26)
    {
        return true;
    }
    else
    return false;
}

console.log(isPangram(pangramText)); // true
let persons = { name: "Jai", place: "Our place", class: "Learning" };
console.log(persons); // {name: 'Jai', place: 'Our place', class: 'Learning'}
console.log(persons.name); // Jai
console.log(persons.place); // Our place
console.log(persons["class"]); // Learning

//* Adding / Modifying properties and values in object.
persons.section = "A";
persons.class = "student";
console.log(persons); // {name: 'Jai', place: 'Our place', class: 'student', section: 'A'}

//* Dynamic keys in objects
let Name = "God";
let person = {
  [Name]: "Jai Shree Ram",
  place: "Every where",
  class: "Everyone's heart",
  show: function () {
    console.log(
      `I am ${Name}, My name is ${person[Name]}, I live in ${this.place} and ${this.class}`
    ); // I am God, My name is Jai Shree Ram, I live in Every where and Everyone's heart
  },
};
person.show();

//* Accessing keys in objects
console.log(Object.keys(persons)); //  ['name', 'place', 'class']

//* Changing key names
let keys = Object.keys(persons);
let oldKey = keys[1];
let newKey = "location";
persons[newKey] = persons[oldKey];
delete persons[oldKey];
console.log(persons); // {name: 'Jai', class: 'Learning', location: 'Our place'}

//* Changing values
persons.name = "krishna";
console.log(persons); // {name: 'krishna', class: 'Learning', location: 'Our place'}

//* finding length of object
console.log(Object.keys(persons).length); // 3

//* Accessing only values in object
//! Method-1
for (let elem in persons) {
  console.log(persons[elem]); // Jai Our place Learning
}
//! Method-2
Object.keys(persons).forEach((elem) => {
  console.log(persons[elem]); // Jai Our place Learning
});

//* Sorting objects according to values
let nums = {
  a: 1,
  b: 10,
  c: 6,
  d: 0,
};
nums = Object.entries(nums)
  .sort(([, a], [, b]) => a - b) // Sort by values in ascending order
  .reduce((acc, [key, value]) => {
    acc[key] = value; // Rebuild the object
    return acc;
  }, {});

console.log(nums); // { d: 0, a: 1, c: 6, b: 10 }

//* this keyword in object function

let data = {
  naam: "Jai",
  no: 77,
  greet: function () {
    console.log(this); // {naam: 'Jai', greet: ƒ}greet: ƒ ()naam: "Jai" no: 77
  },
};
data.greet();

let data1 = {
  naam: "Jai",
  greet() {
    console.log(this); // {naam: 'Jai', greet: ƒ}greet: ƒ ()naam: "Jai"
  },
};
data1.greet();

let data2 = {
  naam: "Jai",
  greet: () => {
    console.log(this); // Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
  },
};
data2.greet();

//* Object.hasOwnProperty()
console.log(data.hasOwnProperty("naam")); // true
console.log(data.hasOwnProperty("branch")); // false

//* Object.freeze()
Object.freeze(data);
data.naam = "Krishna";
console.log(data);

//* Delete an key-value in Object
delete data.naam;
console.log(data); // {no: 77, greet: ƒ}

//! Questions
//TODO 1: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student 's record. Also check if the grades property is present or not?

let qData = {
  Name: "Krishna",
  rollNo: 992,
  grade: {
    Chem: 55,
    EWS: 88,
    Maths: 99,
  },
};

const addToGrade = (Data, subject, marks) => {
  if (Data.grade === null) {
    Data.grade = {};
  }
  //* return Data.grade.subject = marks; //*{ Name: 'Krishna', rollNo: 992, grade: { Chem: 55, EWS: 88, Maths: 99, subject: 92 }}

  return (Data.grade[subject] = marks); // { Name: 'Krishna', rollNo: 992, grade: { Chem: 55, EWS: 88, Maths: 99, SE: 92 }}
};
addToGrade(qData, "SE", 92);
console.log(qData);

//TODO Destructing objects
let student = {
  name: "vk",
  age: 14,
  class: 9,
  subjects: ["Hindi", "English", "Math", "Science"],
  username: "vk123",
  password: 1234,
};
let { username, password } = student;
console.log(username, password); //vk123 1234
//* Changing the oldKey to newKey
let { username: user, password: secretKey } = student;
console.log(user, secretKey); //vk123 1234
//* Adding new key and values
let { city = "Knr" } = student;
console.log(city); //Knr

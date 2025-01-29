let persons = {name : "Jai", place : "Our place", class : "Learning"};
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
    [Name] : "Jai Shree Ram",
     place : "Every where", 
     class : "Everyone's heart",
     show : function(){
        console.log(
            `I am ${Name}, My name is ${person[Name]}, I live in ${this.place} and ${this.class}`
        ); // I am God, My name is Jai Shree Ram, I live in Every where and Everyone's heart
     }
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
  
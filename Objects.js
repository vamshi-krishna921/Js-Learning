let persons = {name : "Jai", place : "Our place", class : "Learning"};
console.log(persons); // {name: 'Jai', place: 'Our place', class: 'Learning'}
console.log(persons.name); // Jai
console.log(persons.place); // Our place
console.log(persons["class"]); // Learning

//* Adding / Modifying properties and values in object.

persons.section = "A"; 
persons.class = "student";
console.log(persons); // {name: 'Jai', place: 'Our place', class: 'student', section: 'A'}


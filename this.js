let student = {
  Name: "Krishna",
  age: 22,
  rank: this, //(Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}[[Prototype]]: Object)
  get: function () {
    console.log(this);
  },
  get1: function () {
    console.log(this.Name); // Krishna
  },
};
student.get; // ƒ () {console.log(this);}
student.get(); // {Name: 'Krishna', age: 22, rank: Window, get: ƒ}
//TODO this in EventHandler
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.style.backgroundColor = "yellow"; // Changed the background color to yellow when btn is clicked
});

function add(num) {
  num = num + 10;
  return num;
}
console.log(add(12));

//? Roll Dice

function rollDice() {
  var rand = Math.floor(Math.random() * 6) + 1;
  return rand;
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());

//? Average

function avg(a, b, c) {
  return (a + b + c) / 3;
}
console.log(avg(10, 20, 30));

// ? Table

function table(n) {
  var i;
  for (i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " = " + (n * i));
  }
}
table(7);

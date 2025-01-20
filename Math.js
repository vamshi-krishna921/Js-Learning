//TODO Math constants

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518

// * Basic operations * //
//TODO Math.abs()

console.log(Math.abs(5)); // 5
console.log(Math.abs(-3)); // 3

//TODO Math.round()

console.log(Math.abs(5.5)); // 6
console.log(Math.abs(-10.11)); // -10

//TODO Math.floor()

console.log(Math.floor(5.8)); // 5
console.log(Math.floor(-3.3)); // -4

//TODO Math.ceil()

console.log(Math.ceil(5.8)); // 6
console.log(Math.ceil(-3.3)); // -3

//TODO Math.trunc()

console.log(Math.trunc(5.8)); // 5
console.log(Math.trunc(-3.3)); // -3

//* Exponential and Logarithmic functions

//TODO Math.pow()

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(6, 2)); // 36

//TODO Math.sqrt()

console.log(Math.sqrt(25)); // 5

//TODO Math.log()

console.log(Math.log(2)); // 0.6931471805599453

//TODO Math.log2()

console.log(Math.log2(8)); // 3

//* Generate random number

console.log(Math.random()); // 0.48436115487772535
console.log(Math.round(Math.random())); // 8

//? Guess the number game

let number = parseFloat(
  prompt("Enter your max number by which the between you have to guess : ")
);
let randomNum = parseInt(Math.round(Math.random() * number + 1));
let guessNum = parseInt(prompt("Enter your guessed number : "));
while (true) {
  if (guessNum === "quit") {
    console.log("Exit");
    break;
  } else if (guessNum === randomNum) {
    console.log(
      "Congrajulations 🎉 You are correct. The number is : ",
      guessNum
    );
    break;
  } else if (guessNum < randomNum) {
    guessNum = parseInt(
      prompt(
        " hint : Please try again. Your random number is too small to the guessed number : "
      )
    );
  } else {
    guessNum = parseInt(
      prompt(
        " hint : Please try again. Your random number is too large to the guessed number : "
      )
    );
  }
}

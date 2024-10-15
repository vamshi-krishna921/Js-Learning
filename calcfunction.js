function calculator(num1, num2, operator) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch (operator) {
    case "+":
      return `The ${num1} ${operator} ${num2} is ${num1 + num2}`;
    case "-":
      return `The ${num1} ${operator} ${num2} is ${num1 - num2}`;
    case "*":
      return `The ${num1} ${operator} ${num2} is ${num1 * num2}`;
    case "/":
      return `The ${num1} ${operator} ${num2} is ${(num1 / num2).toFixed(2)}`;
    case "%":
      return `The ${num1} ${operator} ${num2} is ${(num1 % num2).toFixed(2)}`;
    default:
      return "Invalid operator";
  }
}
let num1 = prompt("Enter an integer");
let num2 = prompt("Enter an integer");
let operator = prompt("Enter the operator");
calculator(num1, num2, operator);

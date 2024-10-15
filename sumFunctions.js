function sum(n) {
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sum(10));

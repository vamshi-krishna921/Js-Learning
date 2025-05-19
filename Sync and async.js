function one() {
  console.log("This is 1st fn end");
  two();
}
function two() {
  setTimeout(() => {
    console.log("2nd starting");
  }, 2000);
  console.log("This is 2nd fn end.");
  three();
}
function three() {
  setTimeout(() => {
    console.log("3rd starting");
  }, 1000);
  console.log("This is 3rd fn end");
}
one();
// Output
/*
This is 1st fn end
This is 2nd fn end.
This is 3rd fn end
3rd starting
2nd starting
*/

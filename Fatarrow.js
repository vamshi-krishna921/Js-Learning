const sum = function (a,b){
    let result = `The sum of ${a} + ${b} is ${a + b}`
    console.log(result);
};
sum(10,220)

//! Fat arrow function 

const sum1 =(a,b) =>{
    let result1 = `The sum of ${a} + ${b} is ${a + b}`;
};
sum1(10,220);
console.log(result1);
sum1(200,300);

let a = 10;
function b(){
    let a= 20;
    console.log(a);
}
b();
console.log(a);

//Sorting and comparing array 
//! Mostly it does not work on numbers until we use sort function which is in line 11.
const numbers = [1,2,3,6,4,5,6,7,8,9];
numbers.sort();
console.log(numbers);//[1,2,3,4,5,6,6,7,8,9]

const nums = [10,22,3,88,0,100,33];
nums.sort();
console.log(nums); // [0, 10, 100, 22,3, 33,  88]

//? Ascending and decending order

//Ascending Order
nums.sort((a,b)=> 
    {
      if (a>b) 
      return 1;
      if (a<b)
      return -1;
    });
    console.log(nums);//[0,  3,  10, 22,33, 88, 100]

//Decending Order

nums.sort((a,b)=> 
    {
      if (a>b) 
      return -1;
      if (a<b)
      return 1;
    });
    console.log(nums);//[100, 88, 33, 22, 10,  3,  0]
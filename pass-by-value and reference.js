//* Pass-by-value
let a = 10;
function modifyValue(x){
    return x = 20;
}
console.log(modifyValue(a)); // 20
console.log(a); // 10

//* Pass-by-reference
let obj = {
    id : 5,
    Name : "krishna"
};
let obj1 = obj;
obj1.Name = "Jai";
console.log(obj1); // {id: 5, Name: 'Jai'}
console.log("Original obj" + obj); // Original obj[object Object]

//TODO Use , for concate or getting values in object with string.
console.log("Original obj", obj); // Original obj { id: 5, Name: 'Jai' }

//TODO Use spread operator(...) or Object.assign() method for avoiding the copying of address.

let obj2 = Object.assign({}, obj);
let obj3 = {...obj1};
obj2.Branch = "CSE";
obj3.Branch = "Civil";
console.log(obj2); // {id: 5, Name: 'Jai', Branch: 'CSE'}
console.log(obj3); // {id: 5, Name: 'Jai', Branch: 'Civil'}
let obj4 = Object.assign({}, obj, obj2);
console.log(obj4); // {id: 5, Name: 'Jai', Branch: 'CSE'}
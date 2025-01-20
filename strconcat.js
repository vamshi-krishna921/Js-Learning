var str = [" Jai", " Shree", " Ram", " Hanuman"];
var str1 = "";
for (var i = 0; i < str.length; i++) {
  str1 = str1 + str[i];
}
console.log(str1);

//? Using fucntions

var str2 = [" Jai", " Shree", " Ram", " Hanuman"];
function concat(str2)
{
    var result = "";
    for(i=0;i<str2.length;i++)
    {
        result = result + str2[i];
    }
    return result
}
console.log(concat(str2));
console.log(typeof (str2));


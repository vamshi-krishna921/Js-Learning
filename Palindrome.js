const isPalindrome = (str) => {
    let rev = "";
    for (let i = str.length-1; i >= 0; i--) {
      rev+= str[i];
    }
    if(str===rev){
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome("radar"));



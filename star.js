//? Left side right angled triangle

var pattern = "";
for (let i = 0; i < 5; i++) {
    pattern = "";
    for (let j = 0; j <= i; j++) {
        pattern =  pattern + "*";
    }
    console.log(pattern);
    
}

//TODO  Right side right angled triangle

var pattern = "";
for (let i = 0; i < 5; i++) {
    pattern = "";
    for (let j = 5; j >= i; j--) {
        pattern =  pattern + " ";
    }
    for (let k = 0; k <= i; k++) {
        pattern += "*";
    }
    console.log(pattern);
}

//! pyramind shape

var pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern = "";
    for (let j = 5; j >= i; j--) {
        pattern =  pattern + " ";
    }
    for (let k = 1; k <= (2*i)-1 ; k++) {
        pattern += "*";
    }
    console.log(pattern);
}
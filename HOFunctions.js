function Greet(func,count){
    for(let i = 1;i<=count;i++)
    {
        func();
    }
}
let greet=function(){
    console.log("Jai");
}
let call = Greet(greet,5);
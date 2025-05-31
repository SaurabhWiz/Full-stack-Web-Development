let random = Math.random();
let a = prompt("Enter your First Number: ");
let b = prompt("Enter your Second Number: ");
let c = prompt("Enter your Operation: ");

let obj= {
   "+" : "-",
   "*" : "+",
   "-" : "/",
   "/" : "*"
}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c= obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
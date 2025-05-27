function nice(name) {
    console.log("Hii " + name + " You are Good!");
}
nice("Saurabh")

function arithmatic(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
arithmatic(9,3);

function sum(a,b, c=3){
    return a+b+c;
}
let sum_of_num = sum(9,10);
console.log("answer is " + sum_of_num);


// Arrow Function

const func1 =(x,y)=>{
    console.log(x+y);
}
func1(9,5);
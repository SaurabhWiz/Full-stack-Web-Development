let a = Math.random() < 0.1; // 10% chance to be true

function sum(a, x, y){
    if(a == false){
        return x + y;
    }
    else{
        return x - y;
    }
}

let sum_answer = sum(a, 3, 4);
console.log("Result = " + sum_answer);
let a = 2;
for(i=1;i<=10;i++){
    console.log(i +" * " + a + " = " + i*a);
}

let obj ={
    name:"Harry",
    role: "Programmer",
    company: "CodeWithHarry"
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}

let x = 0;
while(x<6){
    console.log(x)
    x++;
}
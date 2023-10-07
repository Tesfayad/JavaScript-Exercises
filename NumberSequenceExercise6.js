// Analysis
// we've use for while loop
// 10 +ve even numbers: if we divide the number by 2 and the remainder is zerro
// how in javascript % 10%2 == 0
// and to print out 10 odd numbers

// one function to handle the even numbers sequence
const evenNumberHandler = ()=>{
    for (let i = 2; i < 20 && i <= 20; i += 2) {
        console.log(`number sequence ${i}`);// this is my first try 
    }
    for(let i = 2; i <=20; i++) {
        if(i % 2 == 0) {// checking if the number is even
        console.log (`number sequence : ${i}`);
    }
    }
    
    let i = 2;
    let tenFirstPositiveNumberCounter = 0;
    while(tenFirstPositiveNumberCounter <=10) {
        if(i%2==0){
            tenFirstPositiveNumberCounter++;
            console.log (`number sequence : ${i}`)
        }
        i++;
    }
}
const oddNumberHandler = ()=>{
    for (let i = 2; i < 20 && i <= 20; i += 2) {
        console.log(`number sequence ${i}`);// this is my first try 
    }
    for(let i = 2; i <=20; i++) {
        if(i % 2!= 0) {// checking if the number is even
        console.log (`number sequence : ${i}`);
    }
    }
    
    let i = 2;
    let tenFirstPositiveNumberCounter = 0;
    while(tenFirstPositiveNumberCounter <=10) {
        if(i%2==0){
            tenFirstPositiveNumberCounter++;
            console.log (`number sequence : ${i}`)
        }
        i++;
    }
}

for (let i = 2; i < 20 && i <= 20; i += 2) {
    console.log(`number sequence ${i}`);// this is my first try 
}
for(let i = 2; i <=20; i++) {
    if(i % 2 == 0) {// checking if the number is even
    console.log (`number sequence : ${i}`);
}
}

let i = 2;
let tenFirstPositiveNumberCounter = 0;
while(tenFirstPositiveNumberCounter <=10) {
    if(i%2==0){
        tenFirstPositiveNumberCounter++;
        console.log (`number sequence : ${i}`)
    }
    i++;
}

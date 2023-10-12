const fruits1 = ['pinnapple', 'strawberry', 'blackberry',]
const fruits2 = ['banana', 'orange', 'mango'];

const allFruits =[...fruits1, ...fruits2];
console.log(`all Fruits: ${allFruits}`);

function addNumbers (number1, number2, number3) {
    if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
        return;
    }
    return number1 + number2 + number3;
}
const arrayofNumbers = [1, 2, 3]

let result = addNumbers(...arrayofNumbers);
console.log(`sum of the numbers: ${result}`);

// rst operator in function parameters
// [arrayofNumbers]
const multiply = (firstNumber, ...numbers)=>{
    if(isNaN(firstNumber) || !Array.isArray(numbers)){
        return;
    }
    let product = 1;
    numbers.forEach(number=>{
        product *=number;
    })
    return firstNumber * product;
}
let result1 = multiply(1,2,3,4, 5);
console.log(`product result from rest operator:${result1}`)

const [...copyFruits] = fruits1;
console.log(`copied colors:${copyFruits}`);
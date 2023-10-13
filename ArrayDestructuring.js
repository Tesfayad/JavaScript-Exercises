// analysis
// destructure it to extract the first and second colors
const colors = ['red', 'green', 'yellow', 'black'];
let  [color1, color2] = colors;
console.log(`color1 ${color1}, color2 ${color2}`);

// skip the first two and extract z third one
const numbers = [1, 2, 3, 4, 5]
let [,,thirdNumber] = numbers;
console.log(`thirdNumber ${thirdNumber}`);

//collect the remaining colors
const fruits = ['mango', 'pinnapple', 'pear', 'orange'];
let [firstFruit, ... otherFruits] = fruits;
console.log(`firstFruit ${firstFruit}, otherFruits ${otherFruits}`);

// assigning default values
const shapes = [];
let [firstShape = 'circle'] = shapes;
console.log(`first shape: ${firstShape}`);

//swapping
let a = 4;
let b = 5;
[a,b] = [a,b];
console.log(`a: ${a} a: ${b}`);
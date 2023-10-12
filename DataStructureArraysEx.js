// analysis
// creat an Array called fruit
// access and log the second element
// change the third element to 'grape'
// log the length of the array
// add and remove 'kiwi' at the end
// creat a 'for' loop to iterate the array and log each fruit
// iterate with'forEach' loop, log each fruit

// creat an Array called fruit
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

// access and log the second element
console.log(fruits[1]);

// change the third element to 'grape'
fruits[2] = 'grape';
console.log(fruits);

// log the length of the array
console.log(fruits.length);

// add and 'kiwi' at the end
fruits.push('kiwi');
console.log(fruits);

// add andremove 'kiwi' at the end
fruits.pop();
console.log(fruits);

// creat a 'for' loop to iterate the array and log each fruit
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]}`)
}

// iterate with'forEach' loop, log each fruit
fruits.forEach((fruit) =>{
    console.log(fruits)});
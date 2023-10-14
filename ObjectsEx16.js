const car = {
    make: 'subaru',
    model: 'impreza',
    year: 1999,
}
console.log(`car: ${car.make}`);
console.log(`car: ${car.model}`);
console.log(`car: ${car.year}`);

car.start = function () {
    console.log('the car is starting');
}
car.start();

const book = {
    title: "The perpose Driven Life",
    author: "Rick warren",
    pages: 300
  };
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Number of Pages: ${book.pages}`);
  

let Wine = 1;
let quantity = 10;
let basePrice = 35.99;
let discount = 5.00; // $5 discount
let subTotal = basePrice * quantity;
let taxRate = subTotal * 0.08;
let totalPrice = (subTotal + taxRate) - discount;
console.log (`The total price is: ${totalPrice}`);

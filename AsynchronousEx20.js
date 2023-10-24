//  to implement callbacks
// passing one functon as a parameter

const add = (result) => {
  return result;
}
function sum (x, y, callback) {
  if(isNaN(x) || isNaN(y)){
    return;
  }
  let sum = x + y;
  return callback(sum);
}
console.log(`sum result: ${sum(9,-5,add)}`);
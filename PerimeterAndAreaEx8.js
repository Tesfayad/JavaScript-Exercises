// Analysis
// area of rectangle = length * width, Perimeter = 2 * length + height
// area of circle = 3.14 * r * r, Perimeter of circle = 2 * 3.14 * r

const PI = 3.14;
const calculateRectangleArea = (Length, Width)=> {
    if(isNaN(Length) || isNaN(Width) || Length<=0 || Width<=0) {
        return;
    } 
    return Length * Width;
}

const calculateRectanglePerimeter = (Length, Width)=> {
    if(isNaN(Length) || isNaN(Width) || Length<=0 || Width<=0) {
        return;
    } 
    return 2 * Length + Width;
}

const calculateCircleArea = (r)=> {
    if(isNaN(r) || r<=0) {
        return;
    } 
    return PI * Math.pow(r,2);
}
const calculateCircleCircumference = (r)=> {
    if(isNaN(r) || r<=0) {
        return;
    } 
    return 2 * PI * r;
}

let rectangleAreaResult = calculateRectangleArea(6,9);
let rectanglePerimeterResult = calculateRectanglePerimeter(6,9);
let circleAreaResult = calculateCircleArea(5);
let circleCircumferenceResult = calculateCircleCircumference(5);

console.log(`rectangle area: ${rectangleAreaResult}`);
console.log(`rectangle perimeter: ${rectanglePerimeterResult}`);
console.log(`circle area: ${circleAreaResult}`);
console.log(`circle circumference: ${circleCircumferenceResult}`);
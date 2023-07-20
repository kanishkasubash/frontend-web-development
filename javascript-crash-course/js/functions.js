// Define Functions
function greeting() {
    console.log("Hello World!");
}

function areaOfCircle(radius) {
    const PI = 3.14;
    area = PI * (radius * radius);
    return area;
}

// Define Arrow Functions
sum = (num1, num2) => {return num1 + num2;}
sub = (num1, num2) => {return num1 - num2;}
mul = (num1, num2) => {return num1 * num2;}
div = (num1, num2) => {return num1 / num2;}

// Call Functions
greeting();

console.log(`Area of the Circle = ${areaOfCircle(7)}`);

console.log(`SUM = ${sum(5, 3)}`);
console.log(`SUB = ${sub(5, 3)}`);
console.log(`MUL = ${mul(5, 3)}`);
console.log(`DIV = ${div(5, 3)}`);
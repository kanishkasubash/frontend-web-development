// Define Functions
function greeting() {
    console.log("Hello World!");
}

function add(num1, num2) {
    return num1 + num2;
}

function areaOfCircle(radius) {
    const PI = 3.14;
    area = PI * (radius * radius);
    return area;
}

// Call Functions
greeting();

let sum = add(10, 20);
console.log("SUM = " + sum);

console.log(`Area of the Circle = ${areaOfCircle(7)}`);

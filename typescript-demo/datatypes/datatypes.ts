/**
 * This is a variable to store a person's  first name.
 * @type {string}
 */
let fname: string = 'kanishka';

/**
 * This is a variable to store a person's  last name.
 * @type {string}
 */
let lname: string = 'Priyashantha';

let fullname = `${fname} ${lname}`.toUpperCase();

console.log(fullname);

/* number data type */
let dob: string = "25";
let date: number = parseInt(dob);

console.log(date);

/**
 * This is a variable to store a boolean value.
 * @type {boolean}
 */
let isValid: boolean = false;

console.log(isValid);

/**
 * Employee list array
 * @type {string}
 */
let empList: string[];
empList = ["Emp1", "Emp2", "Emp3", "Emp4"]
let numList: Array<number>;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(empList);
console.log(numList);

let squar = numList.map((num) => num * num);
console.log(squar);

let rep = numList.map((num, index) => num.toString().repeat(index + 1)).join(", ");
console.log(rep);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

/**
 * Colours { Red, Green, Blue }
 */
const enum Color {
    Red,
    Green,
    Blue
}

let colorIndex: Color = Color.Green;

console.log(colorIndex);

/* tuple data type */

/**
 * Define a tuple to store information about a person: name, age, and whether they are a student (boolean).
 * @type {tuple}
 */
let person: [string, number, boolean];

// Initialize the tuple with values.
person = ["Alice", 30, true];

// Access elements of the tuple by index.
const sName: string = person[0];
const age: number = person[1];
const isStudent: boolean = person[2];

// Output the values.
console.log(`Name: ${sName}, Age: ${age}, Student: ${isStudent}`);
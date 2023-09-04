"use strict";
/* string data type */
let fname = 'kanishka';
let lname = 'Priyashantha';
let fullname = `${fname} ${lname}`.toUpperCase();
console.log(fullname);
/* number data type */
let dob = "25";
let date = parseInt(dob);
console.log(date);
/* boolean data type */
let isValid = false;
console.log(isValid);
/* array data type */
let empList;
empList = ["Emp1", "Emp2", "Emp3", "Emp4"];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(empList);
console.log(numList);
let squar = numList.map((num) => num * num);
console.log(squar);
let rep = numList.map((num, index) => num.toString().repeat(index + 1)).join(", ");
console.log(rep);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let colorIndex = 1 /* Color.Green */;
console.log(colorIndex);
/* tuple data type */
// Define a tuple to store information about a person: name, age, and whether they are a student (boolean).
let person;
// Initialize the tuple with values.
person = ["Alice", 30, true];
// Access elements of the tuple by index.
const sName = person[0];
const age = person[1];
const isStudent = person[2];
// Output the values.
console.log(`Name: ${sName}, Age: ${age}, Student: ${isStudent}`);

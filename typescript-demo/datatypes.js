"use strict";
/* string data type */
let fname = 'kanishka';
let lname = 'Priyashantha';
let fullname = `${fname} ${lname}`.toUpperCase();
console.log(fullname);
/* number data type */
let age;
age = 25;
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
/* enum data type */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let bg = Color.Green;
console.log(bg);

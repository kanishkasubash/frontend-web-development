/* string data type */
let fname: string = 'kanishka';
let lname: string = 'Priyashantha';

let fullname = `${fname} ${lname}`.toUpperCase();

console.log(fullname);

/* number data type */
let age: number;
age = 25;

let dob: string = "25";
let date: number = parseInt(dob);

console.log(date);

/* boolean data type */
let isValid: boolean = false;

console.log(isValid);

/* array data type */
let empList: string[];
empList = ["Emp1", "Emp2", "Emp3", "Emp4"]
let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

console.log(empList);
console.log(numList);
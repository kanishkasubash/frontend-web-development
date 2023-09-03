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
const enum Color {
    Red,
    Green,
    Blue
}

let bg: Color = Color.Green;

console.log(bg);
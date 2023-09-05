/**
 * Find elemrnt using indexOf method
 * @param haystack Given array {any[]}
 * @returns Message : found the needle at position (position) {String}
 */
function findNeedle(haystack: any[]): string {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]));

/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 * @param array 
 * @returns 
 */
function sumArray(array: number[] | null): number {

    return !array || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
}

/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * @param array 
 * @returns 
 */
function sumArray2(array: number[] | null): number {

    return !array || array.length <= 2 ? 0 : (array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array));
}

console.log(sumArray([6, 2, 5, 2, 6]));
console.log(sumArray2([6, 2, 5, 2, 6]));


/**
 * Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 * @param fatherAge Current father's age (years)
 * @param sonAge Current age of his son (years)
 * @returns Age twice as old (years)
 */
function yearsAgoOrInFuture(fatherAge: number, sonAge: number): number {
    return Math.abs(fatherAge - (2 * sonAge));
}

const fatherAgeNow = 40;
const sonAgeNow = 10;
const result = yearsAgoOrInFuture(fatherAgeNow, sonAgeNow);

console.log(`The event happened ${result} years ago (or will happen in the future).`);

/**
 * Generic function that takes two parameters of the same type { Type }.
 * It returns a tuple containing the swapped values.
 * @param a First Value
 * @param b Second Value
 * @returns Tuple containing the swapped values [ b, a ]
 */
function swap<Type>(a: Type, b: Type): [Type, Type] {
    return [b, a];
}

const resultSwap1 = swap(10, 20); // result is [20, 10]
const resultSwap2 = swap('A', 'B'); // result is ['B', 'A']

console.log(resultSwap1);
console.log(resultSwap2);
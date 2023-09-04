/* find elemrnt using indexOf method */
export function findNeedle(haystack: any[]): string {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]));

/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 * @param array 
 * @returns 
 */
export function sumArray(array: number[] | null): number {

    return !array || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
}

/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * @param array 
 * @returns 
 */
export function sumArray2(array: number[] | null): number {

    return !array || array.length <= 2 ? 0 : (array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array));
}

console.log(sumArray([6, 2, 5, 2, 6]));
console.log(sumArray2([6, 2, 5, 2, 6]));
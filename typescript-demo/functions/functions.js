"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray2 = exports.sumArray = exports.findNeedle = void 0;
/* find elemrnt using indexOf method */
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}
exports.findNeedle = findNeedle;
console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]));
/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 * @param array
 * @returns
 */
function sumArray(array) {
    return !array || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
}
exports.sumArray = sumArray;
/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * @param array
 * @returns
 */
function sumArray2(array) {
    return !array || array.length <= 2 ? 0 : (array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array));
}
exports.sumArray2 = sumArray2;
console.log(sumArray([6, 2, 5, 2, 6]));
console.log(sumArray2([6, 2, 5, 2, 6]));

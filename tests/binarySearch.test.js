/* binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
    */

const binarySearch = require('../exercises/binarySearch');

test('Should find the val', () => {
  expect(binarySearch([1,2,3,4,5],2)).toBe(1);
});
test('Should find the val', () => {
  expect(binarySearch([1,2,3,4,5],3)).toBe(2);
});
test('Should find the val', () => {
  expect(binarySearch([1,2,3,4,5],5)).toBe(4);
});
test('Should find the val', () => {
  expect(binarySearch([1,2,3,4,5],6)).toBe(-1);
});
test('Should find the val', () => {
  expect(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)).toBe(2);
});
test('Should find the val', () => {
  expect(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95)).toBe(16);
});
test('Should find the val', () => {
  expect(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100)).toBe(-1);
});
const recursion = require('../recursionPractice');

// Power
test('power(2, 2) should equal 4', () => {
  expect(recursion.power(2,2)).toBe(4);
});
test('power(2, 0) should equal 4', () => {
  expect(recursion.power(2,0)).toBe(1);
});
test('power(2, 4) should equal 16', () => {
  expect(recursion.power(2,4)).toBe(16);
});

// Factorial
test('factorial(1) should equal 1', () => {
  expect(recursion.factorial(1)).toBe(1);
});
test('factorial(2) should equal 2', () => {
  expect(recursion.factorial(2)).toBe(2);
});
test('factorial(4) should equal 24', () => {
  expect(recursion.factorial(4)).toBe(24);
});
test('factorial(7) should equal 5040', () => {
  expect(recursion.factorial(7)).toBe(5040);
});



//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
const areThereDuplicates = require('../exercises/areThereDuplicates');

test('Are there duplicates in 1, 2, 3, should be false', ()=> {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
});

test('Are there duplicates in 1, 2, 2, should be true', ()=> {
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
});
test("Are there duplicates in 'a', 'b', 'c', 'a', should be false", ()=> {
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
});

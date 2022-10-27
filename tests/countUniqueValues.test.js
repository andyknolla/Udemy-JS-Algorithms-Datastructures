const countUniqueValues = require('../countUniqueValues');

test('Unique values in [1,1,1,1,1,2]', ()=> {
  expect(countUniqueValues([1,1,1,1,1,2])).toBe(2);
});
test('Unique values in [1,2,3,4,4,4,7,7,12,12,13]', ()=> {
  expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7);
});
test('Unique values in []', ()=> {
  expect(countUniqueValues([])).toBe(0);
});
test('Unique values in [-2,-1,-1,0,1]', ()=> {
  expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4);
});
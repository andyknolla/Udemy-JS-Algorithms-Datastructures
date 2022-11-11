const sameFrequency = require('../exercises/sameFrequency');

test('128 and 812 to have the same frequency', ()=> {
  expect(sameFrequency(128, 812)).toBe(true);
});
test('34 and 14 should be false', ()=> {
  expect(sameFrequency(34,14)).toBe(false);
});
test('3589578 and 5879385 to be true', ()=> {
  expect(sameFrequency(3589578, 5879385)).toBe(true);
});
test('UsameFrequency(22,222)', ()=> {
  expect(sameFrequency(22,222)).toBe(false);
});
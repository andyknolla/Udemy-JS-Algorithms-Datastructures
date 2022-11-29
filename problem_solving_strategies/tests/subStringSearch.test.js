const countSubString = require('../exercises/subStringSearch');

test('Test', () => {
  expect(countSubString('Come with me if you want to live', 'want')).toBe(1);
});
test('tests', () => {
  expect(countSubString('blah blah blah', 'blah')).toBe(3);
});
test('tests', () => {
  expect(countSubString('blah blah blur de blur blah', 'blur')).toBe(2);
});
test('tests', () => {
  expect(countSubString('blah blah blah', 'dirka')).toBe(0);
});

const validAnagram = require('../validAnagram');

test('Finds two empty strings to be an anagram', ()=> {
  expect(validAnagram('', '')).toBe(true);
});
test('blah and bluer are not anagrams', ()=> {
  expect(validAnagram('blah', 'bluer')).toBe(false);
});
test('anagram and nagaram are anagrams', ()=> {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});
test('rat and car are not anagrams', ()=> {
  expect(validAnagram('rat', 'car')).toBe(false);
});
test('awesome and awesom are not anagrams', ()=> {
  expect(validAnagram('awesome', 'awesom')).toBe(false);
});
test('qwerty and qeywrt are anagrams', ()=> {
  expect(validAnagram('bqwertylah', 'qeywrt')).toBe(true);
});
test('blah and bluer are not anagrams', ()=> {
  expect(validAnagram('blah', 'bluer')).toBe(false);
});
test('blah and bluer are not anagrams', ()=> {
  expect(validAnagram('blah', 'bluer')).toBe(false);
});
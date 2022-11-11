const isSubsequence = require('../exercises/isSubSequence');


test('"hello" is a subsquence of "hello world"', () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
});
test('"sing" is a subsquence of "sting"', () => {
  expect(isSubsequence('sing', 'sting')).toBe(true);
});
test('"abc" is a subsquence of "abracadabra"', () => {
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
});
test('"abc" is a subsquence of "acb"', () => {
  expect(isSubsequence('abc', 'acb')).toBe(false);
});

const maxSubarraySum = require('../exercises/maxSubArraySum');

test('[100,200,300,400], 2 should have a max sub array sum of 700', () => {
  expect(maxSubarraySum([100,200,300,400], 2)).toBe(700);
});
test('[1,4,2,10,23,3,1,0,20] and 4 should have a max sub array sum of 39', () => {
  expect(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)).toBe(39);
});
test('[-3,4,0,-2,6,-1], 2) should have a max sub array sum of 5', () => {
  expect(maxSubarraySum([-3,4,0,-2,6,-1], 2)).toBe(5);
});
test('[100,200,300,400], 2 should have a max sub array sum of 5', () => {
  expect(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)).toBe(5);
});
test('[100,200,300,400], 2 should return null', () => {
  expect(maxSubarraySum([2,3], 3)).toBe(null);
});

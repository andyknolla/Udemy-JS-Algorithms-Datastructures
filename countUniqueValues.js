/* Implement a function called countUniqueValues, which acepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in the array, 
but it will always be sorted. */

// My solution using Multiple Pointers Method, after described, prior to example or hints. 
function countUniqueValues(arr) {
  let first = 0;
  let second = 1;
  let count = 0;
  while (second <= arr.length) {
    if(arr[first] != arr[second]) {
      count++;
      first = second;
      second++
    } else second++
  }
  return count;
}

// Colt's idea, doing without a count variable.
// function countUniqueValues(arr){
//   let first = 0;
//   let second = 1;
//   while(second <= arr.length) {
//       if(arr[first] === arr[second]) {
//           second++
//       } else {
//           first++;
//           arr.splice(first, 1, arr[second]);
//           second++;
//       }
//   }
//   return first;
// }

module.exports = countUniqueValues;
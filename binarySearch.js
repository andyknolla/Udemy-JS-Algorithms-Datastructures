/* Binary Search Exercise

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1
    */

    function binarySearch(arr, val) {
      let left = 0;
      let right = arr.length - 1;
      let middle = Math.floor((left + right)/2);
      
      while(arr[middle] != val && left <= right) {
          console.log('left: ', left);
          console.log('right: ', right);
          console.log('middle: ', middle);
        if(arr[middle] === val) return middle;
          
        if(arr[middle] < val) {
            left = middle+1;
        } else {
            right = middle-1;
        }
        middle = Math.floor((left + right)/2);
      }
      return left <= right ? middle : -1;
    }

    module.exports = binarySearch;
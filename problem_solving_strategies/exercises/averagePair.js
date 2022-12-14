
/* Write a function called averagePair. Given a sorted array of integers and a target
 average, determine if there is a pair of values in the array where the average of the 
 pair equals the target average. There may be more than one pair that matches the 
 average target.*/

function averagePair(arr, num){
  let first = 0;
  let second = arr.length - 1;
  while (first < second) {
    const avg = arr[first] + arr[second] / 2;
    if(avg === num) return true;
    else if(avg < num) first++;
    else second--
  }
  return false;
}

module.exports = averagePair;

/* 
    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([1,3,3,5,6,7,8,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false
*/
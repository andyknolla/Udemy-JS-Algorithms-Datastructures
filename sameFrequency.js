/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities: O(n) */

function sameFrequency(firstNum, secondNum){
  firstNum = String(firstNum);
  secondNum = String(secondNum);
  if(firstNum.length != secondNum.length) return false;
  
  let firstFrequency = {};

  for(let i = 0; i < firstNum.length; i++) {
      const num = firstNum[i]
      firstFrequency[num] = ++firstFrequency[num] || 1; 
  }

  for(var i = 0; i < firstNum.length; i++) {
      const num = String(secondNum)[i]
      if(!firstFrequency[num]) return false
      else firstFrequency[num] -= 1;
  }
  return true;
}

module.exports = sameFrequency;


/* Given a string and a substring, count how many times the substring occurs within the string 
Examples: 
countSubString('blah de blah blah', 'blah') // returns 3
countSubString('Come with me if you want to live', 'want'); // returns 1
*/

function countSubString(str, substr) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if(str[i + j] != substr[j]) break
      if(j === substr.length -1) count++;
    }
  }
  return count;
}

module.exports = countSubString;
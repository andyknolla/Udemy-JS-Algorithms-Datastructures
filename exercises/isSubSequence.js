/* Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  let constructedWord = '';
  for (var first = 0, second = 0; second < str2.length; second++ ) {
    if(str1[first] === str2[second]) {
        constructedWord += str2[second];
        first++
    }
    if(constructedWord === str1) return true;
  }
  return false;
}

module.exports = isSubsequence;
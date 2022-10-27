function validAnagram(str1, str2){
  if(str1 === '' && str2 === '') {
      return true;
  }
  // loop through first string, create an object with keys of each string value, and values of number of occurances
  let count1 = {};
  let count2 = {};
  for (const char of str1) {
      count1[char] = ++count1[char] || 1;
  }
  // loop through second string, and create similar object for that string
  for (const char of str2) {
      count2[char] = ++count2[char] || 1;
  }
  
  // reference first object, by key of each string2 value, check if number of occurences are the same
  for (const char of str2) {
      if(count1[char] != count2[char]) {
          return false;
      }
  }
  return true;
}

module.exports = validAnagram;
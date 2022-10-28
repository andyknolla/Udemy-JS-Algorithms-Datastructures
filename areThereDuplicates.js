function areThereDuplicates() {
  let frequency = {};
  for(let i = 0; i < arguments.length; i++) {
      const item = String(arguments[i]);
      frequency[item] = ++frequency[item] || 1;
  }
  console.log('freq obj = ', frequency)
  for(const item in frequency) {
      console.log('item: ', item)
      if(frequency[item] > 1) return true;
  }
  return false;
}

// TODO: try solving with Multiple Pointers method
// Need to sort?

module.exports = areThereDuplicates;
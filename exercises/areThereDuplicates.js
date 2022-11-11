function areThereDuplicates(...args) {
  let frequency = {};
  for(let i = 0; i < args.length; i++) {
      const item = String(args[i]);
      frequency[item] = ++frequency[item] || 1;
  }
  for(const item in frequency) {
      if(frequency[item] > 1) return true;
  }
  return false;
}

// TODO: try solving with Multiple Pointers method
// Need to sort? yes

module.exports = areThereDuplicates;
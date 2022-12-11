class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    if (this.values.length > 1) {
      // bubble up the new value
      let newValIndex = this.values.length - 1;  // last item/ highest index
      let parentIndex = Math.floor( (newValIndex - 1) / 2 ); 
      while ( this.values[newValIndex] > this.values[parentIndex] ) {
        var temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[newValIndex];
        this.values[newValIndex] = temp;

        newValIndex = parentIndex;
        parentIndex =  Math.floor( (newValIndex - 1) / 2 ); 

      }
    }
    return this.values;
  }

  extractMax() {
    const max = this.values.shift();  // [ 33, 39, 12, 27, 18 ]
    this.values.unshift(this.values.pop());  // [ 18, 33, 39, 12, 27 ]

    // set parent
    // set its left child
    // set its right child
    // compare




    return max;
  }
}

module.exports = MaxBinaryHeap;
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    if (this.values.length > 1) {
      // bubble up the new value
      let newValIndex = this.values.length - 1; // last item/ highest index
      let parentIndex = Math.floor((newValIndex - 1) / 2);
      while (this.values[newValIndex] > this.values[parentIndex]) {
        var temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[newValIndex];
        this.values[newValIndex] = temp;

        newValIndex = parentIndex;
        parentIndex = Math.floor((newValIndex - 1) / 2);
      }
    }
    return this.values;
  }

  heapify(arr) {
    // create a new heap out of a given array of elements
  }

  extractMax() {
    const max = this.values.shift(); // [ 33, 39, 12, 27, 18 ]
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values.unshift(end); // [ 18, 33, 39, 12, 27 ]
      this.siftDown();
    }
    return max;
  }

  siftDown() {
    let parentIndex = 0; // last item/ highest index
    const length = this.values.length;
    const element = this.values[parentIndex];

    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      var leftChildVal, rightChildVal;
      let swap = null;

      if (leftChildIndex < length) {
        leftChildVal = this.values[leftChildIndex];
        if (leftChildVal > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChildVal = this.values[rightChildIndex];
        if (
          (swap === null && rightChildVal > element) ||
          (swap !== null && rightChildVal > leftChildVal)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;

      this.values[parentIndex] = this.values[swap];
      this.values[swap] = element;
      parentIndex = swap;
    }
  }
}

class Node {
  constructor(priority, val) {
    this.priority = priority;
    this.val = val;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []; // holds nodes
  }

  enqueue(priority, val) {
    let newNode = new Node(priority, val);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values.map((node) => node.priority);
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[idx] = parent;
      idx = parentIndex;
    }
  }

  deQueue() {
    const max = this.values.shift(); // [ 33, 39, 12, 27, 18 ]
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values.unshift(end); // [ 18, 33, 39, 12, 27 ]
      this.siftDown();
    }
    return max;
  }

  siftDown() {
    let parentIndex = 0; // last item/ highest index
    const length = this.values.length;
    const element = this.values[parentIndex];

    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      var leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;

      this.values[parentIndex] = this.values[swap];
      this.values[swap] = element;
      parentIndex = swap;
    }
  }
}

module.exports = { MaxBinaryHeap, PriorityQueue };

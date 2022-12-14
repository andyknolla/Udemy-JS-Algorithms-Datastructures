const { MaxBinaryHeap, PriorityQueue, Node } = require('../maxBinaryHeap');

describe('Max Binary Heap', () => {
  test('Create an instance of MaxBinaryHeap', () => {
    const heap = new MaxBinaryHeap();
    expect(heap).toBeInstanceOf(MaxBinaryHeap);
  });

  test('Basic insertion; inserting 3 values in order should create an array in the same order as insertion', () => {
    const heap = new MaxBinaryHeap();
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);

    expect(heap.values).toEqual([41, 39, 33]);
  });

  test('Insertion of two values requiring reordering', () => {
    const heap = new MaxBinaryHeap();
    heap.insert(33);
    heap.insert(41);

    expect(heap.values).toEqual([41, 33]);
  });

  test('Insertion of 3 values requiring reordering', () => {
    const heap = new MaxBinaryHeap();
    heap.insert(39);
    heap.insert(33);
    heap.insert(41);

    expect(heap.values).toEqual([41, 33, 39]);
  });

  test('Insertion of 6 values requiring reordering', () => {
    const heap = new MaxBinaryHeap();
    heap.insert(12);
    heap.insert(27);
    heap.insert(18);
    heap.insert(33);
    heap.insert(39);
    heap.insert(41);

    expect(heap.values).toEqual([41, 33, 39, 12, 27, 18]);
  });

  describe('Extract maximum from [ 41, 33, 39, 12, 27, 18 ]', () => {
    const heap = new MaxBinaryHeap();
    heap.insert(12);
    heap.insert(27);
    heap.insert(18);
    heap.insert(33);
    heap.insert(39);
    heap.insert(41);

    test('Extracted value should be 41', () => {
      expect(heap.extractMax()).toEqual(41);
    });
    xtest('Heap after initial swap should be [ 18, 33, 39, 12, 27 ]. (before sifting)', () => {
      expect(heap.values).toEqual([18, 33, 39, 12, 27]);
    });
    test('Heapified heap should be [39, 33, 18, 12, 27]', () => {
      expect(heap.values).toEqual([39, 33, 18, 12, 27]);
    });
  });
});
//  TODO: finish this...
describe('Priority Queue (Min Binary Heap with nodes)', () => {
  test('Create an instance of MaxBinaryHeap', () => {
    const queue = new PriorityQueue();
    expect(queue).toBeInstanceOf(PriorityQueue);
  });

  test('Basic insertion; inserting 3 values in order should create an array in the same order as insertion', () => {
    const queue = new PriorityQueue();
    queue.enqueue(3, 41);
    queue.enqueue(2, 39);
    // queue.enqueue(1, 33);
    const priorities = queue.values.map((node) => node.priority);
    console.log('Priorities = ', priorities);
    expect(priorities).toEqual([3, 2]);
  });
});

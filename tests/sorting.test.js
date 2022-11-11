const sorting = require('../exercises/sorting');

const length10Array = {
  unsorted: [5,2,8,3,12,9,0,6,7,2],
  sorted : [0,2,2,3,5,6,7,8,9,12]
}

const length20Array = {
  unsorted: [54,23,60,1,56,84,25,12,73,56,24,40,31,99,1,37,29,9,16,42],
  sorted: [1,1,9,12,16,23,24,25,29,31,37,40,42,54,56,56,60,73,84,99]
}
const length10ArrayWithNegatives = {
  unsorted: [52,0,80,-5,66,3,-67,29,-90,4],
  sorted: [-90,-67,-5,0,3,4,29,52,66,80]
}
const nearlySortedLength10Array = {
  unsorted: [-4, 1, 6, -10, 8, 12, 26, 5, 39, 66],
  sorted: [-10,-4,1,5,6,8,12,26,39,66]
}

// Bubble Sort
test('Bubble sort should sort the pretty short array', () => {
  expect(sorting.bubbleSort(length10Array.unsorted)).toStrictEqual(length10Array.sorted);
});
test('Bubble sort should sort the longer array', () => {
  expect(sorting.bubbleSort(length20Array.unsorted)).toStrictEqual(length20Array.sorted);
});
test('Bubble sort should sort the array with negative numbers', () => {
  expect(sorting.bubbleSort(length10ArrayWithNegatives.unsorted)).toStrictEqual(length10ArrayWithNegatives.sorted);
});

test('Bubble sort should quickly sort the nearly sorted array', () => {
  expect(sorting.bubbleSort(nearlySortedLength10Array.unsorted)).toStrictEqual(nearlySortedLength10Array.sorted);
});

// Selection Sort
test('Selection sort should sort the pretty short array', () => {
  expect(sorting.selectionSort(length10Array.unsorted)).toStrictEqual(length10Array.sorted);
});
test('Selection sort should sort the longer array', () => {
  expect(sorting.selectionSort(length20Array.unsorted)).toStrictEqual(length20Array.sorted);
});
test('Selection sort should sort the array with negative numbers', () => {
  expect(sorting.selectionSort(length10ArrayWithNegatives.unsorted)).toStrictEqual(length10ArrayWithNegatives.sorted);
});
test('Selection sort should sort the nearly sorted array', () => {
  expect(sorting.selectionSort(nearlySortedLength10Array.unsorted)).toStrictEqual(nearlySortedLength10Array.sorted);
});

// Insertion Sort
test('Insertion sort should sort the pretty short array', () => {
  expect(sorting.insertionSort(length10Array.unsorted)).toStrictEqual(length10Array.sorted);
});
test('Insertion sort should sort the longer array', () => {
  expect(sorting.insertionSort(length20Array.unsorted)).toStrictEqual(length20Array.sorted);
});
test('Insertion sort should sort the array with negative numbers', () => {
  expect(sorting.insertionSort(length10ArrayWithNegatives.unsorted)).toStrictEqual(length10ArrayWithNegatives.sorted);
});
test('Insertion sort should sort the nearly sorted array', () => {
  expect(sorting.insertionSort(nearlySortedLength10Array.unsorted)).toStrictEqual(nearlySortedLength10Array.sorted);
});

// Merge Sort
// Test merge helper function
test('Merge helper should merge two sorted arrays into one sorted array of length of two argument arrays', () => {
  expect(sorting.merge([ 1,3,6,9 ], [ 4,5,8,11 ])).toStrictEqual([ 1,3,4,5,6,8,9,11 ]);
});
test('Merge helper should merge two sorted arrays (2nd of longer length) into one sorted array of length of two argument arrays', () => {
  expect(sorting.merge([ 1,3,6,9 ], [ 4,5,8,11,17,28,31 ])).toStrictEqual([ 1,3,4,5,6,8,9,11,17,28,31 ]);
});
test('Merge helper should merge two sorted arrays (1st of longer length) into one sorted array of length of two argument arrays', () => {
  expect(sorting.merge([ 1,3,6,9,17,28,31 ], [ 4,5,8,11 ])).toStrictEqual([ 1,3,4,5,6,8,9,11,17,28,31 ]);
});
test('Merge helper should merge two sorted arrays (1st one of length zero) into one sorted array of length of two argument arrays', () => {
  expect(sorting.merge([  ], [ 4,5,8,11 ])).toStrictEqual([ 4,5,8,11 ]);
});
test('Merge helper should merge two sorted arrays (2nd one of length zero) into one sorted array of length of two argument arrays', () => {
  expect(sorting.merge([ 1,3,6,9,17,28,31 ], [ ])).toStrictEqual([ 1,3,6,9,17,28,31 ]);
});
test('Merge helper should merge two sorted arrays; one empty, the other length of 1', () => {
  expect(sorting.merge([ 1 ], [ ])).toStrictEqual([ 1 ]);
});
test('Merge helper should merge two sorted arrays; one empty, the other length of 1', () => {
  expect(sorting.merge([ ], [ 1 ])).toStrictEqual([ 1 ]);
});

// test MergeSort function
test('Merge sort should sort a short array', () => {
  expect(sorting.mergeSort(length10Array.unsorted)).toStrictEqual(length10Array.sorted);
});
test('Merge sort should sort the longer array', () => {
  expect(sorting.mergeSort(length20Array.unsorted)).toStrictEqual(length20Array.sorted);
});
test('Merge sort should sort an array with negative numbers', () => {
  expect(sorting.mergeSort(length10ArrayWithNegatives.unsorted)).toStrictEqual(length10ArrayWithNegatives.sorted);
});
test('Merge sort should sort a nearly array ', () => {
  expect(sorting.mergeSort(nearlySortedLength10Array.unsorted)).toStrictEqual(nearlySortedLength10Array.sorted);
});
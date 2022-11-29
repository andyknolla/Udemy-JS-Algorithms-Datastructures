const { Node, SinglyLinkedList: DoublyLinkedList } = require('../singlyLinkedList');

// beforeEach(() => {

// });
describe('Pushing one item', () => {
  const list = new DoublyLinkedList();
  list.push('one');
  test('List.length should be 1', () => {
    expect(list.length).toBe(1);
  });
  test('The only value should be in the head and tail', () => {
    expect(list.head.val).toBe('one');
    expect(list.tail.val).toBe('one');
  });
});

describe('Pushing two items', () => {
  const list = new DoublyLinkedList();
  list.push('one');
  list.push('two');
  test('Length should be 2', () => {
    expect(list.length).toBe(2);
  })
  test('Values of head and tail should be "one" and "two" respectively', () => {
    expect(list.head.val).toBe('one');
    expect(list.tail.val).toBe('two');
  })
});

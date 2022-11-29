const { Node, SinglyLinkedList } = require('../singlyLinkedList');

describe('Pushing one item', () => {
  const list = new SinglyLinkedList();
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
  const list = new SinglyLinkedList();
  list.push('one');
  list.push('two');

  test('Length should be 2', () => {
    expect(list.length).toBe(2);
  });

  test('Values of head and tail should be "one" and "two" respectively', () => {
    expect(list.head.val).toBe('one');
    expect(list.tail.val).toBe('two');
  });
});

describe('Popping an item, after adding only one', () => {
  const list = new SinglyLinkedList();
  list.push('one');
  test('Length should be 1', () => {
    expect(list.length).toBe(1);
  });

  test('Values of head and tail should both be "one"', () => {
    expect(list.head.val).toBe('one');
    expect(list.tail.val).toBe('one');
  });

  test('Value of "popped" item should be "one"', () => {
    expect(list.pop().val).toBe('one');
  });

  test('Values of head and tail should both be null and length 0', () => {
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });
});

describe('Popping an item, after adding three', () => {
  const list = new SinglyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  test('Length should be 3', () => {
    expect(list.length).toBe(3);
  });

  test('Values of head and tail should be "one" and "three"', () => {
    expect(list.head.val).toBe('one');
    expect(list.tail.val).toBe('three');
  });

  var popped;
  test('Value of "popped" item should be "three"', () => {
    popped = list.pop();
    expect(popped.val).toBe('three');
  });
  test('popped should not have a next', () => {
    expect(popped.next).toBe(null);
  });

  test('Values of head and tail should both be null and length 0', () => {
    expect(list.head.val).toBe('one');
    expect(list.tail.val).toBe('two');
    expect(list.length).toBe(2);
  });

  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});

describe('GET method should have expected node value from a given index', () => {
  const list = new SinglyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  const gotten = list.get(1);
  test('"Gotten" node.val should be "two" it\'s .next should be thee and list.length should still be 3', () => {
    expect(gotten.val).toBe('two');
    expect(gotten.next.val).toBe('three');
    expect(list.length).toBe(3);
  });
});

describe('SET method should change node value at a given index', () => {
  const list = new SinglyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  test('Item at index 1 should first be "two"', () => {
    expect(list.get(1).val).toBe('two');
  });
  
  test('Item at index 1 should now be "reset", it\'s .next should still be "three", length should still be 3', () => {
    list.set(1, 'reset');
    expect(list.get(1).val).toBe('reset');
    expect(list.get(1).next.val).toBe('three');
    expect(list.length).toBe(3);
  });

  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});

describe('SET method should return false for invalid setting', () => {
  const list = new SinglyLinkedList();
  test('List should be empty: lenth === 0, head and tail null', () => {
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
  test('attempting to set an item in an empty list should return false', () => {
    expect(list.set(0, 'one')).toBe(false); 
  });
  test('pushing "one" into the list should return the list. Length should then be 1', () => {
    expect(list.push('one')).toBe(list);
    expect(list.length).toBe(1);
  });
  test('Setting the value on the one item in the list should return true, it\'s value should be "one", length should be 1', () => {
    expect(list.set(0, 'reset')).toBe(true);
    expect(list.get(0).val).toBe('reset');
    expect(list.length).toBe(1);
  });

  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});

describe('INSERT method should add a new node to a list', () => {
  const list = new SinglyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  test('Item at index 1 should first be "two"', () => {
    expect(list.get(1).val).toBe('two');
  });
  
  test('Item at index 1 should now be "inserted", it\'s .next should be "two", length should be 4', () => {
    var inserted = list.insert(1, 'inserted');
    expect(inserted).toBe(true);
    expect(list.get(1).val).toBe('inserted');
    expect(list.get(1).next.val).toBe('two');
    expect(list.length).toBe(4);
  });
  
  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});

describe('REMOVE method should shorted a list, and return the removed node', () => {
  const list = new SinglyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  test('Item at index 1 should first be "two"', () => {
    expect(list.get(1).val).toBe('two');
  });
  
  test('Removed value should be "two", it\'s .next should be null', () => {
    var removed = list.remove(1);
    expect(removed.val).toBe('two');
    expect(removed.next).toBe(null);
  });

  test('Item at index 1 should now be "three", it\'s .next should be null, length should be 2', () => {
    expect(list.get(1).val).toBe('three');
    expect(list.get(1).next).toBe(null);
    expect(list.length).toBe(2);
  });
  
  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});
const { Node, DoublyLinkedList } = require('../DoublyLinkedList');

describe('PUSH should add one item', () => {
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

describe('PUSH should add two items', () => {
  const list = new DoublyLinkedList();
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

describe('POP should empty a list of 1', () => {
  const list = new DoublyLinkedList();
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

describe('POP should remove an item from a list of three', () => {
  const list = new DoublyLinkedList();
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
  const list = new DoublyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  const gotten = list.get(1);
  test('"Gotten" node.val should be "two" it\'s .next should be thee and list.length should still be 3', () => {
    expect(gotten.val).toBe('two');
    expect(gotten.next.val).toBe('three');
    expect(list.length).toBe(3);
  });
  test('Get should return null for invalid index arguments', () => {
    expect(list.get(-1)).toBe(null);
    expect(list.get(15)).toBe(null);
  });
  test('Get should work with an index greater than length / 2', () => {
    list.push('four');
    list.push('five');
    expect(list.length).toBe(5);
    expect(list.get(4).val).toBe('five')
  })
});

describe('SET method should change node value at a given index', () => {
  const list = new DoublyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  test('item at index 1 should first be "two"', () => {
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
  const list = new DoublyLinkedList();
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

describe('INSERT method should add a new node to a list and increase length', () => {
  const list = new DoublyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  test('Item at index 1 should first be "two"', () => {
    expect(list.get(1).val).toBe('two');
  });
  
  test('Item at index 1 should now be "inserted", length should be 4', () => {
    var inserted = list.insert(1, 'inserted');
    expect(inserted).toBe(true);
    expect(list.get(1).val).toBe('inserted');
    expect(list.length).toBe(4);
  });
  test('Inserted should have expected prev and next values', () => {
    expect(list.get(1).prev.val).toBe('one');
    expect(list.get(1).next.val).toBe('two');
  })
  test('Displaced node should have expected prev and next values', () => {
    expect(list.get(2).prev.val).toBe('inserted');
    expect(list.get(2).next.val).toBe('three');
  });
  test('Node preceding the inserted node should have expected prev and next values', () => {
    expect(list.get(0).prev).toBe(null); // head
    expect(list.get(0).next.val).toBe('inserted');
  });
  
  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});

describe('REMOVE method should shorten a list, and return the removed node', () => {
  const list = new DoublyLinkedList();
  list.push('one');
  list.push('two');
  list.push('three');
  var nodeBeforeRemoved = list.get(0);
  var removed;
  var nodeAfterRemoved = list.get(2)
  
  test('Items at indexes 1,2, and 3 should first be "one", "two", and "three"', () => {
    expect(list.get(0).val).toBe('one');
    expect(list.get(1).val).toBe('two');
    expect(list.get(2).val).toBe('three');
  });
  
  test('Removed value should be "two", it\'s .next and .prev should be null', () => {
    removed = list.remove(1);
    expect(removed.val).toBe('two');
    expect(removed.next).toBe(null);
    expect(removed.prev).toBe(null);
  });

  test('Item at index 1 should now be "three", it\'s .next should be null, length should be 2', () => {
    expect(list.get(1).val).toBe('three');
    expect(list.get(1).next).toBe(null);
    expect(list.length).toBe(2);
  });
  test('The first item\'s .next should be "three", and the new item\'s .prev should be "one"', () => {
    expect(list.get(0).next.val).toBe('three');
    expect(list.get(1).prev.val).toBe('one');
  });
  
  test('Tail should have null for .next', () => {
    expect(list.tail.next).toBe(null);
  });
});

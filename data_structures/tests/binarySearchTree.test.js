const { BinarySearchTree } = require('../binarySearchTree');

test('Should be able to create a new bst', () => {
  const bst = new BinarySearchTree();
  expect(bst).toBeInstanceOf(BinarySearchTree);
  expect(typeof bst.root).toBe('object');
});

describe('Insert Left... should add an item, starting with an empty tree, then adding values less than previous', () => {
  const bst = new BinarySearchTree();
  bst.insert(15);
  test('Should add an item to an empty tree', () => {
    expect(bst).toBeInstanceOf(BinarySearchTree);
    expect(typeof bst.root).toBe('object');
    expect(bst.root).not.toBe(null);
    expect(bst.root.val).toBe(15);
  });

  bst.insert(10);
  test('Should add an item of value less than root, to the left of root of 15', () => {
    expect(bst.root.left.val).toBe(10);
  });

  bst.insert(6);
  test('A third insert should add another left node', () => {
    expect(bst.root.left.left.val).toBe(6);
    expect(bst.root.right).toBe(null);
  });
  test('There should not be anything to the right', () => {
    expect(bst.root.right).toBe(null);
  });

  test('No "lefts" should have a "right"', () => {
    expect(bst.root.left.right).toBe(null);
  });
});

describe('Insert Right... should insert an item starting with an empty tree, then values greater than previous', () => {
  const bst = new BinarySearchTree();
  bst.insert(15);
  test('Should add an item to an empty tree', () => {
    expect(bst).toBeInstanceOf(BinarySearchTree);
    expect(typeof bst.root).toBe('object');
    expect(bst.root).not.toBe(null);
    expect(bst.root.val).toBe(15);
  });

  bst.insert(20);
  test('Should add a second item to the right', () => {
    expect(bst.root.right).not.toBe(null);
    expect(bst.root.right.val).toBe(20);
  });

  bst.insert(25);
  test('Should add a third item to the right', () => {
    expect(bst.root.right.right.val).toBe(25);
    expect(bst.root.right.left).toBe(null);
  });
  test('No "rights" should have a "left"', () => {
    expect(bst.root.right.left).toBe(null);
  });
});

describe('Insert LEFT then RIGHT of left', () => {
  const bst = new BinarySearchTree();
  bst.insert(15); // root
  bst.insert(10); // root.left
  bst.insert(12); // root.left.right

  test('bst should have a left with a right', () => {
    expect(bst.root.left.right).not.toBe(null);
  });
  test('root should be 15, root.left should be 10, root.left.right should be 12', () => {
    expect(bst.root.val).toBe(15);
    expect(bst.root.left.val).toBe(10);
    expect(bst.root.left.right.val).toBe(12);
  });
  test('Shouldn\'t be anything to the right', () => {
    expect(bst.root.right).toBe(null);
  });
});

describe('Insert RIGHT then LEFT', () => {
  const bst = new BinarySearchTree();
  bst.insert(15); // root
  bst.insert(20); // root.right
  bst.insert(17); // root.right.left

  test('bst should have a left with a right', () => {
    expect(bst.root.right).not.toBe(null);
  });
  test('root should be 15, root.right should be 20, root.right.left should be 17', () => {
    expect(bst.root.val).toBe(15);
    expect(bst.root.right.val).toBe(20);
    expect(bst.root.right.left.val).toBe(17);
  });
  test('Shouldn\'t be anything to the left', () => {
    expect(bst.root.left).toBe(null);
  });
});

test('Inserting a duplicate should return undefined', () => {
  const bst = new BinarySearchTree();
  bst.insert(15);

  expect(bst.insert(15)).toBe(undefined);
});
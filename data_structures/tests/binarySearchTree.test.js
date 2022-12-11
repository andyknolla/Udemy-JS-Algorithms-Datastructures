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
  test("Shouldn't be anything to the right", () => {
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
  test("Shouldn't be anything to the left", () => {
    expect(bst.root.left).toBe(null);
  });
});

test('Inserting a duplicate should return undefined', () => {
  const bst = new BinarySearchTree();
  bst.insert(15);

  expect(bst.insert(15)).toBe(undefined);
});

describe('FIND', () => {
  const bst = new BinarySearchTree();
  bst.insert(15); // root
  bst.insert(20); // root.right
  bst.insert(17); // root.right.left      15
  //////////////////////////////   10            20
  bst.insert(10); // root.left         12     17
  bst.insert(12); // root.left.right

  test('Find 12 (left of root) should return true', () => {
    expect(bst.find(12)).toBe(true);
  });
  test('Find 17 (right of root) should return true', () => {
    expect(bst.find(17)).toBe(true);
  });
  test('Find 13 (left of root) should return false', () => {
    expect(bst.find(13)).toBe(false);
  });
  test('Find 18 (right of root) should return false', () => {
    expect(bst.find(18)).toBe(false);
  });
});

describe('Breadth First Search', () => {
  const bst = new BinarySearchTree();
  bst.insert(15); // root
  bst.insert(20); // root.right
  bst.insert(17); // root.right.left
  bst.insert(18); // root.right.left.right  15
  //////////////////////////////        10         20
  bst.insert(10); // root.left     7      12    17
  bst.insert(12); // root.left.right   11          18
  bst.insert(7); // root.left.left
  bst.insert(11); // root.left.right.left

  test('Breadth First search should return: 15, 10, 20, 7, 12, 17, 11, 18', () => {
    expect(bst.breadthFirstSearch()).toEqual([15, 10, 20, 7, 12, 17, 11, 18]);
  });
});

describe('Breadth First Search', () => {
  const bst = new BinarySearchTree();
  bst.insert(15); // root
  bst.insert(20); // root.right
  bst.insert(17); // root.right.left
  bst.insert(18); // root.right.left.right        15
  //////////////////////////////            10           20
  bst.insert(10); // root.left           7      12    17
  bst.insert(12); // root.left.right    6 8   11         18
  bst.insert(7); // root.left.left
  bst.insert(8); // root.left.left.right
  bst.insert(6); // root.left.left.left
  bst.insert(11); // root.left.right.left

  test('Depth First Search, PreOrder, should return: 15, 10, 7, 8, 6, 11, 12, 20, 17, 18', () => {
    expect(bst.DFS_preorder()).toEqual([15, 10, 7, 6, 8, 12, 11, 20, 17, 18]);
  });
  test('Depth First Search, PostOrder, should return: 6, 8, 7, 11, 12, 10, 18, 17, 20, 15', () => {
    expect(bst.DFS_postorder()).toEqual([6, 8, 7, 11, 12, 10, 18, 17, 20, 15]);
  });
  test('Depth First Search, In-Order, should return: 6, 7, 8, 10, 11, 12, 15, 18, 17, 20', () => {
    expect(bst.DFS_inOrder()).toEqual([6, 7, 8, 10, 11, 12, 15, 17, 18, 20]);
  });
});

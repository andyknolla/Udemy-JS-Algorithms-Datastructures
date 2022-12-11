class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (newNode.val === current.val) return undefined;
        if (newNode.val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else if (newNode.val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return true;
      else {
        if (val < current.val) {
          current = current.left;
        } else if (val > current.val) {
          current = current.right;
        }
      }
    }
    return false;
  }
  breadthFirstSearch() {
    const queue = [];
    const collection = [];
    let shifted = this.root;
    queue.push(shifted);
    while (queue.length) {
      shifted = queue.shift();  // move declaration outside the loop. Just reassign.
      if (shifted.left) queue.push(shifted.left);
      if (shifted.right) queue.push(shifted.right);
      collection.push(shifted.val);
    }
    return collection;
  }

  DFS_preorder() {
    const collection = [];
    function traverse(node) {
      collection.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return collection;
  }

  DFS_postorder() {
    const collection = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      collection.push(node.val);
    }
    traverse(this.root);
    return collection;
  }

  DFS_inOrder() {
    const collection = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      collection.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return collection;
  }
  
}

module.exports = { BinarySearchTree };

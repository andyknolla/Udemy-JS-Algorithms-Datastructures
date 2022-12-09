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
}

module.exports = { BinarySearchTree };

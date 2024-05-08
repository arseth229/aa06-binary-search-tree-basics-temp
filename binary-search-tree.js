// Do not change this
class TreeNode {
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


  insert(val, currentNode=this.root) {
    const node = new TreeNode(val)
    if (!this.root) {
      this.root = node;
    }
    while (currentNode) {
      if (currentNode.val > node.val) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        } else {
          currentNode = currentNode.left
        }
      }

      if (currentNode.val < node.val) {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        } else {
          currentNode = currentNode.right
        }
      }
    }
}


  search(val) {
    let curr = this.root;
    while (curr) {
      if (curr.val === val) return true;
      else if (curr.val > val) curr = curr.left;
      else if (curr.val < val) curr = curr.right;
    }
    return false;  
    
}


  preOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;

    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode === null) return;
    
    this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);

    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return 

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queu = [this.root];
     while (queu.length) {
      let node = queu.shift();
      console.log(node.val);

      if (node.left) queu.push(node.left);
      if (node.right) queu.push(node.right);
     }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();
      console.log(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };

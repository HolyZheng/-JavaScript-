/**
 *        使用js实现一个二叉树。
 *        Tree        构造函数
 *        traverseDF  深度优先遍历
 *        traverseBF  广度优先遍历
 *        insert      插入
 *        inOrderTraverse中序遍历
 *        preOrderTraverse前序遍历
 *        postOderTraverse后序遍历
 */

function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function Tree () {
    this._root;
}

/**
 *    深度优先遍历，先查看左孩子是否存在，若存在，传入recurse递归，
 *    否则，再查看右孩子。若都不存在，对该节点执行callback操作。
 */
Tree.prototype.traverseDF = function (callback) {
    (function recurse (currentNode) {
        if (currentNode.left) {
            recurse(currentNode.left);
        }
        if (currentNode.right) {
            recurse(currentNode.right);
        }
        callback(currentNode);
    })(this._root);
}

/**
 *    宽度优先遍历借助队列来实现。
 */

Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();
    if (!this._root) {
        console.log("This tree is empty! ");
        return;
    }
    queue.enqueue(this._root);
    var currentNode = queue.dequeue();
    while (currentNode) {
        if (currentNode.left) {
            queue.enqueue(currentNode.left);
        }
        if (currentNode.right) {
            queue.enqueue(currentNode.right);
        }
        callback(currentNode);
        currentNode = queue.dequeue();
    }
}

/**
 *     插入节点用到了宽度优先遍历的思想
 */

Tree.prototype.insert = function (data) {
    var node = new Node(data);
    var message = {
        success: "Inserted successfully!",
    }
    if (!this._root) {
        this._root = node;
        return;
    }
    var queue = new Queue();
    queue.enqueue(this._root);
    var currentNode = queue.dequeue();
    while (currentNode) {
        if (currentNode.left) {
            queue.enqueue(currentNode.left);
        } else {
            currentNode.left = node;
            console.log(message.success);
            return;
        }
        if (currentNode.right) {
            queue.enqueue(currentNode.right);
        } else {
            currentNode.right = node;
            console.log(message.success);
            return;
        } 
        currentNode = queue.dequeue();
    }
}


/**
 *     中序遍历
 */
Tree.prototype.forInOrder = function (node) {
    if (node) {
        this.forInOrder(node.left);
        console.log(node.data);
        this.forInOrder(node.right);
    }
}
/**  非递归中序遍历
 *   借助一个栈，先沿着左子树到叶节点，依次入栈，
 * 再出栈遍历，对该栈顶节点的右子树进行统一的操作
 */

Tree.prototype.inOrder = function (callback) {
    var currentNode = null;
    if (this._root) {
      currentNode = this._root;
    } else {
      return;
    }
    var stack = [];
    do {
      while (currentNode != null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      if (stack.length) {
        currentNode = stack.pop();
        callback(currentNode);
        currentNode = currentNode.right;
      }
    } while (currentNode !== null || stack.length)
  }

Tree.prototype.inOrderTraverse = function () {
    this.forInOrder(this._root);
}

/**
 *    前序遍历
 */
Tree.prototype.forPreOrder = function (node) {
    if (node) {
        console.log(node.data);
        this.forPreOrder(node.left);
        this.forPreOrder(node.right);
    }
}

Tree.prototype.preOrderTraverse = function () {
    this.forPreOrder(this._root);
}

/** 非递归前序遍历
 *  算法关键思想是用栈为右子树预留位置。
 *  可以利用数组作为一个栈。
 */
Tree.prototype.preOrder = function (callback) {
    var currentNode = null;
    if (this._root) {
      currentNode = this._root;
    } else {
      return;
    }
    var stack = [];
    while (currentNode) {
      callback(currentNode);
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop();
      }
    }
  }

/**
 *    后序遍历
 */
Tree.prototype.forPostOrder = function (node) {
    if (node) {
        this.forPostOrder(node.left);
        this.forPostOrder(node.right);
        console.log(node.data);
    }
}

Tree.prototype.postOderTraverse = function () {
    this.forPostOrder(this._root);
}



function Queue () {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.enqueue = function (data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
}

Queue.prototype.dequeue = function () {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        return deletedData;
    }
    return null;
}

// es6写法
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseDf() {
        (function recurse(currentNode) {
            if (currentNode.left) {
                recurse(currentNode.left);
            }
            if (currentNode.right) {
                recurse(currentNode.right);
            }
            currentNode && console.log(currentNode);
        })(this.root);
    }
    traverseBf() {
        let queue = [];
        if (!this.root) return;
        queue.push(this.root);
        let currentNode = queue.shift();
        while (currentNode) {
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            console.log(currentNode);
            currentNode = queue.shift();
        }
    }
    insert(data) {
        let node = new Node(data);
        let queue = [];
        if (!this.root) {
            this.root = node;
            return;
        }
        queue.push(this.root);
        let currentNode = queue.shift();
        while (currentNode) {
            if (currentNode.left) {
                queue.push(currentNode.left);
            } else {
                currentNode.left = node;
                console.log('insert success!');
                return;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            } else {
                currentNode.right = node;
                console.log('insert success!');
                return;
            }
            currentNode = queue.shift();
        }
    }
    // 递归中序遍历
    forInOrder(node = this.root) {
        if (node) {
            this.forInOrder(node.left);
            console.log(node);
            this.forInOrder(node.right);
        }
    }
    // 非递归中序遍历
    inOrder() {
        let currentNode = null;
        if (this._root) {
            currentNode = this._root;
        } else {
            return;
        }
        let stack = [];
        do {
            while (currentNode !== null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }
            if (stack.length) {
                currentNode = stack.pop();
                console.log(currentNode);
                currentNode = currentNode.right;
            }
        } while (currentNode || stack.length);
    }
    // 前序遍历递归
    forPreOrder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.forPreOrder(node.left);
            this.forPreOrder(node.right);
        }
    }
    // 前序遍历非递归
    PreOrder() {
        let currentNode = null;
        if (this.root) {
            currentNode = this.root;
        } else {
            return;
        }
        let stack = [];
        while (currentNode) {
            console.log(currentNode);
            if (currentNode.right) {
                stack.push(currentNode.right);
            }
            if (currentNode.left) {
                currentNode = currentNode.left;
            } else {
                currentNode = stack.pop();
            }
        }
    }
    // 后续遍历递归
    forPostOrder(node) {
        if (node) {
            this.forPostOrder(node.left);
            this.forPostOrder(node.right);
            this.forPostOrder(node.data);
        }
    }
}

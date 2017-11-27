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

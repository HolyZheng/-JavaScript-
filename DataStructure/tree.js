/**
 *        使用js实现一个二叉树。
 *        traverseDF深度优先遍历
 *        traverseBF广度优先搜索
 *        insert插入
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


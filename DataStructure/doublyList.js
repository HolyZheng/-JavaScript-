/**
 *         使用javascript实现一个双向链表
 *         具有add、searchNode、remove三个方法
 */
function Node (value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

function DoublyList () {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

DoublyList.prototype.add = function (value) {
    var node = new Node(value);
    if(this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this._length++;
    return node;
}

DoublyList.prototype.searchNode = function (position) {
    var currentNode = this.head,
        length = this._length,
        message = {failure: "Failure: non-existent node in this list"};
    if(length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
    for (var i = 1; i < position; i++) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

DoublyList.prototype.remove = function (position) {
    var currentNode = this.head,
        length = this._length,
        message = {failure: "Failure: non-existent node in this list"},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        afterNodeToDelete = null;
    
    //1st: 位置position非法
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    //2nd 位置为第一个节点
    if (position === 1) {
        nodeToDelete = this.head;
        this.head = currentNode.next;
        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }
    //3rd 位置为最后一个节点
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    //4th 位置为其他节点
    } else {
        for (var i = 1; i < position; i++) {
            currentNode = currentNode.next;
        }
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
    }
    this._length--;
    return nodeToDelete;
}


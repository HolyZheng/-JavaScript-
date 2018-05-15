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

// es6写法
class Node {
    constructor (val) {
      this.data = val;
      this.previous = null;
      this.next = null;
    }
  }
  
  class DoublyList {
    constructor () {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    add (data) {
      let node = new Node(data);
      if (this.length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      } else {
        this.head = node;
        this.tail = node;
      }
      this.length++;
      return node;
    }
    searchNode (position) {
      let currentNode = this.head;
      if (this.length === 0 || position < 1 || position > this.length) {
        throw new Error('position error');
      }
  
      for (let i = 1; i < position; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    remove (position) {
      let currentNode = this.head;
      let beforeNodeToDelete = null;
      let nodeToDelete = null;
      let afterNodeDelete = null;
  
      if (this.length === 0 || position < 1 || position > length) {
        throw new Error('position wrong');
      }
      if (position === 1) {
        nodeToDelete = this.head;
        this.head = currentNode.next;
        if (this.head) {
          this.head.previous = null;
        } else {
          this.tail = null;
        }
      } else if (position === this.length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        for (let i = 1; i < position; i++) {
          currentNode = currentNode.next;
        }
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeDelete = currentNode.next;
  
        beforeNodeToDelete.next = afterNodeDelete;
        afterNodeDelete.previous = beforeNodeToDelete;
      }
      this.length--;
      return nodeToDelete;
    }
}


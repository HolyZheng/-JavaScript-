/**
 *       使用javascript实现一个栈
 *       具有push、pop、show三个方法
 */
function Stack () {
    this._size = 0;
    this._storage = {};
}


Stack.prototype.push = function (data) {
    var size = ++this._size;
    this._storage[size] = data;
}

Stack.prototype.pop = function () {
    var size = this._size; //指向栈头
    var deletedData;
    if (size) {
        deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;
        return deletedData;
    }
}

Stack.prototype.show = function () {
    var len = 1;
    while (len <= this._size) {
        console.log(this._storage[len]);
        len++;
    }
}

// es6 写法
class Stack {
    constructor () {
      this._size = 0;
      this._storage = {};
    }
    push (data) {
      let size = ++this._size;
      this._storage[size] = data;
    }
    pop () {
      if (this._size) {
        let deleteData = this._storage[this._size];
        delete this._storage[this._size];
        return deleteData;
      }
    }
    show () {
      console.log(this._storage);
    }
}

// 借助数组
class Stack {
    constructor () {
      this._storage = [];
    }
    push (data) {
      this._storage.push(data);
    }
    pop () {
      if (this._storage.length) {
        return this._storage.pop();
      }
    }
    show () {
      console.log(this._storage);
    }
}

var stackA = new Stack();

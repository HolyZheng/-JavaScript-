/**
 *       使用javascript实现一个队列
 *       具有enqueue、dequeue、show三个方法
 */
function Queue () {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function () {
    return this._newestIndex - this._oldestIndex;
}

Queue.prototype.enqueue = function (data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
}

Queue.prototype.dequeue = function () {
    var oldestIndex = this._oldestIndex,  //记录队头位置
        newestIndex = this._newestIndex,  //记录队尾位置
        deletedData;                      //记录要删除的数据，并返回。
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        return deletedData;
    }
    return;
}

Queue.prototype.show = function () {
    console.log(this._storage);
}

// es6 写法
class Queue {
    constructor () {
        this._oldestIndex = 1;
        this._newestIndex = 1;
        this._storage = {};
    }
    size () {
        return this._newestIndex - this._oldestIndex;
    }
    enqueue (data) {
        this._storage[this._newestIndex] = data;
        this._newestIndex++;
    }
    dequeue () {
        let deleteData;
        if (this._oldestIndex !== this._newestIndex) {
        deleteData = this._storage[this._oldestIndex];
        delete this._storage[this._oldestIndex++];
        return deleteData;
        }
    }
    show () {
        console.log(this._storage);
    }
}

// 也可以借助数组
class Queue {
    constructor () {
      this._storage = [];
    }
    size () {
      return this._storage.length;
    }
    enqueue (data) {
      this._storage.push(data);
    }
    dequeue () {
      if (this._storage.length) {
        let deleteData = this._storage.shift();
        return deleteData;
      }
    }
    show () {
      console.log(this._storage);
    }
}

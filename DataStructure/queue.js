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
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
    }
}

Queue.prototype.show = function () {
    console.log(this._storage);
}


var queueA = new Queue();
queueA.enqueue(1);
queueA.enqueue(2);
queueA.enqueue(3);
queueA.enqueue(4);
queueA.show();
queueA.dequeue();
console.log("一个数据出队后：")
queueA.show();
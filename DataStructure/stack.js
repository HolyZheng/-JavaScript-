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

var stackA = new Stack();

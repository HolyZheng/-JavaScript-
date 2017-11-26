//实现一个栈
function Stack () {
    this._size = 0;
    this._storage = {};
}


Stack.prototype.push = function (data) {
    var size = ++this._size;
    this._storage[size] = data;
}

Stack.prototype.pop = function () {
    var size = this._size;
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

stackA.push(1);
stackA.push(2);
stackA.show();
console.log(stackA.pop() + "出栈,剩下：");
stackA.show();
/*
    1、2
    2出栈剩下：
    1
*/ 

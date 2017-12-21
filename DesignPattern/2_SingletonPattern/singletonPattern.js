var oldestMan = function (name) {
    this.name = name;
}

oldestMan.prototype.getName = function () {
    console.log(this.name);
}
//引入一个代理函数和闭包的概念
var createOldestMan = (function () {
    var instance;
    return function (name) {
        if (!instance) {
            instance = new oldestMan(name);
        }
        return instance;
    }
})();

var personA = createOldestMan("holz");
var personB = createOldestMan("Amy");
personA.getName();
personB.getName();

//一个通用的代理函数
var singleObj;
var getSingleton = function (fn) {
    return function (text) {
        if (!singleObj) {
            singleObj = new fn (text);
        }
        return singleObj;
    }
}

var person_1 = getSingleton(oldestMan)("holz");
var person_2 = getSingleton(oldestMan)("tom");
person_1.getName();
person_2.getName();
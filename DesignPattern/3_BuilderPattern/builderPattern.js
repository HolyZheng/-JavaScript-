/**
 * 产品类：car 目前需要构建一辆车。
 */

function car () {
    this.name = '',
    this.number = '',
    this.wheel = '',
    this.engine = ''
}


/* 
*    建造者类，里面有专门负责各个部分的工人
*/
function carBuilder () {
    this.nameBuilder = function () {
        this.name = '很厉害的车'
    },
    this.numberBuilder = function () {
        this.number = '88888888'
    },
    this.wheelBuilder = function () {
        this.wheel =  '高级橡胶做的轮子'
    },
    this.engineBuilder = function () {
        this.engine =  '很厉害的引擎'
    },
    this.getCar = function () {
        var Car = new car()
        Car.name = this.name;
        Car.number= this.number;
        Car.wheel = this.wheel;
        Car.engine = this.engine;
        return Car;
    }
}

/**
 *   指挥者类，指挥各个部分的工人工作
 */
function director () {
    this.action = function (builder) {
        builder.nameBuilder();
        builder.numberBuilder();
        builder.wheelBuilder();
        builder.engineBuilder();
    } 
}

/**
 *    使用方法
 */

var builder = new carBuilder();
var director = new director();
director.action(builder);
var Car = builder.getCar();
console.log(Car);
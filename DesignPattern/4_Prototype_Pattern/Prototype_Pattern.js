var someCar = {
  drive: function () { },
  name: '马自达 3'
};

// 使用Object.create创建一个新车x
var anotherCar = Object.create(someCar);
anotherCar.name = '丰田佳美';

var vehicle = {
  getModel: function () {
    console.log('车辆的模具是：' + this.model);
  }
};

var car = Object.create(vehicle, {
  'id': {
    value: MY_GLOBAL.nextId(),
    enumerable: true
  },
  'model': {
    value: '福特',
    enumerable: true
  }
});

var vehiclePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },
  getModel: function () {
    console.log('车辆模具是：' + this.model);
  }
};


function vehicle(model) {
  function F() { };
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init(model);
  return f;
}

var car = vehicle('福特Escort');
car.getModel();
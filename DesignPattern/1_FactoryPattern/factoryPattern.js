//工厂模式很基础的的一个例子  
function createPerson (name,age) {  
    var person = new Object();  
    person.name = name;  
    person.age = age;  
    return person;  
  }  
    
  var Holz = createPerson ("Holz", "21");  
  console.log(Holz);  
  /* 
  { 
  age: "21", 
  name: "Holz" 
  } 
  */  
  var Tom = createPerson ("Tom", "7");  
  console.log(Tom);  
  /* 
  { 
  age: "7", 
  name: "Tom" 
  } 
  */


  //简单工厂模式。  
var simpleCreatePerson = function (type, person) {  
    return this[type](person);  
    }  
      
    simpleCreatePerson.prototype = {  
      student: function (person) {  
        var Astudent = new Object();  
        Astudent.name = person.name;  
        Astudent.age = person.age;  
        return Astudent;  
      },  
      teacher: function (person) {  
        var Ateacher = new Object();  
        Ateacher.name = person.name;  
        Ateacher.age = person.age;  
        return Ateacher;  
      }  
    }  
      
    var teacher = new simpleCreatePerson("teacher", {name:"郑老师", age:25 });  
    var student = new simpleCreatePerson("student", {name:"郑同学", age:21 });  
      
    console.log(teacher);  
    /* 
    this is a teacher 
    {name:"郑老师", age: 25} 
    */  
    console.log(student);  
    /* 
    this is a teacher 
    {name:"郑同学", age: 25} 
    */  


    var abstractCreatePerson = function () {};  
    abstractCreatePerson.prototype = {  
      selfIntroduction: function () {  
        throw new Error("请先实例化此方法！");  
      }  
    }  
      
    var student = Object.create(abstractCreatePerson.prototype);  
    student.selfIntroduction = function () {  
      console.log("I am a sutdent, my name is holz!");  
    }  
    student.selfIntroduction();  
    /* 
    I am a sutdent, my name is holz! 
    */  
    var teacher = Object.create(abstractCreatePerson.prototype);  
    teacher.selfIntroduction = function () {  
      console.log("I am a teacher, my name is xxxx!");  
    }  
    teacher.selfIntroduction();  
    /* 
    I am a teacher, my name is xxxx! 
    */  
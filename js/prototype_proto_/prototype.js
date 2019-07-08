// @ts-nocheck
function Person(){
    this.name = "azu";
    this.age = "18";
    this.sex = "男";
}

//给构造函数全局赋予一个公共方法
Person.prototype.getName = function(){
    return this.name;
}

let person = new Person();

//实例化后在原型上添加方法
// @ts-ignore
person.__proto__.getAge = function(){
    return this.age;
}

// 实例化的对象的__proto__和构造函数的prototype是一样的
person.__proto__ === Person.prototype;

// 实例化的对象的constructor和构造函数的prototype是一样的
person.constructor === Person.prototype


console.log(person.getAge());
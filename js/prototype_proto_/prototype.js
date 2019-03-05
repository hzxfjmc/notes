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
person.__proto__.getAge = function(){
    return this.age;
}
console.log(person.getAge());
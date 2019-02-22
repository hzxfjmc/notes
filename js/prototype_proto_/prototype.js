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
console.log(person.getName())
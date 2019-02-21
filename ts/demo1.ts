
//创建类
class UserInfo{
    info:string;
    constructor(public name,public age,public sex){
        this.info = `姓名：${name}年龄：${age}性别:${sex}`
    }
}

//定义数据接口
interface Person{
    name : String,
    age : String,
    sex : String
}

//实例化类
let user =  new UserInfo("azu","26","男");

//显示信息
function showInfo(person:Person){
    return `姓名：${person.name}年龄：${person.age}性别：${person.sex}`;
}
console.log(user);

document.body.innerHTML = showInfo(user);


let arr = {
    name:'azu',
    sex:'男',
    age:24
}
let arrCopy = arr;
arrCopy.age = 22;
/**
 * 浅拷贝 
 * 引用的数据类型的赋值就是栈内存地址的拷贝、所有arr与arrCopy使用的是相同的内存地址。指向的同一个堆内存内容
 * 浅拷贝只是增加了一个指针指向已经存在的内存。深拷贝就是增加一个指针并且申请一个新的内存，内存被改变不会影响到之前的数据。
 */
// console.log(arrCopy.age);  //22
// console.log(arr.age);  //22

/**
 * 只是深拷贝一层数组元素(有以下方法)
 * 1.for of
 * 2.Array.slice()
 * 3.Array.concat()
 * 4.es6扩展符 ...
 */
let arr1 = [1,2,3,4,5];
let arrCopy1 = [];
for(let item of arr1){
    arrCopy1.push(item);
}
arrCopy1[1] = 1;
// console.log(arr1)   //  [1,2,3,4,5]
// console.log(arrCopy1)   //  [1,1,3,4,5]

/**
 * 深拷贝一级对象
 * 对象含有二级以上的不适合使用
 * 1.Object.assign：用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target），并返回合并后的target
 *      用法： Object.assign(target, source1, source2); 所以 copyObj = Object.assign({}, obj); 这段代码将会把obj中的一级属性都拷贝到 ｛｝中，然后将其返回赋给copyObj
 * 2.es6扩展符
 * 3.JSON.parse(JSON.stringify(Object))
 */
let obj = {
    name:"azu",
    job:"前端工程师",
    hobby:{
        name:"azu",
        job:"前端工程师",
        hobby:{
            name:"篮球",
            name1:"足球"
        }
    }
}

let CopyObj = {};
// for(let i in obj){
//     CopyObj[i] = obj;
// }


/**
 * assign 
 * es.5
 */
CopyObj = Object.assign({},obj);
// console.log(obj);
// console.log(CopyObj);
/**
 * ...运算符
 */
CopyObj = {...obj};
// console.log(obj)
// console.log(CopyObj);


/**
 * 深拷贝多层次数组 或者对象
 */
function deepCopy(initObj,copyObj){
    let obj = copyObj || {};
    for(let i in initObj){
        let prop = initObj[i];     // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
       if(typeof prop === "object"){
           obj[i] = (prop.constructor === Array) ? [] : {}
           arguments.callee(prop,obj[i]);
       }else{
           obj[i] = prop;
       }
    } 
    return obj;
}
let str ={}
deepCopy(obj,str);
// str.hobby.hobby.name = "213";
// console.log(obj);
// console.log(str);


function deepCopy1(soure){
    if(!soure) return soure;
    let target = Array.isArray(soure) ? [] : {};
    for(let i in soure){
        if(Object.prototype.hasOwnProperty.call(soure,i)){  // Object.prototype.hasOwnProperty.call(soure,i) 等价于 soure.hasOwnProperty(i)l
            if(typeof soure === 'object'){
                target[i] = deepCopy1(soure[i])
            }else{
                target[i] = soure[i];
            }
        }
    }
}
let demo8 = [{a:213,b:{a:213}},{a:214,b:{a:214}},{a:215,b:{a:215}}];
let demo9 = [];
deepCopy(demo8,demo9);
// console.log(demo8);
// demo9[0].b.a="azu";
// console.log(demo9);
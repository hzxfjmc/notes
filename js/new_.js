// @ts-nocheck
//js实现一个new关键字
function new_(){
  let obj = new Object();
  let fn = [].shift.call(arguments); //第一个参数函数
  // @ts-ignore
  obj.__proto__ = fn.prototype;
  let result = fn.apply(obj,arguments);
  return typeof result === 'object' ? result : obj;
}

function person(name,age){
  this.name = name;
  this.age = age;
}
//new_(person,'azu',23);

//感觉这种更好理解
function _new(func){
  return function(){
    let obj = {
      __proto__:func.prototype
    }
    func.call(obj,...arguments);
    return obj;
  }
}
_new(person)('azu',23)
//深拷贝
function deepClone(souce){
  if(!souce) return souce;
  let obj = Array.isArray(souce) ? [] : {};
  for(let i in souce){
    if(Object.prototype.hasOwnProperty.call(souce,i)){ //等价于 souce.hasOwnProperty(souce[i])
      if(typeof souce[i] === 'object'){
        obj[i] = deepClone(souce[i]);
      }else{
        obj[i] = souce[i];
      }
    }
  }
  return obj;
}

//js 动态生成一个instanceof
function instance_(l,r){
  let l1 = l.prototype;
  let r1 = r.__proto__;
  while(true){
    if(l1 === null) return false;
    if(l1 === r1) return true;
    r1 = r.__proto__;
  }
}

//贪心算法
function greedyAlg(souce){
  let target = souce;
  this.getResult = function(result){
    let res = [];
    let total = 0;
    for(let i = souce.length;i>=0;i--){
      let coin = target[i];
      while(total+coin <= result){
        res.push(coin);
        total += coin;
      }
    }
    return res;
  }
}

var mcoinChange = new greedyAlg([1,5,10,25]);



//防抖
function debounce(func,delay){
  let timer = null; 
  return function(){
     let context = this;
     let args = arguments;
     clearTimeout(timer);
     timer = setTimeout(() => {
      func.apply(context,args)
    }, delay);
    }
}

//节流
function throttle(func,wait){
  let previous = Date.now();
  return function(){
    let now = Date.now();
    let context = this;
    let args = arguments;
    if(now - previous >= wait){
      func.apply(context,args);
      previous = Date.now();
    }
  }
}


//100块钱分给10个人最多不能低于6块，最高不能高于12块

function cash(total,num) {
  var luckboy = [];
  while(num > 0){
      var newNum = Math.floor(Math.random()*600)/100 + 6;
      if((total - newNum)/num>6 && (total - newNum)/num<12){
          total = total - newNum;
          luckboy.push(newNum);
          num--;
      }
  }
  return luckboy;
}
cash(100,12)


//js实现一个call函数
Function.prototype.mycall = function(context){
  if(typeof this != 'function'){
    throw new TypeError('error')
  }
  context = context || window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

//js实现一个apply方式
Function.prototype.myapply = function(context){
  if(typeof this != 'function'){
    throw new TypeError('error')
  }
  context = context || window;
  context.fn = this;
  let result;
  if(arguments[1]){
    result = context.fn(...arguments[1])
  }else{
    result = context.fn();
  }
  delete context.fn;
  return result;
}


//js实现一个bind方法
Function.prototype.mybind = function(context){
  if(typeof this != 'function'){
    throw new TypeError('error')
  }
  let this_ = this;
  let args = [...arguments].slice(1);
  return function Func(){
    if(this instanceof Func){
      return this_(...args,...arguments);
    }else{
      return this_.apply(context,args.concat(...arguments));
    }
  }
}
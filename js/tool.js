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
console.time('start');
cash(100,12)
console.timeEnd('start')


function cash(){
  var totle1 = 0;
  var arr = [];
    for(var i =0;i<9;i++ ){
      arr.push(Number((Math.random()*6).toFixed(2))+6);
    }
    totle1 = arr.reduce((prev,next)=>{
      return prev+next;
    })
    if(totle1 >94 || totle1 < 88) return cash();
    arr.push(100 - totle1)
    return arr;
  }

cash()


//分类
function computedCount(){
  let arr2 = [];
  let arr = ["煤","米","水","煤","米"];
  arr.sort();
  for(let i = 0;i<arr.length;){
    let count = 0;
   for(let j=i;j<arr.length;j++){
     if(arr[i] == arr[j]){
       count++;
     }
   } 
   arr2.push({
     name:arr[i],
     count :count
   })
   i += count;
  }
  console.log(arr2);
  return arr2;
}
computedCount();
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


//rem转换
function setRem(){
  let width = document.documentElement.getClientRects().width;
  let rem = width/75;  //设计稿按750的设计稿来定
  document.documentElement = rem + 'px';
}
// addEventListener('resize',setRem)


//冒泡算法
function bubble(){
  let arr = [1,2,4,432,43,2,2,423,543];
  for(let i=0;i<arr.length-1;i++){
    for(let j = 0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
bubble()


// '1,2,3,5,7,8,10'
const nums1 = [1, 2, 3,5, 7, 8, 10];
function simplifyStr(num) {
  var result = [];
  var temp = num[0]
  num.forEach((value, index) => {
    if (value + 1 !== num[index + 1]) {
      if (temp !== value) {
        result.push(`${temp}~${value}`)
      } else {
        result.push(`${value}`)
      }
      temp = num[index + 1]
    }
  })
  return result;
}
console.log(simplifyStr(nums1).join(','))
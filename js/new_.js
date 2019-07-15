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

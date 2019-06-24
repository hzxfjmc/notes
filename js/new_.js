// @ts-nocheck
//js实现一个new关键字
function new_(){
  let obj = new Object();
  let fn = [].shift.call(arguments);
  // @ts-ignore
  obj.__proto__ = fn.prototype;
  let result = fn.apply(obj,arguments);
  return typeof result === 'object' ? result : obj;
}

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
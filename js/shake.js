function debounce(func,wait,immediate){
  let timeout;
  return function(){
    let context = this;
    let args = arguments;
    if(timeout) clearTimeout(timeout);
    if(immediate){
      var callNow = !timeout;
      timeout = setTimeout(()=>{
        timeout = null;
      },wait)
      if(callNow) func.apply(context,args);
    }else{
      timeout = setTimeout(()=>{
        func.apply(context,args);
      },wait)
    }
  }
}

/**
 * @description 动态实现一个new
 * @param {func args}
 * @retrun Object
 */
function new_(){
  let obj = {};
  let Construtor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Construtor.prototype;
  Construtor.apply(obj,arguments)
  return obj
}

function test(name,age){
    this.name = name;
    this.age = age;
}

let obj = new_(test,'a',21)
console.log(obj)
function debounce(func,wait,immediate){
  let timeout;
  console.log(arguments);
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
function new_(func,...args){
  let obj = {};
  obj.proto = func.prototype; //
  // obj.construtor = fn.prototype
  func.apply(obj,args)
  return Object.prototype.toString.call(obj) == '[object Object]' ? obj : {};
}
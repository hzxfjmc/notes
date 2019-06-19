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

function func(){
  for(let i = 0;i<100;i++){
    console.log(i);
  }
}

console.log(Date.now());
debounce(func,1000,true);
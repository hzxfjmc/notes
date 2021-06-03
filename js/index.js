Function.prototype.mybind = function(context){
    if(typeof this != 'Function'){
        return new TypeError('error')
    }
    let this_ = this;
    let args = [...arguments].slice(1)
    return function func(){
        if(this instanceof func){
            return this_(...args,...arguments)
        }else{
            return this_.apply(context,args.concat(...arguments))
        }
    }
}


function deepCopy(souce){
    if(!souce){
        return souce
    }
    let obj = Array.isArray(souce)?[]:{}
    for(let i in souce){
        if(souce.hasOwnProperty(i)){
            if(typeof souce[i] === 'object'){
                 obj[i] = deepCopy(souce[i])
            }else{
                 obj[i] = souce[i]
            } 
        }
    }
    console.log(obj)
    return obj
}

deepCopy({a:[1,2],v:3})


Function.prototype.myCall=function(context){
    if(typeof this != 'Function'){
        return new TypeError('...')
    }
     context = context || window
     context.fn = this;
     let args = [...argument].slice(1)
     let result = context.fn(...args)
     delete context.fn
     return result
}

Function.prototype.myapply=function(context) {
    if(typeof this != 'Function') return new TypeError('...')
    context = context || window
    context.fn = this;
    let result;
    if(arguments[1]){
       result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }
    delete context.fn;
    return result
}


function new_(){
    let obj = {}
    let fn = [].shift.call(arguments)
    obj.__proto__ = fn.prototype
    let result = fn.apply(obj,arguments)
    return typeof result === 'object' ? result : obj 
}

function new_(){
    let obj = new Object()
    let func =  [].shift.call(arguments)
    obj.__proto__ = func.prototype
    let result = func.apply(obj,arguments)
    return typeof result === 'object' ? result : obj
} 


Function.prototype.mycall1 = function(context){
    context = context || window
    context.fn = this;
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result
}
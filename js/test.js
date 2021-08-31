let that = this;
function newPromise(fn){
    this.status = 'pedding'
    this.resolveParams = ''
    this.rejectParams = ''
    this.init()
    fn(this.resolve,this.reject)
}

newPromise.prototype = {
    constructor:newPromise,
    init:function(){
        that = newPromise.prototype
    },
    resolve:function(params){
        that.resolveParams = params;
        that.status  = 'pedding'
    },
    reject:function(params){
        that.rejectParams = params;
        that.status = 'pedding'
    },
    then:function(fn){
        if(that.resolveParams && that.status === 'pedding'){
            fn(that.resolveParams)
            that.rejectParams = '';
            that.status = 'resolve'
        }
        return new newPromise(()=>{})
    },
    catch:function(fn){
        if(that.rejectParams && that.status === 'pedding'){
            fn(that.rejectParams)
            that.rejectParams = '';
            that.status = 'reject'
        }
    }
}

Function.prototype.myapply = function(context){
    if(typeof this != 'function'){
        return new TypeError()
    }
    let context = context || window;
    context.fn = this;
    let result
    if(arguments[1]){
       result = context.fn(...arguments)
    }else{
       result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myCall = function(context) {
    if(typeof this != 'function'){
        return new TypeError()
    }
    let context = context || window
    context.fn = this;
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result

}

Function.prototype.myBind = function(context){
    let args = [...arguments].slice(1)
    let that = this;
    return function func(){
        if(this instanceof func){
           return that(...args,...arguments)
        }else{
            return that.apply(context,args.concat(...arguments))
        }
    }

}




function SuperType(){        
    this.property = true;   
}    
SuperType.prototype.getSupValue = function(){        
    return this.property    
}    
function SubType(){        
    this.subProperty = false   
}    
SubType.prototype = new SuperType()    
// SubType.prototype.getSubValue = function(){    
    //     return this.property    
    // }   
let instance = new SubType()    
console.log(instance.getSubValue())
let that = this;
function newPromise(fn){
    this.status = 'pending';
    this.resolveParams = ''; //存resolve参数
    this.rejectParams = '';  //存reject参数
    this.init();
    fn(this.resolve,this.reject);
}

newPromise.prototype = {
    constructor:newPromise,
    init:function(){
       that = newPromise.prototype
    },
    resolve:function(params){
        that.resolveParams = params;
        that.status = 'pending';
    },
    reject:function(params){
        that.rejectParams = params;
        that.status = 'pending'
    },
    then:function(fn_){
        if(that.resolveParams && that.status == 'pending'){
            fn_(that.resolveParams);
            that.resolveParams = '';
            that.status = 'resolve';
        }
        return new newPromise(()=>{})
    },
    catch:function(fn_){
        if(that.rejectParams && that.status == 'pending'){
            fn(that.rejectParams);
            that.rejectParams = '';
            that.status = 'reject';
        }
    }
}


//test case
function testNewPromise(status){
    return new newPromise((resolve,reject)=>{
        if(status == 200){
            console.log(123);
            resolve('成功')
            setTimeout(()=>{
                console.log(1);
            },1000)
        }else{
            reject('失败')
        }
    }).then(()=>{
        console.log(300);
    })
}

testNewPromise(300)
# apply、call、bind的区别
一文来讲解一下apply、call、bind之间的区别以及怎么样去使用。


# Navigator

[apply](#apply)

[call](#call)

[bind](#bind)


## apply
通过apply方法，能够编写用于不同对象的方法
因为apply可以改变this的指向从而改变函数里的变量

``` javascript

    let person = {
        fullName:function(){
            return `my name is ${this.name} + age: ${this.age}`
        },
    }

    let userInfo = {
        name:'azu',
        age:26
    }

    person.fullName.apply(userInfo)

```

apply其实本义上来说与call方法是一样的，其差别就是传入的参数不一样。

### apply的实现
首先我们要知道apply的工作原理是什么
apply是通过在Function原型上添加一个方法来绑定this指向
apply的参数是通过函数传参如果没有参数默认指向window

``` javascript 

    Function.prototype.myApply = function(context){
        if(typeof this != 'Function') return new TypeError('类型错误')
        let context = context || window;
        context.fn = this
        let result;
        if(arguments[1]){
           result = context.fn(...arguments[1])
        }else{
           result = context.fn()
        }
        delete context.fn 
    }

```


## call
call的原理和aply的工作原理是差不多的
与apply的区别在于接受的是一个参数列表，而apply方法接受的是一个或者包含多个参数的数组
第一个参数默认都是this

``` javascript

   function Product(name,price){
       this.name = name;
       this.price = price
   }

    function food(name,price){
        Product.call(this,name,price)
    }

    console.log(new food('apple',6800).name)

```

### call的实现
首先call的原理和apply的原理是非常相似的只是在参数上的区别。所以我们知道了apply的实现是很容易就能写出call的实现


``` javascript

    Function.prototype.myCall = function(context){
        if(typeof this != 'Function') return new TypeError('type error')
        let context = context || window
        context.fn = this;
        let args = [...arguments].slice(1)
        let result = context.fn(...args)
        delete context.fn
        return result
    }

```
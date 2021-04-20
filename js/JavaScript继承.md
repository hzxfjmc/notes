# JavaScript继承

    在面试中总是离开被问到JavaScript继承的问题，这一篇文章来作一个总结，来总结JavaScript中各种继承的问题以及各种继承方式的优势和劣势

# Navigator

[原型继承](#原型继承)

[组合继承](#组合继承)

[寄生类继承](#寄生类继承)

[寄生组合式继承](#寄生组合式继承)

[Class继承](#Class继承)

### 原型继承

#### 实现原型链的继承模式

``` javascript

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

    SubType.prototype.getSubValue = function(){
        return this.property
    }

    let instance = new SubType()
    console.log(instance.getSubValue)

``` 
例子中的实例及构造函数和原型之间的关系图：

![](https://raw.githubusercontent.com/LuckyWinty/blog/master/markdown/JavaScript/911587-20160905112633676-1649202219.png)

在上述例子代码中，定义了两个对象，SuperType和SubType，两个对象之间实现了继承，而这种继承方式是通过创建SuperType的实例赋值给SubType.prototype来实现的，实现的本质是重写了原型对象




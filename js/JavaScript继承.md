# JavaScript继承

    在面试中总是离开被问到JavaScript继承的问题，这一篇文章来作一个总结，来总结JavaScript中各种继承的问题以及各种继承方式的优势和劣势

# Navigator

[原型继承](#原型继承)

[构造函数继承](#构造函数继承)

[组合继承](#组合继承)

[寄生类继承](#寄生类继承)

[寄生组合式继承](#寄生组合式继承)

[Class继承](#Class继承)

## 原型继承

### 实现原型链的继承模式

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

### 原型继承的优缺点
优点

    能通过instanceOf和isProtoTypeOf的检测

缺点

    1、没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。
    2、子类要在继承后定义新方法，在继承之前定义的方法会被实例化替换掉。
    3、不能使用对象字面量创建原型方法

##  构造函数继承

构造函数继承本质上是：在子类构造函数的内部调用超类型构造函数

``` javascript

    function SuperType(){
        this.colors = ['red','blue','green']
    }

    function SubType(){
        SuperType.call(this)
    }

    let instance1 = new SubType()
    instance1.colors.push('black')  
    console.log(instance1)   // red blue green black
    let instance2 = new SubType()
    console.log(instance2)  // red blue green

```
### 基本实现思路

本质上是利用call或者apply把父类中通过this指定的属性和方法复制到子类创建的实例中，因为this对象是在运行的时候基于函数的知性环境来绑定的，也是就是说，在全局环境中，this等于window。当某个对象调用方法的时候，this等同于那个对象。call、apply方法可以用来代替另外一个对象调用一个方法，call、apply方法可将一个函数的对象上下文从初始化的上下文改变指向新对象

所以，这个借用构造函数就是，new对象的时候(注意，new操作符与直接调用是不同的，以函数的方式直接调用的时候，this指向window，new创建的时候，this指向创建的这个实例)，创建了一个新的实例对象，并且执行SubType里面的代码，而SubType里面用call调用了SuperTyep，也就是说把this指向改成了指向新的实例，所以就会把SuperType里面的this相关属性和方法赋值到新的实例上，而不是赋值到SupType上面。所有实例中就拥有了父类定义的这些this的属性和方法。

### 优势
相对于原型链而言，构造函数继承有一个很大的优势，就是可以向父类构造函数传递参数，因为属性是绑定在this上面，调用的时候才赋到相对应的实例中，所以各个实例之间不会互相影响

``` javascript

    function SuperType(name){
        this.name = name
    }

    function SubType(){
        SuperType.call(this,'azu')
        this.age = 26
    }

    let instance = new SubType()
    console.log(instance.name)  // azu
    console.log(instance.age)  //26

```
### 劣势
如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言也是不可见的。所有的方法只能在构造函数中去定义，很不方便。不能继承原型链的方法

``` javascript

    function SuperType(name){
        this.name = name
        this.getName=function(){
            return this.name
        }
    }

    SuperType.prototype.getName = function(){
        return this.name
    }
    function SubType(){
        SuperType.call(this,'azu')
        this.age = 26
    }

    let instance = new SubType()
    console.log(instance.getName())  // instance.getName is not a function

```

## 组合继承
组合继承也叫伪经典继承。是将原型继承和构造函数继承技术组合到一起，发挥两中继承方式的有点组合的一种继承方式。

顾名思义就是使用原型链对原型属性和方法的继承，而通过构造函数来实现对实例属性的继承，这样既通过原型上定义的方法实现了函数复用，又能够保证每个实例都有它自己的属性

``` javascript

    function SuperType(name){
        this.name = name
        this.colors = ['res','blue','green']
    }

    SuperType.prototype.getName = function(){
        return this.name
    }

    function SubType(name,age){
        SuperType.call(this,name)
        this.age = age
    }

    SubType.prototype = new SuperType()
    SubType.prototype.constructor = SubType
    SubType.prototype.sayAge = function(){
        console.log(this.age);
    };

    var instance1 = new SubType("azu", 26);
    instance1.colors.push("black");
    console.log(instance1.colors); //"red,blue,green,black"
    instance1.getName(); //"azu";
    instance1.sayAge(); //26

    var instance2 = new SubType("lxj", 22);
    console.log(instance2.colors); //"red,blue,green"
    instance2.getName(); //"lxj";
    instance2.sayAge(); //22

```

### 优势
组合继承避免了原型链和构造函数的继承的缺陷，融合了两者的优点，所以组合继承成为大家常用的继承方式

### 劣势
组合继承最大的问题是无论什么情况下，都要调用两次超类型函数：一次是函数在创建子函数的时候，一次是函数在子类型构造函数的内部。虽然子类型最终会包含超类型对象的全部实例属性，但我们不得不在调用子类型构造函数时重写这些属性


## 寄生类组合

### 原型师继承
原理就是借助原型，可以基于已有的对象创建新对象。节省了创建自定义类型这一步

``` JavaScript

    function object(o){
        function craete(){}
        create.prototype = o;
        return new create()
    }

```
以上代码实现了了Object.create
ES5新增了Object.create()方法规范化了原型式继承。即调用方法为：Object.create(o);

#### 适用场景
只想让一个对象跟另一个对象建立继承这种关系的时候，可以用Object.create();这个方法，不兼容的时候，则手动添加该方法来兼容。

### 寄生式继承
寄生式继承是原型式继承的加强版

``` JavaScript

    function CreateObject(obj){
        let clone = Object.create(obj) // or clone = object(obj)
        clone.say = function(){
            console.log('hellow world')
        }
        return clone
    }

```
即在产生了这个继承了父类的对象之后，为这个对象添加一些增强方法。

### 寄生组合式继承
实质上，寄生组合继承是寄生式继承的加强版。这也是为了避免组合继承中无可避免的要调用两次父类构造函数的最佳方案，所以，开发人员普遍认为寄生组合式继承是引用类型最理想的继承方式

#### 基本写法

``` JavaScript

    function inheritPrototype(SubType,SuperType){
        let prototype = Object.create(SuperType)
        prototype.constructor = SubType
        SubType.prototype = prototype
    }

```

### 兼容写法

``` JavaScript

    function object(o){
        function W(){
        }
        W.prototype=o;
        return new W;
    }

    function inheritPrototype(SubType,SuperType){
        var prototype;
        if(typeof Object.create==='function'){
            prototype = Object.create(SuperType.prototype);
        }else{
            prototype = object(SuperType.prototype);
        }         
        prototype.constructor=SubType;
        SubType.prototype=prototype;
    }

```


## Class继承
Class可以通过extends关键字来实现继承。子类必须在constructor方法中调用super方法，否则新建实例时会报错，这是因为子类自己的this对象必须先通过父类的构造函数完成塑造，得到和父类同样的属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象

注意：ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须调用super方法）然后再用子类的构造函数修改this

``` JavaScript

    class ColorPoint extends Point {
        constructor(x,y,color){
            super(x,y)
            this.color = color;
        }

        toString(){
            return this.color + '' + super.toString()  //调用父类的toString()
        }
    }

```
### Class的继承链
大多数浏览器的ES5实现之中，每一个对象都有__proto__属性，指向对应的构造函数prototype属性。Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链
（1）子类的__proto__属性，表示构造函数的继承，总是指向父类
（2）子类的prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性

``` javascript

    class A{}
    class B extends A{

    }
    B.__proto__ === A
    B.prototype.__proto === A.prototype

```
上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。


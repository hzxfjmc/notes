/**
 * @description JS闭包
 * 1.由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。
 * 解决方法是，在退出函数之前，将不使用的局部变量全部删除。
 * 2.闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），
 * 把内部变量当作它的私有属性（private value），这时一定要小心，不要随便
 * 参考链接https://www.jb51.net/article/24101.htm
 */

 //通常闭包在我们理解来就是一个立即执行函数和局部声明变量
  (function (){
    var a = 1;
    console.log(a) //1
  })()

//JavaScript中所有的function都是一个闭包。 在函数fn1中添加fn2，在fn2中调用fn1的变量，在fn1中返回fn2这就形成了闭包
function f1(){
  var b = 2;
  function f2(){
    b+=1;
  }
  return f2;
}
let result = f1();
result()

//闭包中声明的变量是不会被gc回收机制给回收掉的，会一直保留在内存中，所以要注意在使用闭包时要删掉一些未使用到的变量声明
function sum(){
  var a = 499;
  Add = function(){
    a+=1;
  }
  function sum1(){
    console.log(a)
  }
  return sum1;
}
let result1 = sum()
result1(); //499
Add(); 
result1(); //500

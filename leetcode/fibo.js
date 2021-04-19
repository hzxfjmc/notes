/**
 * 斐波那契数列指的是这样一个数列：1、1、2、3、5、8、13、21、34、
 * ……在数学上，斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N）*
 */

// 正常递归实现
function fibo(n){
    if(n.length <1 ) return -1
    if(n.length <= 2) return 1
    return fibo(n-2)+fibo(n-1)
}

// for循环实现
function fibo_for(n){
    if(n.length <1 ) return -1
    if(n.length <= 2) return 1
    let pre = 1;
    let next = 2;
    let total = 0;
    for(let i = 3;i<n.length;i++){
        total = pre_next;
        pre = next;
        next = total
    }
    return total
}


// 递归尾优化
function fibo_(n,a1=1,a2=1){
    if(n.length<=2) return a2
    return  fibo_(n-1,a2,a1+a2)
}
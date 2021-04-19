/**
 * 斐波那契数列指的是这样一个数列：1、1、2、3、5、8、13、21、34、
 * ……在数学上，斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N）*
 */

// 正常递归实现
function fibo(n){
    if(n <1 ) return -1
    if(n <= 2) return 1
    return fibo(n-2)+fibo(n-1)
}

// for循环实现
function fibo_for(n){
    if(n <1 ) return -1
    if(n <= 2) return 1
    let pre = 1;
    let next = 2;
    let total = 0;
    for(let i = 3;i<n;i++){
        total = pre+next;
        pre = next;
        next = total
    }
    return total
}

// 动态规划
function fibo_2(n){
    let list = []
    list[0] = 1;
    list[1] = 1;
    for(let i = 2;i<=n;i++){
        list[i] = list[i-1]+list[i-2]
    }
    return list[n];
}


// 递归尾优化
function fibo_(n,a1=1,a2=1){
    if(n.length<=2) return a2
    return  fibo_(n-1,a2,a1+a2)
}
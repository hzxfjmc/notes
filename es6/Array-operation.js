let arr = [1,2,3,4,5,6,7,8];

//数组的遍历
/**
 * map
 * @return {Object | String}
 */
arr.map(item=>{console.log(item)});

/**
 * for of
 * @return {Object | String}
 */
for(let item of arr){
    console.log(item);
}

/**
 * Filter
 * 对数组进行过滤，返回一个新的数组
 * @return {Array}
 */
let arr1 = arr.filter(item=>{return item > 3});

/**
 * 数据去重 
 * */
let arrFilter = [1,2,2,3,4,3,5,6,4,2,1];
let arr2 = arrFilter.filter((item,index,self)=>{
    return self.indexOf(item) == index;
})


/**
 * every()
 * every()对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true ;
 */
let Barr = [true,true,true,true,false];
let demo1 = Barr.every(item=> item);

/**
 * some
 * some()对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true;
 */
let Barr1 = [false,false,false,false,false];
let demo2 = Barr1.some(item=> item);


/**
 * Reduce
 * reduce()每次只能接受两个参数，我对着两个参数的理解就是，当前结果，和当前序列的下一项。
 * 作用效果和原理就是[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)。这个方法一般用在累计累加上，实用技巧暂时还没发现。比如，数字数组求和，字符串数组连接上。
 */
let demo3 = [{a:1},{a:2},{a:3}]
let sum = arr.reduce((a,b)=>{return a+b})
/* 
    total    必需。初始值, 或者计算结束后的返回值。
    currentValue    必需。当前元素
    currentIndex    可选。当前元素的索引
    arr    可选。当前元素所属的数组对象。
*/
let demo4 = demo3.reduce((total,currentValue,currentIndex,arr)=>{
    return total + currentValue.a;
},0)


/**
 * find 方法返回传入一个测试条件（函数）符合条件的数组第一个元素。
 * findIndex 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置
 */
let demo5 = arr.find(val=>val>3);
let demo6 = arr.findIndex(val => val>3);

/**
 * includes 检查数组中是否包含某一项 
 * searchElement 必须。需要查找的元素值。
 * fromIndex 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
 * @return {Boolean}
 */
let demo8 = arr.includes(10);
console.log(demo8);
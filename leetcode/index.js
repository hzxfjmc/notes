//两数之和
function addString(){
    let a = '1000'
    let b = '111'
    let a1 = a.length,b1=b.length,num = 0,result = ''
    while(a1||b1){
        a1 ? sum = +a[--a1] :''
        b1 ? sum = +b[--b1] :""
        result = sum%10 +result
        if(num > 9) sum = 1;
        else num = 0;
    }
    if(sum) result = 1+result
    console.log(result)
    return result
}

addString()


/**
 *  用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数*  和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */


 /**
  * 输入：
    ["CQueue","appendTail","deleteHead","deleteHead"]
    [[],[3],[],[]]
    输出：[null,null,3,-1]
    示例 2：
    输入：
    ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
    [[],[],[5],[2],[],[]]
    输出：[null,-1,null,null,5,2]
  */
 var CQueue = function() {
    this.stack1 = []
    this.stack2 = []
  };
  /**
 * @param {number} value
 * @return {void}
 */

 CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
  };
  
  /**
   * @return {number}
   */
  CQueue.prototype.deleteHead = function() {
    if (this.stack2.length) {
      return this.stack2.pop();
    } else if (this.stack1.length) {
      while(this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2.pop();
    } else {
      return -1
    }
  };


  /**
   * 如何判断左右小括号是否全部匹配。如 ()[]{}
   */
  const isValid = function(s){
      let stack = [];
      let map = {
          "(":')',
          "{":'}',
          "[":']'
      }
      for(let char of s){
          if(char in map){
              stack.push(char)
          }else{
              if(!stack.length || char != map[stack.pop()]){
                  return false
              }
          }
      }
      return !stack.length
  }


  //100块钱分给10个人最多不能低于6块，最高不能高于12块
function cash(total,num) {
    var luckboy = [];
    while(num > 0){
        var newNum = Math.floor(Math.random()*600)/100 + 6;
        if((total - newNum)/num>6 && (total - newNum)/num<12){
            total = total - newNum;
            luckboy.push(newNum);
            num--;
        }
    }
    return luckboy;
  }
  console.time('start');
  cash(100,12)
  console.timeEnd('start')
  
  
  function cash(){
    var totle1 = 0;
    var arr = [];
      for(var i =0;i<9;i++ ){
        arr.push(Number((Math.random()*6).toFixed(2))+6);
      }
      totle1 = arr.reduce((prev,next)=>{
        return prev+next;
      })
      if(totle1 >94 || totle1 < 88) return cash();
      arr.push(100 - totle1)
      return arr;
    }
  
  cash()
  
  
  //分类
  function computedCount(){
    let arr2 = [];
    let arr = ["煤","米","水","煤","米"];
    arr.sort();
    for(let i = 0;i<arr.length;){
      let count = 0;
     for(let j=i;j<arr.length;j++){
       if(arr[i] == arr[j]){
         count++;
       }
     } 
     arr2.push({
       name:arr[i],
       count :count
     })
     i += count;
    }
    console.log(arr2);
    return arr2;
  }
  computedCount();
  cash(100,12)
  
  //贪心算法
  function greedyAlg(souce){
      let target = souce;
      this.getResult = function(result){
        let res = [];
        let total = 0;
        for(let i = souce.length;i>=0;i--){
          let coin = target[i];
          while(total+coin <= result){
            res.push(coin);
            total += coin;
          }
        }
        return res;
      }
    }
    
    var mcoinChange = new greedyAlg([1,5,10,25]);
  
  
  
  //冒泡算法
  function bubble(){
    let arr = [1,2,4,432,43,2,2,423,543];
    for(let i=0;i<arr.length-1;i++){
      for(let j = 0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }
  bubble()
  
  
  // '1,2,3,5,7,8,10'
  const nums1 = [1, 2, 3,5, 7, 8, 10];
  function simplifyStr(num) {
    var result = [];
    var temp = num[0]
    num.forEach((value, index) => {
      if (value + 1 !== num[index + 1]) {
        if (temp !== value) {
          result.push(`${temp}~${value}`)
        } else {
          result.push(`${value}`)
        }
        temp = num[index + 1]
      }
    })
    return result;
  }
  console.log(simplifyStr(nums1).join(','))
  
  
  //对象扁平化
  let entry = {
    a: {
        b: {
            c: {
                dd: 'ab43cdd'
            }
        },
        d:{xx:'adxx'},
        e:'ae'
    }
  }
  function floatsort(entry,key="",obj={}) {
    for (let i in entry) {
        if(Object.prototype.hasOwnProperty.call(entry,i)){
            let keyName = `${key}${i}`;
            if(typeof entry[i] == 'object'){
                floatsort(entry[i],keyName+'.',obj);
            }else{
                obj[keyName] = entry[i] 
            }
        }
    }
    return obj
  }
  floatsort(entry,key="",obj={});
  
  
  //数组去重
  function filterArr(arr){
      for(let i=0;i<arr.length;i++){
          if(arr[i] === arr[i+1]){
              arr.splice(i,1)
              i--
          }
      }
      return arr
  }



  /**
   * 括号匹配
   * @params String '()[]{()}'
   * @return true
   */
let str = '()[]{(})}';
function matchStr(str){
    let stack = [];
    let map = {
        "(":')',
        "{":'}',
        "[":']'
    }
    for(let char of str){
        if(map.hasOwnProperty(char)){
            stack.push(char)
        }else{
            if(!stack.length || char != map[stack.pop()]){
                return false
            }
        }
    }
    return !stack.length
} 
console.log(matchStr(str))


/**
 * 翻转数组
 * 
 */
 let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
function convert(list) {
	const res = []
	const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    console.log(map)
	for (const item of list) {
		if (item.parentId === 0) {
			res.push(item)
			continue
		}
		if (item.parentId in map) {
			const parent = map[item.parentId]
			parent.children = parent.children || []
			parent.children.push(item)
		}
	}
    console.log(res)
	return res
}
convert(list)
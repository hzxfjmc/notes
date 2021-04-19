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
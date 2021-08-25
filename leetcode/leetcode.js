/**
 * 实现一个函数，校验手机靓号，出现至少三个重复数字（如111）或者递增数字至少为4个（如1234）时提示
 */
let str = '13412348888'
function checkPhone(str){
    // 判断电话号码是否合法
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
    let arr = str.split('')
    let start = 0;
    let end = start+1
    let num = 0;
    let index = 0;
    for(let i = 0;i<arr.length;i++){
        // 判断电话号码连续多少位
        if(arr[start] === arr[end]){
            end += 1;
        }else{
            num = Math.max(num,end-start)
            start +=1;
            end +=1;
        }
        
        // 判断电话号码是否连续增长
        if(arr[i+1]-arr[i] ===1){
            index+=1;
        }
    }
    if(index >= 4){
        console.log('此电话号码至少4位连续递增')
    }
    if(num>=3){
        console.log('此电话号码为靓号')
    }
}

checkPhone(str)


/**
 * 两个最大数相加
 */

 let a = "432432423423";
 let b = "1243243242343243234";
 
 function add(a ,b){
    let maxLength = Math.max(a.length,b.length)
    a = a.padStart(maxLength,0)
    b = b.padStart(maxLength,0)
    let t = 0; // 累加数
    let f = 0; // 递增数
    let sum = ''
    for(let i = a.length-1;i>=0;i--){
        t = parseInt(a[i])+parseInt(b[i]) + f
        f = Math.floor(t/10)  // 向下取整  恒等于1
        sum = t%10 + sum   //取10的余数
    }
    // 最后一个数如果f等于1 那就得累加
    if(f === 1){
        sum = '1'+sum
    }
    return sum
 }

 add(a ,b)
 

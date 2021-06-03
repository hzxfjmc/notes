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
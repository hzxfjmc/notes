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
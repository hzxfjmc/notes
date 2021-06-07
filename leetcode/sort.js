//冒泡排序
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
let arr = [-1,-2,-3,43,4,3,2,1222,23]
// bubbleSort(arr)
// console.log(arr)

//快速排序(两个哨兵)
function fastSort(arr,from,to){
    let i = from,
        j = to,
        current = arr[from]
    if(from >= to){
        return
    }
    while(i<j){
        while(arr[j]>current && i<j){
            j--
        }
        while(arr[i]<=current && i<j){
            i++
        }
        if(i<j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }
    arr[from] = arr[i]
    arr[i] = current
    fastSort(arr,from,i-1)
    fastSort(arr,i+1,to)
}
fastSort(arr,0,arr.length-1)
console.log(arr)



let arr1 = [1,2,23,2,4,54,435,6,1]
// 快速排序
function quickSort(arr){
    if(arr.length === 0) return arr
    let currentIndex = Math.floor(arr.length/2)
    let currentVal = arr.splice(currentIndex, 1)[0]
    let left = [];
    let right = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<currentVal){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([currentVal],quickSort(right))
}

console.log( quickSort(arr1))
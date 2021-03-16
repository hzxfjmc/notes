let func = function(size,color){
    this.size = size;
    this.color = color;
}
let obj1 = {}
let obj = new func(1,2)
console.log(obj1)
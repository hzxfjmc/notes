
//声明一个类
class Animals{
    /**
     * 定义变量
     */
    leg:Number; //腿
    weight:Number //体重

    /** 
     * 定义构造函数
    */
    constructor(leg:number,weight:number){
        this.leg = leg;
        this.weight = weight;
    }

    /**
     * 定义方法
     * @return {Number}
     */
     public getWeight():Number{
        return this.weight;
     }
}


//定义一个类继承 Animals 这个类
class Pig extends Animals{
    /**
     * 定义变量
     */
    name:string;
    constructor(name:string,leg:number,weight:number){
        //调用父级构造器
        super(leg,weight);  //super一定要放在this的前面
        this.name = name;
    }

    //定义一个获取name的函数
    public getName():string{
        return this.name;
    }
}

let pig = new Pig("佩奇",4,20);
console.log(pig.getWeight())
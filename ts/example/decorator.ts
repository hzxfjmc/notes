
/**
 * @description 修饰器工厂模式 
 * @命令 tsc --target ES5 --experimentalDecorators decorator.ts
 **/
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
        console.log(432423);
    }
}
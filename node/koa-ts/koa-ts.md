### 主要是先创建一个项目

```javascript
mkdir src

// 安装依赖
npm init //
npm i koa koa-router
npm i --save-dev typescript ts-node nodemon
npm i --save-dev @types/koa @types/koa-router

```

### 创建一个tsconfig.json文件

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2017",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",  // TS文件编译后会放入到此文件夹内
        "baseUrl": ".",
        "paths": {
            "*": [
                "node_modules/*",
                "src/types/*"
            ]
        }
    },
    "include": [
        "src/**/*"
    ]
}

```

### sequelize-typescript的使用

[文档](https://www.npmjs.com/package/sequelize-typescript)

``` javascript

npm install sequelize --save // v4

npm install mysql2 --save  //安装数据库

npm install reflect-metadata --save

npm install sequelize-typescript --save 

```
### 在tsconfig.json 里面加入 
```javascript

"experimentalDecorators": true,

"emitDecoratorMetadata": true

```

###  在package.json 文件中添加"mysql": "tsc && node dist/sequelize-ts/index.js",   执行yarn mysql  在数据库中创建表






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

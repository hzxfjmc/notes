###  React学习历程

### Navigator

1.[React-cli 的使用以及项目的运行](#项目构建)

2.[React相关的Api以及事件绑定和生命周期](#React文档整理)

3.[React路由使用以及路由实现异步加载]

4.[React项目中redux的使用。]

5.[React的相关的UI框架的使用（atnd）]

6.[React组件之间的通信问题](#组件通信)


### 项目构建
>[参考文档](https://github.com/facebook/create-react-app)

1.下载create-react=app依赖

2.create-react-app my-app 构建项目（1.npx create-react-app my-aapp   2.npm npm init react-app my-app   3.yarn yarn create react-app my-app）

3.目录结构

``` javescript

my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

```


### React文档整理
>[参考文档](https://react.docschina.org/docs/thinking-in-react.html)

1.数据自顶向下流动,这通常被称为自顶向下或单向数据流。 任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。[页面的渲染]

![生命周期](https://upload-images.jianshu.io/upload_images/4118241-d979d05af0b7d4db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/488/format/webp)

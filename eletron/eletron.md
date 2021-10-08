# eletron

# Navigator

* [eletron介绍](eletron介绍)

* [环境的搭建](#环境的搭建)

* [主进程和渲染进程](#主进程和渲染进程)

* [通信模块](#通信模块)

* [electron-store](#electron-store)

* [eletron打包](#eletron打包)

## eletron介绍

Eletron是可以使用javascript来编写运行在mac、window、linux、浏览器上的。实现了跨平台开发。

## 环境的搭建

在开发eletron的时候需要用到的环境有Node.js、NPM、Eletron。现在eletron提供使用react或者是vue模板来开发桌面端应用

### 安装eletron

全局安装eletron 使用npm可能会安装失败，可以使用cnpm或者切换成淘宝源来全局安装eletron

``` javascript

    npm install eletron -g

    or

    cnpm install eletron -g 

```



### 使用Eletron-vue脚手架来开发electron项目

``` javascript

  vue init simulatedgreg/electron-vue hello-eletron
    
```

### 主进程和渲染进程

#### 主进程

在 Electron 里，运行 package.json 里 main 脚本的进程被称为主进程（Main Process），在主进程运行的脚本可以以创建 web 页面的形式展示 GUI：
主进程通过创建浏览器窗口实例来创建网页：每一个 浏览窗口 实例在其渲染过程中运行网页，当一个 BrowserWindow 实例被摧毁时，对应的渲染过程也被终止
主进程管理所有网页及其对应的渲染过程


#### 喧嚷进程

由于 Electron 使用 Chromium 来展示页面，所以 Chromium 的多进程结构也被充分利用：每个 Electron 的页面都在运行着自己的进程，这样的进程我们称之为渲染进程（Renderer Process）：
渲染进程只能管理单个的网页，在一个渲染过程中崩溃不会影响其他渲染过程
渲染进程通过 IPC 与主进程通信，在网页上执行 GUI 操作；由于安全考虑和可能的资源泄漏，直接从渲染器过程中调用与本地 GUI 有关的 API 会受到限制


### 通信模块

通信模块的通信如图所示

[渲染图]: http://static.runoob.com/images/runoob-logo.png

通信模块的三种模式

从主到次：从Main到Renderer的消息传递，借助BrowerWindow.webContents.send()发送消息。

自从到主：从Renderer到Main的消息传递，借助ipcRender和ipcMain发送/接收消息。

事件机制：无论是BrowerWindow.webContents.send()，还是ipc，其实都是node的事件机制，都是EventEmitter的实例。


#### 主进程向渲染层主动发送消息(从主到次)

```javascript
  
  // 主进程发送
  const { app, BrowserWindow } = require('electron')
  let win = null

  app.on('ready', () => {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(`file://${__dirname}/index.html`)
    win.webContents.on('did-finish-load', () => {
      win.webContents.send('ping', 'whoooooooh!')
    })
  })

  // 渲染层接受
  const electron = require('electron')
  electron.ipcRenderer.on('ping', (event, message) => {
    console.log(message) // Prints 'whoooooooh!'，这里的message是object类型
  })


```

#### 渲染进程向主进程发送消息(自从到主)

``` javascript

  // 渲染层发送消息
  const ipc = require('electron').ipcRenderer;
  ipc.send('getMsg', value)

  //主线程接受消息
  const ipc = require('electron').ipcMain
  ipc.on('getMsg', (val) => {
    console.log(val)  //接收窗口传来的消息
  })

```


#### 主进程和渲染层之间的互相通信（事件机制）

主进程

```  javascript

  // 引入ipcMain
  const ipcMain = require('electron').ipcMain
   
  // 接收标识为synchronous-message的消息，然后返回'pong'
  ipcMain.on('synchronous-message', function (event, arg) {
    event.returnValue = 'pong'
  })

  // 主进程发送消息
  ipcMain.sendSync('msg','ping')


```

渲染层

``` javascript

  // 引入ipcRenderer
  const ipcRenderer = require('electron').ipcRenderer
   
  // 发送同步消息，返回给变量replay，在等待主进程返回中，会阻止其他操作
  const reply = ipcRenderer.sendSync('synchronous-message', 'ping')
  console.log(reply)

  // 渲染层接收消息
  ipcMain.on('msg', function (event, arg) {
    event.returnValue = 'pong'
  })

```

### electron-store

electron-store1可以用来保存Electron应用程序或模块的简单数据持久性-保存和加载用户首选项，应用程序状态，缓存等。

Electron没有内置的方法来保留用户首选项和其他数据。electron-store模块可以为您解决该问题，因此您可以专注于构建应用程序。 数据保存在app.getPath（'userData'）2中的JSON文件中。您可以在主进程和渲染器进程中直接使用此模块。


#### 为什么不使用window.localStorage

1、localStorage仅在浏览器进程（渲染进程）中起作用。

2、localStorage的容错性不是很高，因此，如果您的应用遇到错误并意外退出，则可能会丢失数据。

3、localStorage仅支持持久字符串。 此模块支持任何JSON支持的类型。

4、localStorage不是很安全，可能是由于xss攻击而泄漏信息。

5、electron-store模块的API更好。 您可以设置并获取嵌套属性。 您可以设置默认的初始配置。


#### 关于vuex和storage的区别

1、vuex存储在内存，localstorage则以文件的方式存储在本地，electron-store数据存储卸载应用之后依然存在。

2、应用场景：vuex用于组件之间的传值，localstorage则主要用于不同页面之间的传值。

3、永久性：当刷新页面时vuex存储的值会丢失，localstorage不会。


#### electron-store的安装

``` javascript

  npm install electron-store

```

#### electron-store用法

``` javascript

  const Store = require('electron-store');

  const store = new Store();

  store.set('unicorn', '🦄');
  console.log(store.get('unicorn'));
  //=> '🦄'

  // 使用点表示法访问嵌套属性
  store.set('foo.bar', true);
  console.log(store.get('foo'));
  //=> {bar: true}

  store.delete('unicorn');
  console.log(store.get('unicorn'));
  //=> undefined

```

[electron-store的API](https://github.com/sindresorhus/electron-store)



nsis:
  oneClick: false
  perMachine: false
  allowElevation: true
  allowToChangeInstallationDirectory: true
  # 最终用户许可协议
  license: build/license_zh_CN.txt
  deleteAppDataOnUninstall: false
  displayLanguageSelector: false




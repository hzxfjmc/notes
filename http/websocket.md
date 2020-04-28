## websocket简介
1.websocket是Html5新增的一种通信协议，其特点是服务端可以向客户端推送信息，客户端也可以向服务端实时推送信息。




## 为什么我们要去使用websocket，websocket改变了什么？
1.在我们平常的开发中，有时候会遇到一种情况，服务端数据发生了改变而无法通知到客户端，以及一些对实时性要求很高的场景使用
http轮询请求是很难满足我们的要求的，而且还很占用资源。所以我们使用websocket就可以很优雅的解决这个问题，因为有了需求所以
肯定是要被满足的，websocket就是能支持客户端和服务端的双向通信，而且协议的头部也没有那么庞大。


## Websocket原理

#### Websocket是一种双向通信协议，它建立在<font color=#00ffff size=3>TCP</font>之上，同http一样通过TCP来传输数据，但与http最大的不同的是：

1. WebSocket是一种双向通信协议，在建立连接后，Websocket服务器和客户端都能主动的向对象发送或接收数据，就像Socket一样，不同的是<font color=#00ffff size=3>Websocket是一种建立在Web基础上的简单模拟Socket的协议</font>

2. WebSocket需要通过握手连接，类似TCP也需要客户端和服务端进行握手连接，连接成功后才能相互通信。

#### 当Web应用端调用new WebSocket(url)接口时，Browser就开始了与地址为URL的WebServer建立握手连接的过程。

1. Browser与WebSocket服务器通过TCP三次握手建立连接，如果这个建立连接失败，那么后面的过程就不会执行，Web应用将收到错误消息通知。

2. 在TCP建立连接成功后，Browser/UserAgent通过HTTP协议传送WebSocket支持的版本号、协议的字版本号、原始地址、主机地址等一系列字段给服务端。

3. WebSocket服务器收到Browser/UserAgent发送来的握手请求后，如果数据包数据和格式正确，客户端和服务端的协议版本匹配等，就接受本次握手连接，并给出对应的数据回复，同样回复的数据包也是采用HTTP协议传输。

4. Browser收到服务器回复的数据包后，如果数据包内容、格式都没有问题的话，就表示本次连接成功，触发onopen消息，此时Web开发者就可以在此时通过send接口向服务器发送数据。否则，握手连接失败，Web应用会收到onerror消息，并且能知道连接失败的原因。



## Socket.io

socket.io是一个跨浏览器支持Websocket的实时通讯js，socket.io是websocket的父级是包含关系

>[socket.io开发文档](http://socket.io/docs/)

### Socket.io的特性

Socket.io支持及时、双向、基于事件的交流，可在不同平台、浏览器、设备上工作，可靠性和速度稳定。最典型的应用场景如：

1. 实时分析：将数据推送到客户端，客户端表现为实时计数器、图表、日志客户。

2. 实时通讯：聊天应用

3. 二进制流传输：socket.io支持任何形式的二进制文件传输，例如图片、视频、音频等。

4. 文档合并：允许多个用户同时编辑一个文档，并能够看到每个用户做出的修改。


Socket.io实际上是WebSocket的父集，Socket.io封装了WebSocket和轮询等方法，会根据情况选择方法来进行通讯。

Node.js提供了高效的服务端运行环境，但由于Browser对HTML5的支持不一，为了兼容所有浏览器，提供实时的用户体验，并为开发者提供客户端与服务端一致的编程体验，于是Socket.io诞生了。


``` javascript

npm install --save socket.io

```


服务端socket.io必须绑定一个http.server实例，因为WebSocket协议是构建在HTTP协议之上的，所以在创建WebSocket服务时需调用HTTP模块并调用其下createServer()方法,将生成的server作为参数传入socket.io。

``` javascript 

var httpServer = require('http').createServer();
var io = require('socket.io')(httpServer);
httpServer.listen(3000);

``` 

### Socket.io的建立过程的代码示例

当服务端和客户端连接成功时，服务端会监听到connection和connect事件，客户端会监听到connect事件，断开连接时服务端对应到客户端的socket与客户端均会监听到disconcect事件

```javascript 

/*客户端*/
<script src="http://cdn.socket.io/stable/socket.io.js"></script>
<script>
// socket.io引入成功后，可通过io()生成客户端所需的socket对象。
let socket = io('http://127.0.0.0:3000');

// socket.emit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
socket.emit('client message', {msg:'hi, server'});

// socket.on()用于接收服务端发来的消息
socket.on('connect',  ()=>{
  console.log('client connect server');
});
socket.on('disconnect', ()=>{
  console.log('client disconnect');
});
</script>

/*服务端*/
// 服务端绑定HTTP服务器实例
let httpServer = require('http').Server();
let io = require('socket.io')(httpServer);
httpServer.listen(3000);

// 服务端监听连接状态：io的connection事件表示客户端与服务端成功建立连接，它接收一个回调函数，回调函数会接收一个socket参数。
io.on('connection',  (socket)=>{
  console.log('client connect server, ok!');

  // io.emit()方法用于向服务端发送消息，参数1表示自定义的数据名，参数2表示需要配合事件传入的参数
  io.emit('server message', {msg:'client connect server success'});

  // socket.broadcast.emit()表示向除了自己以外的客户端发送消息
  socket.broadcast.emit('server message', {msg:'broadcast'});

  // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
  socket.on('disconnect', ()=>{
    console.log('connect disconnect');
  });
  
  // 与客户端对应的接收指定的消息
  socket.on('client message', (data)=>{
    cosnole.log(data);// hi server
  });

  socket.disconnect();
});

``` 

### 传输数据

服务端和客户端的socket是一个关联的EventEmitter对象，客户端socket派发的事件可以通过被服务端的socket接收，服务端socket派发的事件也可以被客户端接收。基于这种机制，可以实现双向交流。

``` javascript 

/*客户端*/
<script src="http://cdn.socket.io/stable/socket.io.js"></script>
<script>
let socket = io('http://127.0.0.1:3000');

let interval = setTimeInterval(()=>{
  socket.emit('random', Math.random());
}, 500);

socket.on('warn', count=>{
  console.log('warning count : '+count);
});

socket.on('disconnect', ()=>{
  clearInterval(interval);
});
</script>


/*服务端*/
let httpServer = require('http').Server();
let io = require('socket.io')(httpServer);
httpServer.listen(3000);

io.on('connection', socket=>{
  socket.on('random', value=>{
    console.log(value);
    if(value>0.95){
      if(typeof socket.warnign==='undefined'){
        socket.warning = 0;// socket对象可用来存储状态和自定义数据
      }
      setTimeout(()=>{
        socket.emit('warn', ++socket.warning);
      }, 1000);
    }
  });
});

``` 


>[本文作者地址](https://www.jianshu.com/p/4e80b931cdea)
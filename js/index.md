1.js基本数据类型
number、string、undefined、null、symbel、boolean  引用类型 object

2.闭包是什么

1、闭包是有权访问另一个函数作用域中的变量的函数

2、闭包的使用：

3.正则匹配

var s = '12345237987584564656,000.00';
var d=s.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")


let s = ' 3434'
s.replace(/(^\s*)|(\s*$)/g,'')


4.移动端适配禁止屏幕缩放
<meta name="viewport" content="width=device-width,initial-scale=1,maxinum-scale=1,user-scalble=no">

5.http状态码

301、308 URL永远重定向，目标请求URL应该更换新的请求链接
302、307 URL临时性重定向，目标请求应该使用当前的请求方式
304 协商缓存，通过与服务端协商返回上一次更做更改的内容


6.缓存
1.缓存主要是解决减少不必要的资源浪费，减少http请求来提升用户的体验。
2.强缓存：
    2.1强缓存主要包括expires、cache-control
        2.1.1 expires http 1.0中定义的缓存机制，服务端在re response header中增加expires字段来表示资源的过时间戳 e1:expires: Thu,03 Jan 2019 11:43:03 
        2.1.2 cache-control http 1.1 简单可以理解cache-control是expires的升级版 当cache-control与expires同时存在时优先cache-control e1：cache-control：public,max-age = 3600,s-maxage=3600
3.协商缓存：
    3.1协商缓存主要包含last-modified、etag
        3.1.1 last-modified用来记录资源最后修改的时间，启用后请求资源在request请求头会加上last-modifed字段来
        3.1.2 etag 优越性比last-modified更好能更加精准的感知资源是否有变化而去判断是否使用缓存。使用在请求头加上一段哈希值

4. http2中多路复用 http1.1中的keep-alive区别
    4.1 多路复用，客户端可连续发送请求给服务端，服务端根据资源大小请求时长返回。多路复用开通多个请求管道多线程
    4.2 keep-alive 客户端依次发送请求给服务端，服务端依次返回请求资源给客户端。类似于单线程
var shareList = {}; // 定义发布者
shareList.list = []

//增加订阅者
shareList.listen = function (fn) {
  shareList.list.push(fn);
}
//发布消息
shareList.trigger = function () {
  let fn;
  for (var i = 0; fn = this.list[i++];) {
    fn.apply(this, arguments);
  }
}

// 小红订阅如下消息
shareList.listen(function (color, size) {
  console.log("颜色是：" + color);
  console.log("尺码是：" + size);
});

// 小花订阅如下消息
shareList.listen(function (color, size) {
  console.log("再次打印颜色是：" + color);
  console.log("再次打印尺码是：" + size);
});

shareList.trigger('123', '456')
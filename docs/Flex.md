## css

### Navigator

1.[Flex布局属性整理](#Flex布局属性整理)





### Notes

### Flex布局属性整理
>[参考文档](https://juejin.im/post/591d74ad128fe1005cfc21cd)

#### flex布局

*display:flex; 将对象作为弹性伸缩盒展示，用于块级元素
*display: inline-flex; 将对象作为弹性伸缩盒展示，用于行内元素

### 注意兼容问题：

webkit内核浏览器应使用前缀-webkit
IE浏览器，可以很好的兼容IE11+版本，对于IE10只有部分可以兼容，且使用时需增加-ms，IE10浏览器中容器定义成弹性伸缩盒时，需使用display: -ms-flexbox

### Flex 作用于父级元素的6个属性（flex-direction、flex-wrap、flex-flow、justify-content、align-items、align-content）




### Flex 作用于子级元素的6个属性（order、flex-grow、flex-shrink、flex-basis、flex、align-self）
## Flex

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
 
#### flex-direction   用于指定Flex主轴的方向，继而决定 Flex子项在Flex容器中的位置 取值：row | row-reverse | column | column-reverse

#### flex-wrap       用于指定Flex子项是否换行  取值：nowrap | wrap | wrap-reverse

#### flex-flow       复合属性，是flex-direction 和 flex-wrap 的简写属性，是用于指定Flex子项的排列方式

#### justify-content 用于指定主轴(水平方向)上Flex子项的对齐方式  取值：flex-start | flex-end | center | space-between | space-around

#### align-items     用于指定侧轴(垂直方向)上Flex子项的对齐方式  取值：stretch | flex-start | flex-end | center | baseline

#### align-content   该属性只作用于多行的情况下，用于多行的对齐方式  取值：stretch | flex-start | flex-end | center | space-between | space-around


### Flex 作用于子级元素的6个属性（order、flex-grow、flex-shrink、flex-basis、flex、align-self）

#### order          该属性用来指定Flex子项的排列顺序，数值越小，越靠前，可以为负数  取值：数值，默认值为0

#### flex-grow      用来指定Flex子项的扩展比例，不可以为负数，Flex容器会根据Flex子项设置的扩展比例作为比率来分配剩余空间  取值：数值，默认值为0，表示即使存在剩余空间，Flex子项也不会扩展

#### flex-shrink    用来指定Flex子项的收缩比例，不可以为负数，Flex容器会根据Flex子项设置的收缩比例作为比率来收缩各个Flex子项  取值：数值，默认值为1，表示所有子项在剩余空间为负数时，等比例收缩

#### flex-basis     用来指定Flex子项的占据的空间，不可以为负数  取值：auto | length | percentage | content

#### flex           复合属性，是flex-grow 、 flex-shrink 和 flex-basis 的简写属性，用来指定Flex子项如何分配空间  取值：none | 各拆分项属性

###  align-self     用来单独指定某Flex子项的对齐方式  取值：auto | flex-start | flex-end | center | baseline | stretch
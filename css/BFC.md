### BFC是什么？

1.BFC(Block Formatting Context，BFC)顾名思义就是块格式化上下文，是web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素的交互的区域。


### 下列方式会创建块格式化上下文：

* 根元素（html）

* 浮动元素（元素的float不是none）

* 绝对定位元素（元素的position为absolute或者fixed）

* 行内块元素（元素的 display 为 inline-block）

* 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值

* 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）

* 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）

* overflow 值不为 visible 的块元素

* display 值为 flow-root 的元素

* contain 值为 layout、content或 paint 的元素

* 弹性元素（display为 flex 或 inline-flex元素的直接子元素）

* 网格元素（display为 grid 或 inline-grid 元素的直接子元素）

* 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）

* column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。


块格式化上下文包含创建它的元素内部的所有内容

块格式化上下文对浮动定位（参见 float）与清除浮动（参见 clear）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。


### 个人理解

1.看了一些文档以及自己对BFC的理解可能是从根路径创建一个一个盒子，每一个盒子都是一个格式化上下文。这样设计能更好的便于css的排列以及对页面布局的控制。


### 外边距塌陷问题

创建新的BFC可以避免两个相邻的<div>之间的外边距合并问题


# Flex

# Navigator

1.[Flex布局属性整理](#Flex布局属性整理)

2.[grid布局属性整理](#grid布局属性整理)





# Notes

### Flex布局属性整理
>[参考文档](https://juejin.im/post/591d74ad128fe1005cfc21cd)

>[强化训练理解Flex的小游戏](https://flexboxfroggy.com/)

>[强化训练理解Grid的小游戏](https://codepip.com/games/grid-garden/)

>[练习打字游戏](https://10fastfingers.com/typing-test/english)

#### flex布局

*display:flex; 将对象作为弹性伸缩盒展示，用于块级元素
*display: inline-flex; 将对象作为弹性伸缩盒展示，用于行内元素

### 注意兼容问题：

webkit内核浏览器应使用前缀-webkit
IE浏览器，可以很好的兼容IE11+版本，对于IE10只有部分可以兼容，且使用时需增加-ms，IE10浏览器中容器定义成弹性伸缩盒时，需使用display: -ms-flexbox

### Flex 作用于父级元素的6个属性（flex-direction、flex-wrap、flex-flow、justify-content、align-items、align-content）

| 属性名    | 作用    |  参数  |
| :-----   | :-----  | :----: |
| flex-direction |用于指定Flex主轴的方向，继而决定 Flex子项在Flex容器中的位置 |   row、row-reverse、column、column-reverse    |
| flex-wrap        | 用于指定Flex子项是否换行      |   nowrap 、wrap 、 wrap-reverse    |
| flex-flow        | 复合属性，是flex-direction 和 flex-wrap 的简写属性，是用于指定Flex子项的排列方式      |   0    |
| justify-content        | 用于指定主轴(水平方向)上Flex子项的对齐方式     |   flex-end 、 center 、 space-between 、 space-around    |
| align-items        | 用于指定侧轴(垂直方向)上Flex子项的对齐方式      |   stretch 、 flex-start 、 flex-end 、 center 、 baseline    |
| align-content        | 该属性只作用于多行的情况下，用于多行的对齐方式      |   stretch 、 flex-start、 flex-end 、 center 、 space-between 、 space-around    |
 

### Flex 作用于子级元素的6个属性（order、flex-grow、flex-shrink、flex-basis、flex、align-self）

| 属性名        | 作用    |  参数  |
| :----:   | :-----  | :----: |
|order |该属性用来指定Flex子项的排列顺序，数值越小，越靠前，可以为负数 |   默认值为0，表示即使存在剩余空间，Flex子项也不会扩展    |
| flex-grow | 用来指定Flex子项的扩展比例，不可以为负数，Flex容器会根据Flex子项设置的扩展比例作为比率来分配剩余空间 |   默认值为1，表示所有子项在剩余空间为负数时，等比例收缩    |
| flex-shrink | 用来指定Flex子项的收缩比例，不可以为负数，Flex容器会根据Flex子项设置的收缩比例作为比率来收缩各个Flex子项 | 默认值为1，表示所有子项在剩余空间为负数时，等比例收缩 |
| flex-basis | 用来指定Flex子项的占据的空间，不可以为负数 | auto、length、percentage、content |
| flex | 复合属性，是flex-grow 、 flex-shrink 和 flex-basis 的简写属性，用来指定Flex子项如何分配空间 | none、各拆分项属性 |
| align-self  | 用来单独指定某Flex子项的对齐方式 | auto、flex-start、flex-end、center、baseline、stretch |


### grid布局属性整理

网格布局(grid)是最强大的CSS布局方案，Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

#### 行和列

##### 1.1 容器里面的水平区域称为“行”(row),垂直区域称为“列”（column）。

如下图所示水平的深色区域就是行，垂直的深色区域就是“列”

![grid行和列展示](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

##### 1.2 行和列的交叉区域，称为单元格(cell)

正常情况下，n行和m列会产生n*m个单元格，比如3行3列会产生9个单元格

#### 1.3 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线。

下图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。

![网格线示意图](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png)


### grid属性说明

### Navigator

1.[grid-template-columns grid-template-rows](####1.1grid-template-columns,grid-template-rows)

2.[重复属性repeat](#####1.1.1重复属性repeat)

3.[fr关键字](####1.1.3fr关键字)

4.[minmax](####1.1.4minmax())

5.[auto 关键字](####1.1.5auto关键字)

#### 1.1grid-template-columns,grid-template-rows 

``` css

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;

```

上面代码指定了一个三行三列的网格，列宽和行高都是100px

![展示图](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

##### 1.1.1 重复属性repeat() 

``` css

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;

```
可改写为 repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。
``` css

  display: grid;
  grid-template-columns: repeat(3,100px);
  grid-template-rows: repeat(3,100px);

```

repeat()重复某种模式也是可以的。

``` css
    grid-template-columns: repeat(2, 100px 20px 80px);
```

![展示效果图](https://www.wangbase.com/blogimg/asset/201903/bg2019032507.png)

#### 1.1.2auto-fill关键字

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用

auto-fill关键字表示自动填充。

#### 1.1.3fr关键字

为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就

表示后者是前者的两倍。

#### 1.1.4minmax()

minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

``` css

    grid-template-columns: 1fr 1fr minmax(100px, 1fr);

```

上面代码中，minmax(100px,1fr)表示列宽不小于100px，不大于1fr


#### 1.1.5auto关键字
 
auto关键字表示由浏览器自己决定长度。

``` css

   grid-template-columns: 100px auto 100px;

```

#### 1.1.6grid-row-gap属性,grid-column-gap属性,grid-gap属性

grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。

``` css

  grid-row-gap: 20px;
  grid-column-gap: 20px;

```

上面代码中，grid-row-gap用于设置行间距，grid-column-gap用于设置列间距。
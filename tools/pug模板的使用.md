
# <font color=seagreen> Navigator</font>

* [pug是什么](#Pug是什么)

* [怎么样使用Pug](#怎么样使用Pug)

* [pug解决什么样的问题](#pug解决什么样的问题)


## <font color=amber>Pug是什么</font>

Pug是一款健壮、灵活、功能丰富的HTML模板引擎，专门为node.js平台开发。Pug是由Jade改名而来

是一种通过缩进（表示标签间的嵌套关系）的方式来编写代码的过程，在编译的过程中，不需要考虑标签是否闭合的问题。


## <font color=yellowgreen>怎么样使用Pug</font>

其实我们最关心，最主要的是如何去使用Pug引擎在项目中的实用

### <font color=chocolate>项目中的使用</font>
首先通过npm或者yarn下载pug和pug相对应的编译loader

``` javascript     

    npm install pug pug-plain-loader pug-html-loader -s
    
    or 
    
    yarn add pug pug-plain-loader pug-html-loader -s

``` 

### <font color=brown>项目中的配置</font>
通过下载之后我们要在项目如何去使用配置，因为我们安装了两个loader，并且也是pug在webpack中需要使用的，需要在vue.config.js中配置（Vue的项目配置）

``` javascript

    chainWebpack: (config) => {
      // 配置pug模板
      config.module.rule('pug')
        .test(/\.pug$/)
        .use('pug-html-loader')
        .loader('pug-html-loader')
        .end();
      config.plugins.delete('prefetch');
      config.plugins.delete('preload');
    }

```

### <font color=amber>项目中的使用</font>
安装和配置之后，接下来就是在项目中的使用和Pug对应的语法

在Vue项目中需要在template配置pug

``` html

    // 未配置前
    <template></template>
    // 配置后
    <template lang="pug"></template>

``` 

### <font color=royalblue>pug的使用语法</font>

普通使用进行一个demo示例

``` html

    //html
    <div class="father">
        <div class="son"></div>
    </div>
    //Pug
    .father()
        .son()

```

对于Vue项目中我们经常使用的循环列表场景demo2对于Vue一些指令和一些在标签上的属性我们对应的设置

<font color=brown>一般在项目中我们使用pug模板假如在标签上的属性比较多，我们应该换行来对代码更清晰的展示</font>

``` js

    //html
    <div v-for="item in list" v-if="show" v-show="show"></div>

    //pug
    div(
        v-for="item in list"
        v-if="show"
        v-show="show"
    )


```

Pug引擎模板还可以添加自定义的一些变量属性

<font color=purple>条件判断</font>

``` js

    <template lang="pug">
        - let friends = 10 //加上-后不会进行输出
        case friends
            when 0
                p 您没有朋友
            when 1
                p 您有一个朋友
            default
                p 您有 #{friends} 个朋友
    </template>

    <template lang="pug">
        - let user = { description: 'foo bar baz' }
        - let authorised = false
        #user
            if user.description
                h2.green 描述
                p.description= user.description
            else if authorised
                h2.blue 描述
                p.description.
                    用户没有添加描述。
                    不写点什么吗……
            else
                h2.red 描述
                p.description 用户没有描述
    </template>
    <!--解析后-->
    <div id="user">
        <h2 class="green">描述</h2>
        <p class="description">foo bar baz</p>
    </div>

```

<font color=tomato>循环</font>

``` js

    <template lang="pug">
        div
        - for (let x = 0; x < 3; x++)
            li item
    </template>
    <!--解析后-->
    <div>
        <li>item</li>
        <li>item</li>
        <li>item</li>
    </div>

    <template lang="pug">
        div
            - let list = ["Uno", "Dos", "Tres","Cuatro", "Cinco", "Seis"]
            each item in list
                li= item
    </template>
    <!--解析后-->
    <template>
        <div>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Cuatro</li>
            <li>Cinco</li>
            <li>Seis</li>
        </div>
    </template>

```

包含/模块化、继承与扩展 这两个功能在Vue、React中都已经实现了。

<font color=chocolate>嵌入</font>

``` js

    - var title = "On Dogs: Man's Best Friend";
    - var author = "enlore";
    - var theGreat = "<span>转义!</span>";

    h1= title
    p #{author} 笔下源于真情的创作。
    p 这是安全的：#{theGreat}

    <!--解析后-->
    <h1>On Dogs: Man's Best Friend</h1>
    <p>enlore 笔下源于真情的创作。</p>
    <p>这是安全的：&lt;span&gt;转义!&lt;/span&gt;</p>

```

变量的引用
<font color=orange>
* pug使用了#{}的方式

* Vue使用了{{}}的方式

* React使用了{}的方式</font>


<font color=plum>迭代</font>

``` js

    ul
        each val in [1, 2, 3, 4, 5]
            li= val
    <!--解析后-->
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>

```

* [pug的反编译转换html](https://pughtml.com/)



## <font color=green>pug解决什么样的问题</font>

1、pug能解决代码闭合产生的问题

2、使用pug能减少我们的代码量

3、提高代码的简洁度

4、提高代码的阅读力

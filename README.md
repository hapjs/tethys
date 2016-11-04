# tethys 

这是一个微型的库，包含最常用的dom操作，压缩后只有`2KB`。

## 起源

自从 `angular`、`vue` 这类框架出现之后，我们终于不用再面对`业务逻辑`与`dom操作`混杂的代码。

但是，在极少的时候，特别是在组件中，我们仍然想要对页面元素进行直接的处理。

可是，你又不想仅仅为了用到几个方法，就去引入几十KB的`zepto`或上百K的`jquery`。

于是就有了`tethys`。

## 安装

如果在Node.js环境中使用，通过以下命令安装它。

```bash
npm i tethys
```

https://www.npmjs.com/package/tethys

## 引用

### 标签引入：

```html
<script src="https://raw.githubusercontent.com/hapjs/tethys/master/tethys.min.js"></script>
```

如果通过script方式引入，你可以通过全局变量`tethys`来调用它。

如果全局变量`$`没有被其它库或者变量占用的话，那么`$`会指向`tethys`。


### CommonJS/CMD/AMD引入：

```js
var $ = require('tethys');
```

### ES6引入：

```js
import $ from 'tethys';
```

## 查找元素

通过选择器查找

```js
$('#id');
$('.class');
```

直接传入元素

```js
$(document.body);
```

指定查找范围

```js
$('style', document.head);
```

与jQuery类似，你将得到一个包含查找到的节点的数组，这个数组有下列方法供你操作：

## 遍历

```js
$('script').each(function(script, index){
    // console.log(this.getAttribute('type'));
});
```

## 事件绑定

```js
$('button').on('click', function(){
    // this.style.color = 'red';
});
```

## 样式

单个样式

```js
$('button').css('color', 'red');
```

多个样式

```js
$('button').css({
    display: 'block',
    border: '1px solid green'
});
```

取样式

```js
$('button').css('color'); // red
```

## 属性


单个属性操作

```js
$('button').attr('maxlength', 16);
```

多个属性操作

```js
$('button').attr({
    'maxlength': 16
});
```

查询

```js
$('button').attr('maxlength'); // 16
```

## class

添加class

```js
$('button').addClass('active');
```

删除class

```js
$('button').removeClass('active');
```

判断是否存在指定class

```js
var active = $('button').hasClass('active');
```

## 显示/隐藏

显示

```js
$('button').show();
```

隐藏

```js
$('button').hide();
```

## 设置html

```js
$('button').html('<p>Hello world!</p>');
```

## 链式调用

```js
$('button')
    .css('color', 'red')
    .addClass('active')
    .each(function(){ })
    .on('click', function(){ });
```

## 获得原生节点

栗子1：获得第一个script标签

```js
$('script')[0]; // <script>...</script>
```

栗子2：遍历所有style标签

```js
$('style').each(function(){
    // <style>...</style>
})
```

## 静态方法

除了上述实例方法以外，还有下面的静态方法可以使用。

### extend

浅层复制

```js
$.extend(obj1, obj2);

$.extend(obj1, obj2, obj3);
```

深层复制

```js 
$.extend(true, obj1, obj2)
```

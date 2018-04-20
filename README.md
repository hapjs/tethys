# tethys 

轻量级 DOM 操作库

* [find](#find)
* [each](#each)
* [on](#on)
* [trigger](#trigger)
* [css](#css)
* [style](#style)
* [width](#width)
* [height](#height)
* [attr](#attr)
* [hasClass](#class)
* [addClass](#class)
* [removeClass](#class)
* [show](#showhide)
* [hide](#showhide)
* [html](#html)
* [append](#append)
* [delay](#delay)

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

## find

查找子元素

```js
$('head').find('script'); // 查找<head>中的所有<script>
```


## each

遍历

```js
$('script').each(function(script, index){
    // console.log(this.getAttribute('type'));
});
```

## on

事件绑定

```js
$('button').on('click', function(){
    // this.style.color = 'red';
});
```

## trigger

触发元素上绑定的事件监听函数

```js
$('button').trigger('click');
```

可以触发的事件包括：
```
focus
blur
select
change
```
和所有鼠标事件：
```
mousedown
mouseup
mousemove
click
dblclick
mouseover
mouseout
mouseenter
mouseleave
contextmenu
```

## css

查询实际样式（computedStyle）

```js
$('button').css('color'); // red
```

设置样式

```js
$('button').css('color', 'red');
$('button').css({
    display: 'block',
    border: '1px solid green'
});
```

## style

查询内联样式，如果没有内联样式，返回空字符串

```js
$('button').style('color');
```

## width

设置或查询宽度，参数或返回值均不带单位且是数值类型

```js
$('button').width();
$('button').width(200);
```

## height

设置或查询高度，参数或返回值均不带单位且是数值类型

```js
$('button').height();
$('button').height(200);
```

## attr

设置单个属性

```js
$('button').attr('maxlength', 16);
```

设置多个属性

```js
$('button').attr({
    'maxlength': 16
});
```

取属性：

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
$('button').hasClass('active'); // true
```

## show/hide

显示

```js
$('button').show();
```

隐藏

```js
$('button').hide();
```

## html

修改文档的innerHTML

```js
$('button').html('<p>Hello world!</p>');
```

## append

追加子元素

```js
$('button').append('<p>Hello world!</p>');
```

## delay

延时执行一个函数

```js
$('button').addClass('fade-out').delay(1000, function(){
    this.hide();
});
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

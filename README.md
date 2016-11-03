# tethys 

这是一个微型的库，包含最常用的dom操作，压缩后`2KB`。

## 起源

自从 `angular`、`vue` 这类框架出现之后，我们终于不用再面对`业务逻辑`与`dom操作`混杂的代码。

但是，在极少的时候，特别是在组件中，我们仍然想要对页面元素进行直接的处理。

可是，你又不想仅仅为了用到几个方法，就去引入几十KB的`zepto`或上百K的`jquery`。

于是就有了`tethys`。

## 安装

https://www.npmjs.com/package/tethys

```bash
npm i tethys
```

## 引用

浏览器环境
```html
<script src="https://raw.githubusercontent.com/hapjs/tethys/master/tethys.min.js"></script>
```

Node.js/Webpack/Rollup

```js
var $ = require('tethys');
```

## 查找元素

```js
// 通过选择器查找
$('#id');
$('.class');

// 通过element查找
$(document.body);

// 在指定容器中查找
$('style', document.head);
```

## 遍历

```js
$('script').each(function(script, index){
    console.log(this.getAttribute('type'));
});
```

## 事件绑定

```js
$('button').on('click', function(){
    this.style.color = 'red';
});
```

## 样式

```js
// 属性名，属性值
$('button').css('color', 'red');

// 键值对
$('button').css({
    display: 'block',
    border: '1px solid green'
});

// 查询
$('button').css('color'); // red
```

## 属性

```js
// 单个属性操作
$('button').attr('maxlength', 16);

// 多个属性操作
$('button').attr({
    'maxlength': 16
});

// 查询
$('button').attr('maxlength'); // 16
```

## class

```js
// 添加class
$('button').addClass('active');

// 删除class
$('button').removeClass('active');

// 判断是否存在指定class
if($('button').hasClass('active')){
    console.log('yes');
};
```

## 显示/隐藏

```js
// 隐藏
$('button').hide();

// 显示
$('button').show();
```

## 设置html

```js
$('button').html('<p>Hello world!</p>');
```

## 链式调用

```js
$('button').css('color', 'red').addClass('active').each(function(){
    //
}).on('click', function(){
    //
});
```
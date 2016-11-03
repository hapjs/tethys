# tethys 

一个小型库，包含最常用的dom操作： `each`, `on`, `css`, `hasClass`, `addClass`, `removeClass`

tethys.js     (3KB)

tethys.mn.js  (1KB)

## 安装

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

## 查找

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

## 样式修改

```js
// 属性名，属性值
$('button').css('color', 'red');

// 键值对
$('button').css({
    display: 'block',
    border: '1px solid green'
});
```

## class操作

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

## 链式调用

```js
$('button').css('color', 'red').addClass('active').each(function(){
    //
}).on('click', function(){
    //
});
```
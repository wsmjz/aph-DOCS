# 文章博客
- 梳理最佳通用插件写法，像jq, echarts那样传参
## umi原理探究
- 链接，致谢

## 条件打包方案
```js
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  entry: '...',
  output: '...',
  module: {
    // ...
  },
  plugins: [
    // ...
    new webpack.NormalModuleReplacementPlugin(/(.*)-TARGET_AREA(\.*)/, resource => {
      const area = process.env.DEPLOY_AREA; // 设置的地区环境变量
      const target = area ? `-${area}` : ''; // 替换引用

      resource.request = resource.request.replace(/-TARGET_AREA/, target);
    }),
  ]
}
```
## CodeReview规范

## 容错规范
https://conf.shishike.com/pages/viewpage.action?pageId=62754967
容易出现错误的规范处理
### api容错
### 代码容错
- 方法参数
- http 请求返回
- Object 和 Array
```js
在 js 中最容易出现的异常的就在 Object。通常我们会比较容易写出以下的代码


function getName(user){
  return user.name;
}

const obj = {name:'Jack',age:12};

getName(obj)
正常情况下这个代码是没有问题的。但是如果按照传递 null 或者 undefined 给 getName 方法。那么就会产生异常

function getName(user){
  return user.name;
}

const obj = null;

getName(obj)

//VM781:2 Uncaught TypeError: Cannot read property 'name' of null

所以在使用.去访问Object的属性的时候，一定要对Object做容错处理。

同样的道理，使用 Array 的时候也会有这样的情况。
```
### 建议写法（规范）
- 方法定义默认值
- 解构默认值
相较于通过标识符 . 去访问对象中的属性。在现代编程中，我们更喜欢用解构来访问对象中的属性或数组中的元素。那么此时，我们也应该对关键属性或者元素设置默认值
> 特别对类型为对象或者数组的属性设置默认值，是能够有效避免异常的手段之一
```js
function getUserAddress(info){
  const {address = {}} = info;
  const {country,city} = address;
  return `${country}-${city}`;
}
```
- 断言处理
使用标识符.去访问对象的某个属性，在对象为 falsely 时会出现异常。同样在解构的时候也会出现。其实我们也可以使用简单的断言手段，来避免异常的出现
```js
function getUserAddress(info){
 const {address} = info || {};
 const {country,city} = address || {};
 return `${country}-${city}`;
}
```
特别是在使用对象特有的方法时，最好先进行类型断言。
```js
function add(ary){
 return Array.isArray(ary) ? ary.reduce((a,b)=>a+b,0) : 0;
}
```
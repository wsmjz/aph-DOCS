# 题目
- 1
```js
var o = {
    a: 10,
    b: {
        fn: function() {
            console.log(this.a)  // undefind
        }
    }
}
o.b.fn()
```
```js
var o = {
    a: 10,
    b: function() {
            console.log(this.a)  // 10
        }
}
o.b()
```
```js
a = 1
var o = {
    a: 10,
    b: function() {
            console.log(this.a)  // 10
        }
}
o.b()
```
```js
var o = {
    a: 10,
    b: function() {
            console.log(a)  // ReferenceError: a is not defined
        }
}
o.b()
```
```js
a = 1
var o = {
    a: 10,
    b: function() {
            console.log(a)  // 1
        }
}
o.b()
```
- 作用域
```js
x = 1;
var obj = {
    x: 2,
    dbl: function () {
        // this.x *= 2;
        // x *= 2;
        console.log(x);
        // console.log(this.x);
    }
};
// 说出下面的输出结果
obj.dbl();
//解析：this.x指向当前对象，所以this.x *= 2等同于obj.x *= 2
//而x *= 2，在当前作用域中没有找到声明，则在全局作用域下查找是否有x, x *= 2等同于window.x *= 2
//日志打印输出2 4，此时window.x为2, obj.x为4

var func = obj.dbl;
func();
//func()没有前缀，所以func()相当于window.func()，此时func()中的x与this.x均指向window.x
//日志打印输出8 8，此时window.x为8, obj.x为4


var funcBind = obj.dbl.bind(obj);
funcBind();
//func()没有前缀，但是因为通过bind()方法，把funcBind()的作用域与obj的作用域绑定起来，所以func()相当于obj.dbl()，其中x作用域与上面👆一样查找x，只不过此时window.x为8, obj.x为4
//日志打印输出16 8
```
> 函数在被直接调用的时候，其中的this指针永远指向window
> 匿名函数 this总是指向window对象
> 谁执行函数，this就指向谁
> 如果函数new了一下，那么就会创建一个对象，并且this指向新创建的
- new URLSearchParams() 与 new FormData()区别
# http
## 状态码
- 服务端 缓存
## post get cooki 更高
## 握手协议
- 为什么要3次握手
- 因为HTTP是一个基于TCP的协议,而TCP是一种可靠的传输层协议.
- 3次握手，4次挥手是针对TCP连接来说的，HTTP协议本身不关注这块
- [链接](https://www.zhihu.com/question/67772889)
- 如果要考察HTTP,我觉得问下HTTP请求/响应报文的组成可能会更好.HTTP请求报文组成:请求行+请求头+请求体HTTP响应报文组成:响应行+响应头+响应体请求行: 请求方法(HEAD/GET/POST) + 请求URL + HTTP协议版本响应行: HTTP协议版本 + 状态码 + 状态码描述请求头: 比如客户端的Cookie和User-Agent就放在这里.响应头: 比如服务器的Set-Cookie和Server信息就放在这里.请求体: 比如客户端POST的数据就放在这里(对比:GET的数据放在请求行的URL里).响应体: 比如服务器返回的HTML和JSON数据就放在这里.。
## 请求流程
> dns 查询, 解析（过程） => tcp连接 => 发送Http请求 => 服务器处理请求返回HTTP报文 => 浏览器解析渲染页面(请求数据接口) => 连接结束
## 浏览器
- 渲染原理
- 允许跨域会出现什么问题
   - 跨域的访问会带来许多安全性的问题，比如，cookie一般用于状态控制，常用于存储登录的信息，如果允许跨域访问，那么别的网站只需要一段脚本就可以获取你的cookie，从而冒充你的身份去登录网站，造成非常大的安全问题，因此，现代浏览器均推行同源策略。
- 浏览器缓存机制
[]
   - 预请求
   - 协议缓存
- 垃圾回收机制内部实现
## 数据请求方法
- get
- post
- 其他方法 detele
> get 和 post 的不同
## axios 中有两个请求不用 请求拦截 如何做
## webhooks => nglix => docker
## 算法
- 'afgdfddd' 找出字符串中出现次数最多的元素
## npm 脚本传参 -- --config webpack.dev.js

## 面试点
- 法则
- uniApp
- node.js / moogDB
- react / ts
- SSR nuxt / next
- webApp
- promise Es6
- MVVM router vuex
   - 响应式数据 数据劫持
- webpack 优化
- js基础Api 设计模式
   - 防抖，节流
   - 事件环
   - 执行栈，上下
- diff 算法 持续n集成
- 云开发
- webGle
- 单元测试
## 面试问题
- sort 默认按什么规则排序
- webpack是如何实现前端模块化的
## 工作体会
- 刻意练习核心原理
- 勿说精通，应说熟悉掌握

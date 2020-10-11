# 对象
>     注：以下`对象`指全部对象类型；`普通对象`代指纯粹我们理解的应用对象<br>
大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，函数才有prototype(除Function.prototype , 本身也是Function类的原型对象，属于普通对象)
<br>所以下面的都有-对象的特性：

1. 普通对象(字面量)
> 或是`new Object()`创建
```js
// let a = {}
// let a = new Object()
a.__proto__ === Object.prototype.constructor //  true
```
2. 数组(对象)
```js
// let a = []
// let a = new Array()
a.constructor === Array // true
a.__proto__ === Array.prototype.constructor //  true
```
3. 函数(对象)
```js
// let a = new Function()
a.constructor === Function // true
a.__proto__ === Function.prototype.constructor //  true
```
> 函数的__proto__指向Function(原型对象)<br>除函数外其他对象没有`prototype`

   1. 普通函数
   2. 构造函数
      > 构造函数相当于一个函数对象
4. 实例对象(构造函数new创建的)
5. 原型对象（称谓）
    - 实例对象的`__proto__`指针
    - 函数对象的`prototype`属性
## 特点
一切皆对象(普通对象，实例对象，原型对象，普通函数，构造函数)
- 封装
- 继承 `bind, apply, call`
- 多肽
- Object.key(obj) // 把对象的key转化为一个数组
## 顶层方法（`自带方法属性`（原型链中））
所有对象都具有
- hasOwnProperty
- toString
   各对象返回的值有一定的[区别](https://www.cnblogs.com/weiqinl/p/8380060.html)
- valueOf
```js
Object.prototype.valueOf()
String.prototype.valueOf()
Date.prototype.valueOf()
Number.prototype.valueOf()
Boolean.prototype.valueOf()
Symbol.prototype.valueOf()
```

## 一.普通对象

### 构造函数Object
- Object.create()
- Object.defineProperty()
- Object.freeze()
- Object.assign()
   - 浅拷贝
- Object.keys(obj)
> 相对于for in 不会遍历原型链中的属性
- Object.is()
- Object.values()

### 创建对象
- 直接字面量 let a = {}
- new 关键字 let a = new Object()
- Object.create()   let a = Object.create()
### 继承
（构造）函数具有的方法
> `apply(this, a, b)`, `call(this, array)`, `bind`
- apply
- call
- bind
> apply(), call() 会立即执行, bind() 不会立即执行
### 拷贝对象
- Object.create()
- Json.parse()

### 名词解释
- 面向对象
- 实例化对象 / vue实例 / new一个实例 /可见渲染元素都是一个实例
- 创建过程
- 实例化过程.挂载理解
### 对象操作
- 合并两个对象
   - 扩展运算
   - 其他
- 多继承
```js
// 一个类同时继承两个类
```

## 二.数组 `33个`
### 构造函数Array
- Array.
### 原型链上方法，属性（未列入Object公共的方法属性，如toString等...）
> 是(`true`)否(`false`)改变原数组<br>
> 7个方法会改变原数组, 其他为创建新数组 vue 中函数劫持(AOP 函数切片)重写了这7个方法<br>
> 具有遍历功能的：map, forEach, reduce, filter
- true: pop, push, reverse, shift, sort, splice, unshift
- false: concat, join, slice, toString
1. 添加
- push()
- unshift() 从头部添加 `true` 
- concat() `false`
2. 删除
- pop() 删除最后一个 `true`
- shift() 删除第一个
3. 子数组
- splice(删除的开始位置, 删除的个数, 添加的元素，可为空)
- slice()
4. 排序
- reverse()
- sort()
5. 转化
- toString()
- toLocaleString()
- join()
6. 位置方法，查找
- indexOf()
- lastIndexOf()
- findIndex()
- includs()
7. 迭代方法,操作数组的callback方法
- map() `会分配内存空间，返回新数组，不改变原数组，不对空数组检测` **9ms**
   - 需要改变数据，操作数据 return
   - 返回一个新数组，可链式调用 arr.map().filter() 函数式编程
   - 待定：jsPref测速 =》map是高阶函数功能更强的同时,性能会更差，forEach应该比map快才对。因为forEach是直接对原来的数组操作，更加高效。map必然要分配新的空间来存储，有开销。函数式优点在于写法更加优雅，像数学公式，易于理解。
   - 能用forEach()做到的，map()同样可以。反过来也是如此。
- forEach() `不会返回，callback可更改原数组，不对空数组检测` **3ms**
   - 只是赋值，做一些事
- filter()
- flat `扁平化 es6`
- every()
- some()
8. 缩小方法
- reduce()
- reduceRight()
9. 扩展方法
- from()，of()，prototype.copyWithin()，includes()
### 数组操作
- 交集，并集
```js
var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
//交集
var c = a.filter(function(v){ return b.indexOf(v) > -1 })
//差集
var d = a.filter(function(v){ return b.indexOf(v) == -1 })
//补集
var e = a.filter(function(v){ return !(b.indexOf(v) > -1) })
 .concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}))
//并集
var f = a.concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}));
```
   - 使用 ES6 语法实现 new Set(a)
- 在数组头部添加元素
   - unshift
   - splice()

## 三.函数
### 构造函数
- 构造函数的new都做了些什么？
    1. JS内部首先会先生成一个空对象；
    2. 再把函数中的this指向该对象；
    3. 然后执行构造函数中的语句；
    4. 最终返回该对象实例。
- 命名上约定通过首字母大写区分(当然也可以不用大写)
- 可以通过new创建实例，也就是内部定义了this，有属性赋值(this.name = '')，所以这个实例就有一系列属性了，就像普通对象那样
- 升级为class(语法糖)

### 普通函数
- 写法
```js
   function test() { // 声明式

   }
   var test = function () {} // 表达式
``` 
### 分类
1. 构造函数
2. 普通函数 
3. 匿名函数
```js
function () {}
// 匿名函数赋值给变量
var test = function () {}
```
4. 自执行函数
```js
(function() {

})()
// 应用：创建独立作用域？？
```
5. 箭头函数：区别
    - 箭头函数不会创建自己的this
    - 箭头函数没有原型prototype
    - 箭头函数的this在定义的时候**继承自外层第一个普通函数的this**。
    - 箭头函数继承而来的this指向永远不变！！！, 但可以修改它要继承的对象的this
    - .call()/.apply()/.bind()无法改变箭头函数中this的指向
        - .call()/.apply()/.bind()方法可以用来动态修改函数执行时this的指向，但由于箭头函数的this定义时就已经确定且永远不会改变。所以使用这些方法永远也改变不了箭头函数this的指向，虽然这么做代码不会报错
    - 箭头函数不能作为构造函数使用
    - 箭头函数没有自己的arguments 箭头函数的this指向全局
    - 箭头函数的this指向普通函数时,它的argumens继承于该普通函数
    - 使用new调用箭头函数会报错，因为箭头函数没有constructor
    - 箭头函数不能用作Generator函数，不能使用yeild关键字
    - 箭头函数不支持new.target
    - 如果箭头函数外层没有普通函数，严格模式和非严格模式下它的this都会指向window(全局对象)
    - 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名
    - rest参数获取参数列表（箭头函数和普通函数都可以使用）
    ```js
        let a = (a, ...bcd) => { // rest参数（形式为...变量名） 用于获取函数的多余参数，这样就不需要使用arguments对象了
        console.log(a, bcd); // 1 [2, 3, 4]
        };
        a(1, 2, 3, 4);
    ```
    - rest参数的用法相对于arguments的优点
       1. 箭头函数和普通函数都可以使用。
       2. 更加灵活，接收参数的数量完全自定义。
       3. rest是一个真正的数组，可以使用数组的API，arguments是一个类数组的对象
    - 注意：
        1. 一条语句返回对象字面量，需要加括号，或者直接写成多条语句的return形式
        2. MDN: 箭头函数的解析顺序相对靠前：虽然箭头函数中的箭头不是运算符，但箭头函数具有与常规函数不同的特殊运算符优先级解析规则
   - [更多1](https://www.jianshu.com/p/2e01b9fd210d) [2](https://www.jianshu.com/p/422f7c033f36)
### 参照
- 箭头函数与普通函数的区别
```js
var o = {
    tex: 'hello',
    arr: ['join', 'agoh'],
    fn: function () {
        return function aa() {
            console.log(this, 'sdfsdfsdfsd') // window
        }
    }
}
o.fn()()
```
- 变量的查找会依据作用域链由内向外查找直到全局对象window
```js
var o = {
    tex: 'hello',
    arr: ['join', 'agoh'],
    fn: function () {
        return function aa() {
            console.log(art, 'sdfsdfsdfsd') // 2
        }
    }
}
var art = 2
o.fn()()
```
- this 谁调用就指代谁，箭头函数本身没有this 向上级作用域查找
```js
var o = {
    tex: 'hello',
    arr: ['join', 'agoh'],
    fn: function () {
        // console.log(this, 'sdfsdfsdfsd')
        let that = this // o 调用fn 所以this 指代o
        return function aa() { // that 接受或者这儿改为箭头函数
            console.log(that, 'sdfsdfsdfsd') 
        }
    }
}
o.fn()()
```
### 函数节流，防抖
- 研究underscore, lodash 节流，防抖源码
- 节流：在几秒时间内 只有一次触发有效
- 防抖：停止输入后间隔几秒触发（）
### 函数劫持
> 函数劫持(函数切片，AOP:面向切片编程)
传参处理
- Vue 对数组的监听
### 回调函数形式
promise 传入函数 如何返回回调函数值=》例如：antd表格 设置项中 如何能返回时间回调值 function callback()
- 因为里面会执行这个函数 把值传出去了
```js
function aa(cb) {
  let arr = [1,2,3]
  cb(arr)
}
```

## 正则匹配
- 正则匹配替换
- ^ 匹配开始
- [az] 区间 小写a到小写z
- (a|b) 或 a 或 b
- $ 结尾
- +@ 必须紧跟@

## number
- number 特性
## undefind
- 特性
## null
-特性

## 字符串
- str.startsWith('v-')
```js
"v-model".startsWith('v-') // true
//
var str="我不是一个真的对象";
typeof str // String
var str=new String("aaa")；
typeof("str")==Object;//true
```

## 引擎内置对象（原生对象，构造函数）
> 其实除了Math及全局对象，其余的为构造函数, [参见](https://www.cnblogs.com/deepalley/p/10544311.html)
`Object()`, `RegExp`, `Date` ,`Array()`, `Function()`, `String()`, `Blooen()`
- new `Error()`
- new `Xml()`
- new `Image()`
- new `Proxy()`
   - vue3的性能提升
- new `FileReader()`
- new `FormData()`
- new `URLSearchParams()`
- new `Blob()`
   - base64 比二进制大1/4
- new Array
   - 属性
      - constructor
      - prototype
      - index
      - length
      - input
   - 方法
      - concat
      - sort
- new Date()
   - 属性
      - constructor
      - prototype
   - 方法
      - getDay()
      - getYear()
      - getFullYear()
- new Function()
   - 属性
      - prototype
      - arguments
      - arity
      - caller
   - 方法
      - toString
- Math 没有构造函数
   - 属性
      - constructor
      - prototype
   - 方法
      - Math.abs()
      - Math.floor()
      - valueOf()
- arguments
- Json
- new Promise()
### js全局对象
> 全局属性和函数可用于所有内建的 JavaScript 对象。<br>
> 全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。全局对象不是任何对象的属性，所以它没有名称。<br>
> 全局对象只是一个对象，而不是类。既没有构造函数，也无法实例化一个新的全局对象。<br>

- 值属性, 顶层属性（全局属性）
> 这些全局属性返回一个简单值，这些值没有自己的属性和方法。
   - Infinity
   - NaN
   - undefined
   - globalThis
- 函数属性, 顶层函数（全局函数）
> 全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。
   - parseInt()
   - decodeURI()
   - encodeURI()
   - eval()
   - String()
   - isNaN()
   - getClass()
### 错误对象
- Error
- ReferenceError
- AggregateError
### 数字和日期
- BigInt
- Date
- Math
- Number
### 使用键的集合对象
- Map
- Set
- WeakMap
- WeakSet
### 结构化数据
- ArrayBuffer
- SharedArrayBuffer
- Atomics
- DataView
- JSON（JavaScript Object Notation）
   - 不是js的子集
### 控制抽象对象
- Promise
- Generator
- AsyncFunction
- GeneratorFunction
### 反射
- Reflect
- Proxy
### 国际化
- Intl

### 其他
- arguments
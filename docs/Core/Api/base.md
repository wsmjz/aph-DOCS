
# 应用

## 执行环境栈ECS
- 函数执行会生成一个push进数组，执行完后销毁pop, 栈型结构先进后出，后进先出
## 作用域链
> [[scope]] 属性, 链
## 原型链
> __prot__ 链
> JavaScript 是一种基于原型的语言 (prototype-based language)，这个和 Java 等基于类的语言不一样。

- [原型链](https://www.cnblogs.com/dengyao-blogs/p/11481326.html)
   ![](./yxl3.png)
   ![](./yxl2.png)
   ![](./yxl.jpg)
- js是先进行预编译还是变量提升
- 虚拟Dom
   1. 易于扩展，高性能，多端运行 toString服务端渲染。。。
- AST 抽象语法树
> 更多：v8 引擎
## 校验 检测方式
**6种方式**
- typeof (无法检测引用类型里的Array) 对象，数组，null返回的都是object
- xx instanceof type (用来检测引用类型是Array/Function/Object, 无法检测基本类型) 谁是谁的实例
```js
({}) instanceof Array // false
[] instanceof Array // false
```
- Object.prototype.toString.call([]) => "[object 构造函数]" 不能判断实例
```js
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call(1) // "[object Number]"
```
- constructor 判断当前是谁构造出来的
```js
[].constructor === Array // true
```
- Array.isArray()
```js
Array.isArray(1) // false
Array.isArray([]) // true
```
- in
```js
let obj = {
  name: 'dsf'
}
"name" in obj // true
"name11" in obj // false
```
- es6 的改进处理
## 深拷贝与浅拷贝
> 浅拷贝：一种是把一个对象里面的所有的属性值和方法都复制给另一个对象，另一种是直接把一个对象赋给另一个对象，使得两个都指向同一个对象 
> 浅拷贝修改某一个的值，另外一个也会改变；深拷贝的两个变量则是独立的，会开辟新的存储空间

### 浅拷贝
1. 直接赋值
```js
let a = {}
b = a
```
2. 把对象中的属性全部取出来赋值到另一个对象
3. Object.assign()
4. Array.prototype.concat()
5. Array.prototype.slice()

### 深拷贝
> 几种方法的差异，缺点不足
1. JSON.parse(JSON.stringify())
   - 可以实现数组和对象和基本数据类型的深拷贝，但不能处理函数。因为JSON.stringify()方法是将一个javascript值转换我一个JSON字符串，不能接受函数
2. 自己递归实现
3. lodash
   - _.cloneDeep

## 判断
- 'x' in obj  判断x属性是否存在obj对象中
- if else elseif 区别
- if if if 每一个都会执行一遍
- if else if 执行满足条件的 执行效率更高


## 常用api
- switch case 
### 数组
`reduce`
### Math
   - pardeInt
### arguments
- 伪数组，不是一个数组，但是有length，index方法
- 没有push，pop
```js
typeof arguments // 'object'
// 转化为真数组
var args = Array.prototype.slice.call(arguments);
```
### events 事件对象
- vue($events)
- 鼠标
   - e.pageX()
   - clientX
### document对象
### window对象
- 屏幕，鼠标
### Browser对象
> 不需要定义，创建
- 全局对象，window



## 其他方法
- Object.keys
- with(Obj) {}
- 子组件渲染完成后 才会执行父组件的mounted(子组件渲染完成)
- compositionApi
- v-if="name in Obj" // 属性是否在对象里面 返回布尔值
## 循环
1. while()
```javascript
while(num < 10) { // 执行条件，不确定循环次数，只要条件满足就执行，比如递归寻找上级节点

}
```
2. for() i++ for in/of
> 遍历对象 会遍历`原型链`
- for ++ 
- for in 适用于对象 会遍历所有课枚举属性
- for of 适用于数组

3. forEach()
4. map()
5. Obiect.keys()
## 模块化规范
   1. commonJs - require()
```js
// 用在写服务端  node率先使用
require()
```
   2. seaJs - requireJs - define()
   3. es6
```js
import
export
```
   4. AMD
   5. CMD
## 路由
- 浏览器路由
- patchange
## 源码原理理解
必须深入理解的源码实现原理
**整理后移入各个模块**
1. promise 实现原理
2. MVVM MVC底层原理
3. vue底层双向绑定 / render function底层做了些什么 virtual dom用到的diff算法
4. vuex
   - new Vue() new了一个Vue实例对data进行依赖收集 双向绑定 更新视图
   - minxin 混入钩子函数 to do...
## 重要概念
**整理后移入各个模块**
- 运行，编译原理，词法结构
- js引擎渲染机制
- v8垃圾回收机制 
   - [更多](https://www.jianshu.com/p/90927600671d)
- 工程化
- 工作流
- 自动化部署
- Docker 部署
## ajax => axios
- ajax
- axios
Axios是一个基于Promise的HTTP库，用于浏览器和node.js中[更多](https://www.jianshu.com/p/f438914a2437), [文档](https://www.kancloud.cn/luponu/axios)
```js
axios.defaults.withCredentials = trun
// 在请求或响应被 then 或 catch 处理前拦截它们
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})
// 所有请求配置 只有 url 是必需的。
axios({
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
})
// 方法：
axios.all()
// 简化
axios.get('url', {
  params: {
    ID: 12345
  }
}).then((response) => {})
axios.post('url', {
  ID: 12345
}).then((response) => {})
```
## 注意
- with() 的使用
> vue2 解析ast语法树 生成代码的时候有使用
```js
let obj = {
  a: 1,
  b: 2,
  c: 3
}
with(obj) {
  a,
  b,
  c
}
```
- ++i 与 i++

### 其他
- e.currentTarget
- (true && false) 
```
1 && 0 / 0
1 && 2 / 2
0 && 11 / 0
1 || 0 / 1
1 || 2 / 1
0 || 2 / 2
```
- 0, '', null, undefind 为false
- [], {} 为true
- 如何判断一个变量的布尔类型
## es6，7，8
> Chrome：51 版起便可以支持 97% 的 ES6 新特性。
> Firefox：53 版起便可以支持 97% 的 ES6 新特性。
> Safari：10 版起便可以支持 99% 的 ES6 新特性。
- Object.is优化了===运算符，处理了===的两个问题。
```
NaN === NaN // false
Object.is(NaN, NaN) // true
--------------
+0 === -0 // true 
Object.is(+0, -0) // false
```
- import()
> 为异步引入，需要的bable支持；import '' from 为同步引入
### Class类 注意点
- 实例方法 classMethod() {}
- 静态方法 static classMethod() {}
- 实例属性
   - 可以写在constructor()方法里面的this上面，也可以定义在类的最顶层 `react 中的state` 不需要const定义，调用不需要加this
   ```js
   class foo {
      bar = 'hello';
      baz = 'world';

      constructor() {
         // ...
      }
   }
   ```
- 静态属性
```js
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
或（提案）
class Foo {
   static prop = 1;
}
```
- 私有方法和私有属性
   - 命名上区别（_bar(baz) {}）
   - 在类的外部写function
   - 通过Symbol值的唯一性
   - 提案（加#）
- new.target 属性
   - 确保构造函数只能通过new命令调用。
   - 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类
- constructor() 做了什么
- super 做了什么
### promise
- 中断一个promise 返回一个 `new Promise()` 既不成功，也不失败
<!-- - [中断axios请求](https://blog.csdn.net/itKingOne/article/details/83651004) -->

## 数据处理
- 理解数据结构
### 数据管理
1. localStorage
2. sessionStorage
3. vuex
4. cookies
### 数据传输
- new URLSearchParams()
- new FormData ()
### 循环遍历
1.区别
- for in
- for of
- map
- for ++
### 递归
递归缺点: 性能差
### 树的遍历
> 前序，中序，后序
1. 深度优先遍历
- 后序
2. 广度优先遍历
3. 平级数据变成树 flat2tree
```js
function flat2tree( allData, id = "id", pid = "parentId", children = "children", rootId = "") {
  let treeMapList = allData.reduce((memo, current) => {
    memo[current[id]] = current;
    return memo;
  }, {});
  return allData.reduce((arr, current) => {
    let parentId = current[pid];
    let parent = treeMapList[parentId];
    if (parentId == rootId) {
    arr.push(current);
    } else if (parent) {
        parent[children]
        ? parent[children].push(current)
        : (parent[children] = [current]);
    }  
        return arr;
  }, []);
}
```
4. 树形结构转平行结构 tree2flat
```
function tree2flat(children: any, childrenKey: string): any {
    var arr: any[] = []
    for (var i = 0; i < children.length; i++) {
        arr.push(children[i])
        if (_.get(children[i], [childrenKey])) arr = arr.concat(tree2flat(children[i][childrenKey], childrenKey))
    }
    return arr
}
```
5. 二叉树原理， 算法
### 常见问题处理示例
1. 扁平化数据结构
```
flatData(data) {
   var res = []
   for(var k = 0; k < data.length; k++) {
      res.push({
      id: data[k].onlyid
      })
      if(data[k].children) {
         this.getSortData(data[k].children)
      }
   }
   retrun res
}
```
## 微信相关
- wx.config()
- 微信支付
- 微信分享
- **注意**
   - 安卓，Vue重定向地址不会变
   - 编码格式：application/x-www-form-urlencode 和 multipart/form-data ==> axios会把请求的数据转换成json格式，即为：application/json;charset=UTF-8  看后端接受方式 需改变编码格式传输
   - transformRequest 对data进行任意转换处理
   pm2命令

## JSON.stringify, log的剩余参数
```js
console.dir 打印详情
console.log('1', '2')
JSON.stringify('', '')
```
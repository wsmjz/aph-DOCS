# 文章博客
- 梳理最佳通用插件写法，像jq, echarts那样传参
## 前端Paas化
- [文章](http://doc.mypaas.com.cn/paas/maps/frontEnd.html)
会议纪要：
1. 具体先用哪个项目的哪个组件做试点<br>
=> 订单列表和订单详情
2. kryfe-lib中有一些代码是需要的，但整个库有些偏重（针对jssdk），该如何调整<br>
=> 第一步先做好lodash的按需加载，可以大幅度减轻kryfe-lib<br>
=> 一步一步将kryfe-lib拆分为若干个独立包，例如国际化、服务端渲染、http请求，redux相关，可一起引入也可单独引入
3. 应不应该将调用API的工作封装到组件库里<br>
=> 与后端PASS化讨论，后端API统一的，我们可以做对应API core与后端对接<br>
=> 没有通过后端PASS化统一处理的API，采用直接接受数据，不封装API的方式
4. 针对jssdk方案，对外输出包含哪些版本
   1. 提供一个包含所有组件的js文件，每个组件再提供一个单独的js文件<br>
    => 一个全量包，每个组件一个包，并做一个服务，可以根据用户选择拼接出js，将结果储存并把url地址返回给用户
   2. 是否提供一个包含react源码（除了react源码，还有其他哪些源码）的版本，和另一个只包含组件的版本<br>
    => jssdk不包含react等第三方库，强约定，若使用我们的jssdk，则必须使用react等相应的第三方库和版本
### 背景和目的
1. 公司内部：为了更好支持跨地区、多品牌、多业态的连锁门店管理，更好的快速响应市场业务变化，快速试错，快速持续迭代和打磨客如云产品，在创新性和灵活性方面更好的体验。需要抽取核心业务代码，由核心业务团队维护，并由高聚合、高封装的核心业务组件的形式产出。
2. 公司外部：对于部分客户而言，他们可能已拥有自己的或第三方的管理平台，他们不必要或是不希望直接换用客如云的产品。在这种情况下，我们就需要提供一种让客户可以按需选取部分功能嵌入他们所使用平台的方式，这便是JSSDK。
### 架构设计
- 架构图：PaaS 架构图
- core：核心业务代码。所有的核心业务逻辑都应该放在这里。依附于后端的分类，目前分为
   1. 商户基础：组织机构，认证/授权，雇员，商品
   2. 交易：订单，库存，支付，会员，营销
- component：高聚合、高封装度的核心业务组件，依赖响应模块的core。作为拿来即用，开箱即食的业务组件，是对公司内部的直接输出方式和公司外部jssdk的基础
- 框架/库：除了react，redux，immer等第三方基础框架/库之外，还有客如云前端工具库kryfe-lib
   - kryfe-lib：现存的问题主要是输出粒度过大、偏重，使用时的引入方式是import整个库，各模块之间划分不够清晰，互相之间耦合，如果只引用其中部分功能可能会报错。改造方向是，将kryfe-lib按模块和功能划分清晰、解耦，分为若干个粒度较小的包输出，并且再提供一个全量包，使用者可                  以根据自己的具体情况灵活选择。目前划分计划在架构图中可见，改造中可根据情况调整。
- 输出：针对公司内外，输出分为了私有npm仓库和jssdk两种方式
   1. 私有npm仓库：公司内部使用私有npm仓库的形式。将编译好的组件publish到私有npm仓库，供业务线通过npm直接引用组件。
   2. jssdk：公司外部使用jssdk的方式引用。将按照组件为单位编译js文件，外加一个依赖和共用的js文件，并提供一个可拼接js文件的服务，根据用户的选择，自由的拼接用户所需的js文件。
### 技术方案
1. 首先基础框架依然是react，数据管理采用redux，不可变数据方案由immutable改为immer，解决immutable代码侵入型强的问题。
2. 基础组件库依然是antd。
3. 整个工程用lerna管理。core中的每个独立模块和component中的每个独立组件都会作为一个单独的package输出，使用lerna在同一个工程中方便管理。
4. 输出的组件，都放在私有npm仓库的@kry命名空间下，业务线使用时只需在.npmrc文件中做适当的配置，便可兼容私有和公有的npm仓库。
5. 输出的jssdk，会按照独立的core和独立的component为单位，生成响应的js文件，放在服务器上。在文档站点里，我们会做一个页面，用户可在页面中选择需要使用哪几个组件，是否需要react等基础组件依赖，我们会根据用户的选择查看是否已存在相关组合，如没有，则将所需的js文件进行拼接并存储，然后返回给用户。
6. jssdk具体引用方式待补充...
### 组件梳理
需经多方讨论，认真梳理才能出结果。
### 方案验证
现先选取C端订单列表组件作为试点，进行实践性开发重构，用以验证以上技术方案是否可行。
## 前端SDK
### 优惠计算SDK
- [文档](http://gitlab.shishike.com/front_end/kryfe-discount-sdk) 到本地
- [工程地址](ssh://git@gitlab.shishike.com:38401/front_end/kryfe-discount-sdk.git)

## node-sass安装失败总结

## 前端容器化
环境包括：ci环境，灰度体验区，灰度稳定区，生产体验区，生产稳定区，新加坡环境
- package.json
```js
"release:citest": "better-npm-run citest", //ci环境
"release:gldexp": "better-npm-run k8s_release", //灰度体验区
"release:gld": "better-npm-run k8s_release", //灰度稳定区
"release:vpcprodexp": "better-npm-run k8s_release:vpcprodexp", //生产体验区
"release:vpcprod": "better-npm-run k8s_release:vpcprod", // 生产稳定区
"release:sgprod": "better-npm-run k8s_release:sgprod", // 新加坡环境
```
```js
"betterScripts": {
  "citest": {
    "command": "kryfe-script build.client --config webpack.config.js",
    "env": {
    "HOST_API": "//citestb.shishike.com",
    "LOYT_HOST": "//citestloyalty.shishike.com",
    "HOST_CDN": "//citestb.shishike.com/loyalty/"
    }
  },
}
```

## 组件的建议
- 函数组件，类组件的props都不会更新
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
## CodeReview规范（代码评审）
- 完整性检查
- 一致性检查
- 正确性检查
- 可修改性检查
- 可预测性检查
- 健壮性检查
> 敏捷开发流程

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

## 浏览器线程
> 浏览器内核是多线程的，它们在内核控制下相互配合以保持同步，一个浏览器通常由以下常驻线程组成：GUI 渲染线程，javascript 引擎线程，浏览器事件触发线程，定时触发器线程，异步 http 请求线程。
1. js引擎线程 （解释执行js代码、用户输入）Javascript 引擎线程理所当然是负责解析 Javascript 脚本，运行代码。一个浏览器进程无论什么时候都只有一个 JS 线程在运行 JS 程序。
2. GUI渲染线程 （绘制用户界面、与js主线程是互斥的），界面需要重绘或者回流时，该线程就会执行。当JS引擎执行时GUI线程会被挂起，GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。
3. http网络请求线程 （处理用户的get、post等请求，等返回结果后将回调函数推入任务队列）XMLHttpRequest是通过浏览器新开一个线程进行请求，并将检测状态变更，状态发送变更异步线程就产生状态变更事件，将这个回调函数放入事件队列中，再由JavaScript引擎执行。
4. 定时触发器线程 （setTimeout、setInterval等待时间结束后把执行函数推入任务队列中）。浏览器定时计数器并不是由 JavaScript 引擎计数的（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确），由单独的定时触发器线程计时；并且，setTimeout的等待时间结束后并不是直接执行的，而是先推入浏览器的一个任务队列，在同步队列结束后在依次调用任务队列中的任务。注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。
5. 浏览器事件处理线程 归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）。（将click、mouse等交互事件发生后将这些事件放入事件队列中）当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理。这些事件可以是当前执行的代码块，如：定时任务-setTimeout；也可来自浏览器内核的其他线程，如：鼠标点击、AJAX 异步请求等，但由于JS的单线程关系，所有这些事件都得排队等待 JS 引擎处理。

### js引擎线程
- Javascript是单线程运行、支持异步机制的语言。js主线程模块(DOM，ajax, http)，js消息线程模块（event loop，异步任务通知，IO设备，定时事件）
- 主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在”任务队列”中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取”任务队列”，依次执行那些事件所对应的回调函数。执行栈中的代码，总是在读取”任务队列”之前执行

### 执行任务（执行栈）
> 所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务
- 执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入”任务队列”（task queue）的任务，只有”任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。
- 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
主线程之外还有个消息线程，消息线程存在任务队列，只要异步任务有了运行结果，就在”任务队列”之中放置一个事件。
- 一旦”执行栈”中的所有同步任务执行完毕，系统就会读取”任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
- 重复上一步
```js
// 2 3 5 4 1
  setTimeout(function() {   // macrotask
    console.log(1);
  }, 0);
  new Promise(function executor(resolve) {
    console.log(2);
    for( var i=0 ; i<10000 ; i++ ) {
      i == 9999 && resolve();
    }
    console.log(3);
  }).then(function() {
    console.log(4);   // microtask
  });
  console.log(5);
```

### 任务队列
> 浏览器的任务队列不止一个，还有 microtasks 和 macrotasks, 整个的js代码macrotask先执行，同步代码执行完后有microtask执行microtask，没有microtask执行下一个macrotask，如此往复循环至结束
- 在ECMAScript中，microtask称为jobs，macrotask可称为task。
运行机制：
- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）
- microtasks(微任务): 可以理解是在当前 task 执行结束后立即执行的任务, 也就是说，在当前task任务后，下一个task之前，在渲染之前。所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。
   - process.nextTick process.nextTick方法可以在当前”执行栈”的尾部—-下一次Event Loop（主线程读取”任务队列”）之前—-触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前，插队到任务队列最前面。如果有多个process.nextTick语句（不管它们是否嵌套），将全部在当前”执行栈”的尾部执行。如果process.nextTick 事件太多，执行时长过长也会阻塞事件循环。
   - promiseObject.observe
   - MutationObserver 监视对DOM树变化
   - Event
   - Promise.then(浏览器自带版本)
- macrotasks(宏任务):
   - setTimeout
   - setInterval
   - setImmediate 在当前”任务队列”的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像。多个setImmediate可能则需要多次event loop才能执行完。
   - I/O
   - UI渲染
   - script主代码执行
   - postMessage、requestAnimationFrame、MessageChannel、setImmediate
- 事件循环中，每一次循环称为 tick。据whatwg规范介绍：
   - 一个事件循环(event loop)会有一个或多个任务队列(task queue)
   - 每一个 event loop 都有一个 microtask queue
   - task queue == macrotask queue != microtask queue
   - 一个任务 task 可以放入 macrotask queue 也可以放入 microtask queue 中
   - 调用栈清空(只剩全局)，然后执行所有的microtask；当所有可执行的microtask执行完毕之后。循环再次从macrotask开始，找到其中一个任务队列执行完毕，然后再执行所有的microtask，这样一直循环下去
> 备注：官方的promise和polyfill版的promise两者有很大区别，前者为microtask形式，后者通过setTimeout模拟的macrotask形式
### 定时器
- setTimeout算异步吗？<br>
调用 setTimeout 函数会在一个时间段过去后在队列中添加一个消息。这个时间段作为函数的第二个参数被传入。如果队列中没有其它消息，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少的时间，而非确切的时间。
也就是说，setTimeout()只是将事件插入了任务队列，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。setTimeout 里面的代码是在当前环境中的任务执行完了「之后」才执行，实际上是js引擎调用的event loop模块，event loop有4ms的时间间隔，并不是真正意义上的同时进行。Ajax可以和js代码同时运行的，因为它是有浏览器的http网络请求线程负责，并不是js引擎。
   - setInterval vs setTimeout模拟定时执行<br>
setTimeout计时到后就会去执行，然后执行一段时间后才会继续下一个setTimeout，中间就多了运行回调函数代码的时间；
而setInterval，定时线程会在每次到时候精准地将回调函数推入任务队列，中间没有运行代码的时间，存在上次未执完的可能性，会导致要么某次被跳过，要么间隔时间比预期小；而且把浏览器最小化显示等操作时，浏览器会把setInterval的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行时。
```js
// setTimeout vs setInterval
setTimeout(function fn(){       
  // TODO
  setTimeout(fn, 100);
}, 100);
setInterval(function(){
  // TODO
}, 100);
```
### webworker
为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但完全受控于主线程。其实就是在Javascript单线程执行的基础上，开启一个子线程，进行任务处理，而不影响主线程的执行，当子线程执行完毕之后再回到主线程上，在这个过程中并不影响主线程的执行过程。<br>
Web Worker的基本原理就是在当前的主线程中加载一个只读文件来创建一个新的线程，两个线程同时存在，且互不阻塞，并且在子线程与主线程之间提供了数据交换的接口postMessage和onmessage。来进行发送数据和接收数据。其数据格式可以为结构化数据（JSON等）。子线程并不支持操作页面的DOM。
- vs SharedWorker
WebWorker只属于某个页面，不会和其他页面的Render进程（浏览器内核进程）共享，所以Chrome会创建一个新的线程来运行Worker中的JavaScript；SharedWorker是浏览器所有页面共享的，所以Chrome浏览器为SharedWorker单独创建一个进程来运行JavaScript。
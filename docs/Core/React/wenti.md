# 常见问题

> 解决问题思路

- 确保已刷新
- 表单默认值
- 最低复现 demo
- 一旦发现逻辑很复杂，那么可以试着抛弃当前方案 寻找更优解

## DDD 领域模型

## tdd 开发模式

## 数据管理-变量问题

- 异步获取的，使用参数传递(或全局变量-不推荐)

```js
let res = await api;
save(res?.data);
```

- 对数据修改的 使用 reducer
- 更新复杂数据结构 注意改变引用地址 否则视图不更新 [...arr] react 机制为浅比较
- react 18 为异步(并发) 批量更新 （可使用全局变量 或 useRef 获取最新值）
- 类组件，函数组件更新不同
- 多次 set 一个值 只会更新最后一次，可使用函数 set(num => num + 1) 多次使用，每一次基于上一次更新

## 排查表现效果为视图为更新

- 暴力试着绑定 key 值更新，注意会有其他副作用

## antd 问题

- Q: 表格 分页记住所有选中项 ；A:采用二维数组 每一项记录每一页的数据
- Q:注意 Model 关闭不会销毁，对表单默认值(初始渲染一次)有影响；A: 可设置 Model 销毁属性 或 手动 true?Model:null
  - 添加销毁属性
  - 外层销毁组件
- 注意销毁 全局变量
- 表单布局，两列，一列，注意清楚 padding, 避免百分比错位计算
- 注意 updateKey 组件
  - 录制中心 循环输入框 不能加 key
- colmuns 增加配置 复合搜索 （注意 protable 提供的配置自定义搜索）
- 注意 Upload 的自定义上传 customRequest

## 区别

- 其实越发感觉 vue 版本更新的学习成本比较高，而 react 相对保值，内部更新优化 用户无感知
- 面试要体现 存在即合理 都有用处场景 但我们精力有限 肯定要侧重掌握一个 但也有能力根据公司要求转化 如果公司愿意给我可观的报酬 当然也愿意去转化
- 其实很多也是人为的说话，站在更高一层 从哲学的角度 可以无限放大有点 缩小缺点，反之亦然；而对于我们普通工作者，能方便尽快的完成开发工作就是好的，毕竟还有诗和远方，而领域的追求者会去抹平差异，提升优化 现在的工业发展 进步也是这样 必定是有工作者 科学家去提升的
  > 1. 设计思想不同：vue 追求的是开发的简单，而 react 更在乎方式是否正确,合理<br>
  > 2. 对数据的感知不同：vue(Know)双向 this.a = 0, react(Do not Know)单向 this.setState({a: 0})<br>
  >    react 与 vue 都是一种解决方案而已，各有所长，不存在于好坏，**提升核心竞争力**
- react 是单向数据流，vue 双向数据流 v-module（props,\$emit 的语法糖，其实也是子组件@emit 触发父组件的方法，react 回调函数向父组件传值）
- react 与 vue 中的 computed，Watcher
  - react 的数据是不是可变的；
  - vue 的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立 Watcher 来监听，当属性变化的时候，响应式的更新对应的虚拟 dom
- react 整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在 react 中，是单向数据流，推崇结合 immutable 来实现数据不可变。react 在 setState 之后会重新走渲染的流程，如果 shouldComponentUpdate 返回的是 true，就继续渲染，如果返回了 false，就不会重新渲染，PureComponent 就是重写了 shouldComponentUpdate，然后在里面作了 props 和 state 的浅层对比。
- react 做的事情很少，很多都交给社区去做，vue 很多东西都是内置的，写起来确实方便一些， 比如 redux 的 combineReducer 就对应 vuex 的 modules， 比如 reselect 就对应 vuex 的 getter 和 vue 组件的 computed， vuex 的 mutation 是直接改变的原始数据，而 redux 的 reducer 是返回一个全新的 state，所以 redux 结合 immutable 来优化性能，vue 不需要
- react 的性能优化需要手动去做，而 vue 的性能优化是自动的，但是 vue 的响应式机制也有问题，就是当 state 特别多的时候，Watcher 也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用 react，**更加可控**。
- react 对比 vue
  - react 更加底层，偏原生 如 map; vue 封装了 api 以提供 v-for，v-if; 在 React 中写组件就是在写函数，函数拥有的功能组件都有。而 Vue 更像是高度封装的函数，在更高的层面 Vue 能够让你轻松的完成一些事情；与高度的封装相对的就是损失一定的灵活，你需要按照一定规则才能使系统更好的运行
  - vue 能保证最低代码规范，质量；react 也是因为其灵活（渲染 h1-h5, vue 也提供了高阶渲染函数 render 的使用），自由，生态也灵活，vue 所有生态工具都集成到他的实例上；所以由于开发者水平不一样 react 容易导致项目架构杂论，混乱
  - 喜欢 react 带来的自由编码体验; vue 的有效利用模板机制 回归了 html 的本质,且生态更明朗
- react 是**类式的写法**，api 很少

```js
class App {
  constructor() {}
}
```

- vue 是**声明式的写法**，通过传入各种 options，api 和参数都很多。所以`react结合typescript更容易一起写`，vue 稍微复杂;vue 结合 vue-class-component 也可以实现类式的写法，但是还是需要通过 decorator 来添加声明，并不纯粹

```js
new Vue({
    template,
    methods,
    watch,
    props,
    ...
})
```

- react 可以通过高阶组件（Higher Order Components--HOC）来扩展，而**vue 需要通过 mixins**来扩展；Vue 也不是不能实现高阶组件，只是特别麻烦，因为 Vue 对与组件的 option 做了各种处理，想实现高阶组件就要知道每一个 option 是怎么处理的，然后正确的设置。[详情](http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6/)
- react 中相对于 vue 的计算属性可用`get拦截`实现, (没有缓存特性，可借助第三方插件`memoize-one`来实现)

```js
state = {
    name: '小怂',
    age: 18
  }
  get computed() {
    let { name, age } = this.state
    console.log('我被调用了', new Date())
    return (
      <h1>
        {name}+{age}
      </h1>
    )
  }
```

- vue 核心：响应式数据系统，组件系统
  - 实例中的 data 与其渲染的 DOM 元素的内容保持一致，通过设置属性访问器实现
- react 没有 vue 中的 watch；通常情况下，React 的状态都是手动 setState 变化的，React 不监听数据变化；；在实践中可以尝试在 state 里放一个定义了 getter 和 setter 的对象，在 setter 里来发这个请求，响应后再 setState 回去。。。`watch-props 库，提供类似于 vue watch 这样的能力`(做业务-监听[弹框](https://www.jb51.net/article/147331.htm)，都是通过生命周期监听 props 变化 ，这样 bug 会很多,容易导致死循环等问题，`watch-props`目的就是减少使用一些 react 生命周期。)

```js
componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {

    }
}
```

## 中间件

> redux 默认只处理同步，应用中间件处理异步=》就是对 action,dispatch 之前，之后做一些事情<br>
> vuex 自带提供了异步处理

- 就是做了一个函数切片(重写 dispatch)，相当于 vue 中对数组方法的重写

```js
let store = store.dispatch;
store.dispatch = () => {
  console.log("数据状态更新前");
  store.dispatch();
  console.log("数据状态更新前");
};
```

- 日志中间件
- 错误中间件

## useEffect 是浅比较吗

> 是的，react 很多功能应用一般都是浅比较，需要根据开发者能力自行做优化

- 如何实现 深比较？？

## setState 是同步的还是异步的

- 放入 setTimeout 中会 同步执行
- 直接调用会有一个队列机制 异步执行
  - 源码体现
    > 会有一个队列机制<br>
    > 是否批次 `变量isBatchingUpdates = false` 控制同步更新还是异步更新，batchedUpdates 函数会修改`isBatchingUpdates = true`
- 多次调用会有一个队列机制，最后更新

## 避免将 props 的值复制给 state！这是一个常见的错误：

```js
constructor(props) {
 super(props);
 // 不要这样做
 this.state = { color: props.color };
}
```

> 如此做毫无必要（你可以直接使用 this.props.color），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。

只有在你刻意忽略 prop 更新的情况下使用。此时，应将 prop 重命名为 initialColor 或 defaultColor。必要时，你可以修改它的 key，以强制“重置”其内部 state。

- 自己的弹框组件 需要根据 props 改变 内部也需要维护 state?? - 修改 key

## 其他

- PureComponent 组件实现
- 为什么子组件的 props 就能拿到父组件传递的属性呢？？
  > bable 会解析 jsx 上传递的属性值
- 不能用 math. key 不一样
- 新生命周期？？
- immunetable？？
  - 解释： https://cloud.tencent.com/developer/section/1374219
- usedispatch redux 中
- uselayouteffect 在 redux 中取消订阅

## 理解 fiber 架构

- 是链表结构
- 虚拟 dom ==> fiber ==> dom
  - 如何从虚拟 dom 构建 fiber？？ 源码-fiber 树
- 会有一个 fiberRoot 每次更新 都是从 root 开始更新
- fiber 调和 中断 优化，是为了中断，恢复（可以出循环）；不是高效（新创建了这么多东西并不（只）是为了高效， 但是为什么又要这么去做，是有一个整体架构的平衡，取舍）
- setState 都是从根节点开始调度 31 个赛道优先级
- 赛道 跟优先级不一样；有对应关系
- 调度，调和是一个东西吗？
- fiber 优先级怎么提现的
- 你比如要讲解源码，应该讲解 useState 是如何顺序的，diff 内部实现，用了啥设计模式，用 web worker 处理 diff 大量计算，优化了啥
- 异步 批量更新？？
- 初次渲染 非批量更新？？

## 为什么会出现 hooks

- 解决了什么问题？？
- 设计初衷（要去理解一个新事物，新技术的初衷，解决了什么问题）

## useState,useEffect 等 hooks 架构，构建流程

## react 组件的几种复用方式以及各自的优缺点？？

- HOC 高阶组件
- 继承

## 为什么需要 react-redux:

一个组件如果想从 store 存取公用状态，需要进行四步操作：import 引入 store、getState 获取状态、dispatch 修改状态、subscribe 订阅更新，代码相对冗余,我们想要合并一些重复的操作，而 react-redux 就提供了一种合并操作的方案
react-redux 提供 Provider 和 connect 两个 API，Provider 将 store 放进 this.context 里，省去了 import 这一步，connect 将 getState、dispatch 合并进了 this.props，并自动订阅更新

- 还有 connect，使用装饰器模式实现，所谓装饰器模式，简单地说就是对类的一个包装，动态地拓展类的功能。connect 以及 React 中的高阶组件都是这一模式的实现

## 与 vue 的性能对比优化

- react 改进了 fibe, 分片渲染 Dom
- vue 使用 Proxy
- vue new 一个实例 原型上的东西都有（感觉初次加载会耗费很多性能， 但是自我认识，感觉随着现在硬件技术性能的提升，而后软件的性能消耗可以忽略一些）
- ast 语法树描述的只能是 Dom 属性
- 虚拟 Dom 可以加入自定义属性
- vue2 采用的是对 data 数据的递归监听，数据一改变，自动更新数据=》更新视图<br>
  react 采用的是手动调用 setState 方法，配合 immunite.js 做的性能优化
- react 外国人追求自由, vue 国人追求中庸（但是在 diff 算法上，vue 是尽可能的追求极致速度， 而 react 却并没有那么快，做了一个 fiber 调和）
- Vue3 中新增的 setup()，会在 beforeCreate 之后，created 之前执行。选项 d：React 中虚拟 DOM 的 diff 算法复杂度是 O(n³)。这两个选项是不正确的。Vue3 中新增的 setup()函数代替了 2.x 版本的 beforeCreate、created()函数，它会在 beforeCreate 之前执行。React 中虚拟 DOM 的 diff 算法复杂度是 O(n)。
- setState 用来修改组件状态，此过程是异步的。这个选项是不正确的。目前在事前处理内部的 setState 才是异步的。
- react 是库，vue 是框架，这是本质的区别

## 讨论

- vue3 保留了自己模板的特点 setup 综合了 react 的自由
- 面向开发者不友好 可以做一些封装
- 见仁见智：视图与逻辑本身也是人为的分离，如果不是特别，某些要求，当然这种分离也更符合大众的审美观念
- 解决部署过后的缓存问题
  - 样式文件加 随机字符串
- 登陆后，跳转到之前的历史纪录页面
- swagger 生成客户端 ts 请求
- webpack 中配置别名，路径，可引入自己的本地文件，去覆盖 node_modules 里面的文件

## 待迁移

- 架构师素质：成长计划 时间管理 项目管理
- 做一个电子签名插件
- 有没有大佬用过 avue-form-design 这个表单拖拽插件的
- vite 项目
  > https://github.com/xuya227939/tristana
- fetch 不支持 中断，上传网络进度监听, 不支持取消
- 并发 并行的区别
- Commons es6 理解个模块化方案历史
- 前端知识每日：http://www.h-camel.com/api.html
- vue -ui 框架
  - http://iview.talkingdata.com/#/components/guide/install
- 按图索骥的学习
  - 把知识点构建成一棵树，要学会触类旁通
- openlayer geoserver
- https://cycle263.github.io/articles/tags/
- https://slbyml.github.io/links/
- http://obkoro1.com/web_accumulate/
- 面试要点脑图：https://www.processon.com/view/link/5f70467ce0b34d327932fd90
- 插件就是给一个会自动执行的回调函数
- 有条不紊的学习，切不可操之过急
- 算法 网络协议不会过时
- 指令 解析器
- 兵器-vue 秘籍-算法 内力-
- 养成学习习惯， 习惯的力量学习，要持续学习，学习方法论，资源整理，核心原理理解
- 简历 成长了什么…
- 断电续传
  - 并发 6 次，6 个同时请求
  - TCP 慢启动
  - 包大小匹配切片大小
- 不用 sort 排出前面 3 个
- 编译 优化好 交给浏览器；；；编译原理写 webpack 插件
- 自己认识的自己 别人眼中的自己 想成为的自己
- 单向 双向 数据流 对比 是否重新赋值；；返回新值
- 兴趣 坚持 好好对待
- 大屏：https://github.com/chellel/dashboard-project
- 人的身体 精神 意志健康
- 刻意练习 动态规划
- 成功的人不是赢在起点，而是赢在转折点
- 人生或是通达，或是愚钝 最幸福，活得大头大脑，不用想太多
- 通透 ，快乐付出，不要奢求别人，去包容，去理解周围，可控范围内
- 真正的自由是你不在以别人对待你的方式 来判断自己的价值
- 成熟在于 正视别人的不足 能去包容，接受世界的态度；不要去品论别人，可以说建议-
- 我们每个人从一出生就知道了终点，结果， 人生（事情）重要的是享受过程，精神，肉体体验
- 在社会上游走打拼，如果没有足够的能力洞悉和防备，很容易掉入陷阱
- 野心要和能力匹配。贵有自知之明
- 我们应该去放大自己的长处，而不是去弥补短处 -- 任正非（做专业的事，自己天赋的事） 时光匆匆，活在当下，做有兴趣的事，做热爱。擅长，有价值的
- 努力才能谈公平，绝对自律才是绝对自由
- 温柔岁月 安静善意美好的看待周围 细细品尝
- 通达 看透事物名利 不焦不燥 不说透
- 快乐，健康，真心，感情；最重要
- 社会太浮躁，信息量太多，要学会清净信息，清净自己，学会信息的取舍
- 本着哲学论的方式去看待，学习事物（没有绝对的好与坏），或很纠结，或也很清澈
- typeScript 上的应用 vue 不方便
- https://slbyml.github.io/links/
- http://obkoro1.com/web_accumulate/
- https://giserman001.github.io/blogs/miniprogram/
- https://qq1037305420.github.io/Blog/
- https://giserman001.github.io/blogs/article/strategy/T_vue-plugin.html

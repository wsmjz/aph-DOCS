# React

**对比 Vue 学习**
健康，快乐工作是基础 1
哲学：我们的精力是有限的 如何安排时间优先级 高效利用 学习最核心的知识，一专多能 不可面面俱到，要深切认知 事物是发展变化的 要以不变应万变 学好核心知识 触类旁通，整合现有网络资源，库
核心：**组件，状态，属性，jsx，生命周期**

- 平台
  - react-dom：web
  - react-native：app
    `属性`, `状态提升`，`setState`,`事件机制`，`错误边界`，`Content`，`代码分割`
    > 组件，属性，状态，生命周期，路由，Store，Hooks, 顶层 Dom 方法，事件，中间件<br>
    > react 和 vue 解决的都是视图层的问题，也就是封装了 dom 操作的 api, 数据绑定， 用虚拟 dom 比对做了 Dom 更新的性能优化，之后浏览器如果直接解决了这个问题，也就不需要这框架了
- vue 的 render 函数，react 通过 bable（babel:presets:react-app）转化成 React.createElement 函数 =》 然后都是转化成虚拟 dom 再做 diff 比对，其实这两个都是做的这个底层 dom 的操作，双向，单向绑定数据与视图；然后 vue 是向上封装了更多的 api；也是方便开发者，也是限制了开发者需按照作者的更多约定去开发; **jsx 语法可以防止网络安全漏洞攻击**
- react 强调不可变数据（方便判断更新），vue 是可变数据 （引用类型的地址没有改变，所以每次修改数据是变换的）
- 选择 react 的一大原因就是 一次学习 永久使用 api 稳定 几年都是 setState 相比 vue 1.0 2.0 3.0 很多 api 用法变化很大
- 特点
  1.  单向数据流（为什么一直强调是单向呢）
  2.  技能规范要求，限制少，灵活，重原生
  - hooks 可以跨度传值 相当于 provide/inject
  - 事件是通过事件委托的方式来绑定的 document
  - 唯一 ID 的作用
    - 做事件委托
  - diff 是通过 key 来做的
- 选择 react 的理由 (自己理解)
  - react 变化好调试 只需要关注函数执行，函数返回值 断点一下就能找到数据问题，是否更新
  - 其实一次学习 心智负担更小，（几年用户 api 都是 setState 没怎么改变，但 vue 几个版本的 api 使用变化很大）
  - react 是一个库，赋予了更大的灵活性，vue 是一个框架，默认初始性能更高（比如更新，同样代码 react 需要 useMemo 缓存），所以对于成熟开发者应选择 react 库，得到更多的灵活与自由，再去学习 vue 框架优势去开发架构适配于自己公司项目的框架，我想这也是市场上对于初学者选择 vue, 大厂选择 react 的原因吧
  - 更好的支持 ts

## 基础

- react 单向 数据可以改视图。视图改数据得手动：合成事件-onClick:setstate
- 一个根节点，可以为空
- 花括号中必须是 jsx 表达式（有返回值），里面不能写 if，可以是基本类型（直接写字符串，null,undefind 代表空元素），数组；不能是对象
- 但是 style 需要写成对象，或虚拟 dom;

```
div style={{color:red}}
```

- className
- map 循环，有返回值，key 唯一值，不写 index？？原因
- vue 模版有缺陷，用 jsx 语法，不如直接用 react，jsx 语法非常具有编程性，比如这儿逻辑我就想渲染一个 UI 视图

## 目录纲要

> React.Component<br>
> 组件更新生命周期：static getDerivedStateFromProps() => shouldComponentUpdate() => render() => getSnapshotBeforeUpdate() => componentDidUpdate()

- 调度
- 协调
  - 会让出 5S
- 更新
- util
  - 最小堆

### 要点

- 同步异步，IO 函子
- 状态提升
- 事件处理
- 条件渲染
- 组合 & 继承
- 哲学
  - 核心就是围绕`如何构建快速响应`的大型问帮应用

## 优化

- 降低渲染优先级

## 新特性

- 双缓冲
- 水合
- 优先级

## 服务端渲染

- ssr
- ssg
- ss...

### 高级

- Context
  - 共享数据
- Refs
- Fragments
- 错误边界
- 高阶组件
- 性能优化
- Hook

### APi(少)

- React.Component
  - 生命周期
  - 实例属性
  - class 属性
  - 其他 APIs
    - setState()
    - forceUpdate()
- ReactDOM.render() 等
- 其他合成事件，Dom 元素写法

## jsx

- DOM 元素会经过 bable 编译([解释器](https://www.babeljs.cn/repl))，再经过 react 提供的 createElement 方法转化成 react 元素

## 属性

- 类型校验`react-type`

## 状态

- 状态提升，共享数据，每个组件内部使用的 state，改为 props 传入
- setState 方法实现 =》状态对象不是覆盖 合并 {...state, ...privi}
- 渲染是一个独立行为，props、state 在单次渲染中保持不变，即使是渲染中的异步函数调用使用的也是本次渲染的 count 值；这就解释了为什么我们需要使用 setState 方法更新 state 而非直接修改，它能确保在单次渲染中 state 不受污染。

## 通信

1.  回调函数
2.  redux-react
    - Provid

## 组件 React.Component

> render() 方法是 class 组件中唯一必须实现的方法
> render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且**它不会直接与浏览器交互**
> 如需与浏览器进行交互，请在 componentDidMount() 或其他生命周期方法中执行你的操作

- 函数组件
  - 实例难以销毁，影响性能
  - 自身有状态
  - 函数组件的性能高于 class
- 类组件
  - 无状态
- 插槽
- 组件传值（Context）
  - 跨组件传值（广播）
  - 控制反转（将逻辑提升到组件树的更高层次来处理）
  - 组件组合
- refs
- 组件组合，嵌套，插槽

### 分类

- 函数式组件
  - 纯函数 不会改变入参
  - 非纯函数
- Class 类组件
- 有状态组件
- 无状态组件
- 受控组件
  - 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
- 高阶组件

### 高阶组件

```js
// 插槽
<div left={组件}></div>;
{
  props.children;
}
{
  props.left;
}
```

### 生命周期

- 当改变 state 时触发 componentWillUpdate，render，componentDidUpdate 函数，其他的函数都只是调用一次
  > 常用的，不常用的，过时的
- 见下

### class 属性

- defaultProps
  defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况。例如

```js
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
render() {
    return <CustomButton /> ; // props.color 将设置为 'blue'
  }
```

- displayName

### 实例属性

- props
- state

### 其他 Api

> 手动调用

- setState()
  - 数据更新是为同步，视图渲染为异步
- forceUpdate()
  > 默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染。
  > 调用 forceUpdate() 将致使组件调用 render() 方法
  > 通常你应该避免使用 forceUpdate()，尽量在 render() 中使用 this.props 和 this.state

## 生命周期

> React 主动调用

### 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

### 更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

### 卸载

当组件从 DOM 中移除时会调用如下方法：

- componentWillUnmount()
  > 在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等

### 错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- static getDerivedStateFromError()
- componentDidCatch()

## ReactDOM

可以把这些方法用于 React 模型以外的地方

### render()

```js
import ReactDOM from "react-dom";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### hydrate()

ReactDOM.hydrate(element, container[, callback])

## DOM 元素

React 实现了一套独立于浏览器的 DOM 系统，兼顾了性能和跨浏览器的兼容性

- 在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式。例如，与 HTML 中的 tabindex 属性对应的 React 的属性是 tabIndex
  - onclick -> onClick

### 属性差异

React 中**自己实现的用法**与原生 Html 中的用法存在差异

- checked
- className
- onChange
  - onChange 事件与预期行为一致：每当表单字段变化时，该事件都会被触发。我们故意没有使用浏览器已有的默认行为，是因为 onChange 在浏览器中的行为和名称不对应，并且 React 依靠了该事件实时处理用户输入

## 合成事件

事件处理

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写
  - onclick -> onClick

## ReactDOMServer

ReactDOMServer 对象允许你将组件渲染成静态标记。通常，它被使用在 Node 服务端上

## 性能优化

- React.Fragment 空标签 <>: 语法糖

## 讨论

- [知乎讨论](https://www.zhihu.com/question/294210442)
- 组件可以接受任意 props，包括基本数据类型，React 元素以及函数
- 想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们
- js es6 中 class 的方法默认不会绑定 this 所以需要手动 call 绑定 this
- 这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this
- react 的上层开发者要更多一些
- 满足域内域外 的研发发布体系(客如云)
- 可配置表单

## hooks(钩子)

- 解决类组件实例难以销毁的性能问题，让函数组件也具备了自身状态
- hooks 开发动机是解决 难以复用类组件之间的逻辑问题 与状态管理无关
- 你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷。
- 复杂组件变得难以理解 为了解决这个问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。
- hooks 是闭包 + 数组？？？ 暂记
- 不用做存储，就不用 hooks

### Hooks 的规则

钩子是 JavaScript 函数，但它们强加了两个额外的规则：

- 只能在顶层调用 Hooks。不要在循环，条件或嵌套函数中调用 Hook
- 仅从 React 功能组件调用 Hooks。 不要从常规 JavaScript 函数中调用 Hook。 （还有另一个有效的地方叫 Hooks - 你自己的定制 Hooks。）
- React 提供了一些像 useState 这样的内置 Hook。你还可以创建自定义 Hook 以在不同组件之间重用有状态行为。
- useState 与 this.setState 的异同

```js
import { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
function ExampleWithManyStates() {
  // 多次使用
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // ...
}
```

### react 内置 hook `React 16.8.0 是第一个支持 Hook 的版本`

- 名为 useFriendStatus 的自定义 Hook

```js
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

它将 friendID 作为参数，并返回我们的朋友是否在线。
现在我们可以从两个组件中使用它：

<!-- ```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
```js
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
``` -->

这些组件的状态是完全独立的。钩子是重用有状态逻辑的一种方式，而不是状态本身。 事实上，每次调用 Hook 都有一个完全隔离的状态 - 所以你甚至可以在一个组件中使用相同的自定义 Hook 两次。
`custom hook`更像是一种约定而非功能。如果函数的名称以 use 开头并且它调用其他 Hook，我们说它是一个 Custom Hook。useSomething 命名约定是 linter 插件如何使用 Hooks 在代码中查找错误的

## 注意项

- react 与 vue 在设计模式上的不同
  - vue 是单例模式(构造函数, 构造函数中有 this,所以 vue 中有 this)，react 是 class 类语法(super 是如何绑定的 this)
- this 绑定

```js
// 1.
constructor(props) {
  // 其实是es6 中的this绑定方法
  this.handleClick = this.handleClick.bind(this);
}
<a onClick={this.handleClick}></a>

// 2. 箭头函数保证this
<a onClick={() => {this.handleClick()}}></a>
```

- 方法写做箭头函数，保证 this 为当前类的实例
- super(props) 把参数传递给父类
- this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。
- jsx 与 react 并无直接关系
  - 每个 JSX 元素只是调用 React.createElement(component, props, ...children) 的语法糖
- 对于使用 ES6 的 class 关键字创建的 React 组件，组件中的方法遵循与常规 ES6 class 相同的语法规则。这意味着这些方法不会自动绑定 this 到这个组件实例。 你需要在 constructor 中显式地调用 .bind(this)

```js
   constructor(props) {
    // 这一行很重要！
    this.handleClick = this.handleClick.bind(this);
  }
```

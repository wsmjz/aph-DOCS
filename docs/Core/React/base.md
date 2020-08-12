# React
- 特点
   1. 单向数据流
   2. 技能规范要求，限制少，灵活，重原生
   - hooks 可以跨度传值 相当于 provide/inject
## 基础
### 属性
- 类型校验
### 状态
- 状态对象不是覆盖 合并 {...state, ...privi}
### 组件
- 函数组件
   - 实例难以销毁，影响性能
   - 自身有状态
- 类组件
   - 无状态
- 插槽
- 组件传值（Context）
  - 跨组件传值（广播）
  - 控制反转（将逻辑提升到组件树的更高层次来处理）
  - 组件组合
- refs
- 组件组合，嵌套，插槽
```js
// 插槽
<div left={组件}></div>
{props.children}
{props.left}  
```

## 讨论
- 组件可以接受任意 props，包括基本数据类型，React 元素以及函数
- 想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们
- js es6 中 class 的方法默认不会绑定 this 所以需要手动call 绑定this
- 这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this
## sdf
- 满足域内域外 的研发发布体系
- 可配置表单
## hooks(钩子)
- 解决类组件实例难以销毁的性能问题，让函数组件也具备了自身状态

- 你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷。
- 复杂组件变得难以理解 为了解决这个问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。
### Hooks的规则
钩子是JavaScript函数，但它们强加了两个额外的规则：
- 只能在顶层调用Hooks。不要在循环，条件或嵌套函数中调用Hook
- 仅从React功能组件调用Hooks。 不要从常规JavaScript函数中调用Hook。 （还有另一个有效的地方叫Hooks - 你自己的定制Hooks。）
- React提供了一些像useState这样的内置Hook。你还可以创建自定义Hook以在不同组件之间重用有状态行为。
- useState 与 this.setState的异同
```js
import { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
function ExampleWithManyStates() { // 多次使用
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```
### react 内置hook `React 16.8.0 是第一个支持 Hook 的版本`
- State Hook
   - useState
- Effect Hook
   > Effect Hook中的useEffect增加了在功能组件执行副作用的功能。它与React类中的componentDidMount，componentDidUpdate和componentWillUnmount具有相同的用途，但统一为单个API
   - useEffect
   ```js
   import { useState, useEffect } from 'react';

   function Example() {
      const [count, setCount] = useState(0);

      // 类似componentDidMount 和 componentDidUpdate:
      useEffect(() => {
         // Update the document title using the browser API
         document.title = `You clicked ${count} times`;
      });

      return (
         <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
         </div>
      );
   }
   ```
- Custom Hooks
- 不常用内置Hook
   - useContext允许订阅React上下文而不引入嵌套
   - useReducer允许使用reducer管理复杂组件的本地状态
- 名为useFriendStatus的自定义Hook
```js
import { useState, useEffect } from 'react';

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
它将friendID作为参数，并返回我们的朋友是否在线。
现在我们可以从两个组件中使用它：
```js
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
```
这些组件的状态是完全独立的。钩子是重用有状态逻辑的一种方式，而不是状态本身。 事实上，每次调用Hook都有一个完全隔离的状态 - 所以你甚至可以在一个组件中使用相同的自定义Hook两次。
`custom hook`更像是一种约定而非功能。如果函数的名称以use开头并且它调用其他Hook，我们说它是一个Custom Hook。useSomething命名约定是linter插件如何使用Hooks在代码中查找错误的
## 构建项目
## 基础起步
- 组件 & props
   - 函数式组件
      - 纯函数 不会改变入参
      - 非纯函数
   - Class 类组件
   - 有状态组件
   - 无状态组件
   - 受控组件
      - 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

## 子组件向父组件通信
   1. 回调函数
   2. redux

## setState()
数据更新是为同步，视图渲染为异步

## 性能优化
- React.Fragment 空标签 <>: 语法糖

## this绑定
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
## 注意项
- 方法写做箭头函数，保证this为当前类的实例
- super(props) 把参数传递给父类
- this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。
- jsx与react并无直接关系
   - 每个 JSX 元素只是调用 React.createElement(component, props, ...children) 的语法糖
- 对于使用 ES6 的 class 关键字创建的 React 组件，组件中的方法遵循与常规 ES6 class 相同的语法规则。这意味着这些方法不会自动绑定 this 到这个组件实例。 你需要在 constructor 中显式地调用 .bind(this)
```js
   constructor(props) {
    // 这一行很重要！
    this.handleClick = this.handleClick.bind(this);
  }
```
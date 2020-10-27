# 常见问题

## 区别
> 1. 设计思想不同：vue追求的是开发的简单，而react更在乎方式是否正确,合理<br>
> 2. 对数据的感知不同：vue(Know)双向this.a = 0, react(Do not Know)单向this.setState({a: 0})<br>
> react 与 vue 都是一种解决方案而已，各有所长，不存在于好坏，**提升核心竞争力**
- react是单向数据流，vue双向数据流v-module（props,$emit的语法糖，其实也是子组件@emit触发父组件的方法，react回调函数向父组件传值）
- react与vue中的computed，Watcher
   - react的数据是不是可变的；
   - vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom
- react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流，推崇结合immutable来实现数据不可变。react在setState之后会重新走渲染的流程，如果shouldComponentUpdate返回的是true，就继续渲染，如果返回了false，就不会重新渲染，PureComponent就是重写了shouldComponentUpdate，然后在里面作了props和state的浅层对比。
- react做的事情很少，很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些， 比如 redux的combineReducer就对应vuex的modules， 比如reselect就对应vuex的getter和vue组件的computed， vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要
- react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，**更加可控**。
- react对比vue
   - react更加底层，偏原生 如map; vue封装了api以提供v-for，v-if; 在 React 中写组件就是在写函数，函数拥有的功能组件都有。而 Vue 更像是高度封装的函数，在更高的层面 Vue 能够让你轻松的完成一些事情；与高度的封装相对的就是损失一定的灵活，你需要按照一定规则才能使系统更好的运行
   - vue能保证最低代码规范，质量；react也是因为其灵活（渲染h1-h5, vue也提供了高阶渲染函数render的使用），自由，生态也灵活，vue所有生态工具都集成到他的实例上；所以由于开发者水平不一样react容易导致项目架构杂论，混乱
   - 喜欢 react 带来的自由编码体验; vue的有效利用模板机制 回归了html的本质,且生态更明朗
- react是**类式的写法**，api很少
```js
class App {
    constructor() {

    }
}
```
- vue是**声明式的写法**，通过传入各种options，api和参数都很多。所以`react结合typescript更容易一起写`，vue稍微复杂;vue结合vue-class-component也可以实现类式的写法，但是还是需要通过decorator来添加声明，并不纯粹
```js
new Vue({
    template,
    methods,
    watch,
    props,
    ...
})
```
- react可以通过高阶组件（Higher Order Components--HOC）来扩展，而**vue需要通过mixins**来扩展；Vue也不是不能实现高阶组件，只是特别麻烦，因为Vue对与组件的option做了各种处理，想实现高阶组件就要知道每一个option是怎么处理的，然后正确的设置。[详情](http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6/)
- react中相对于vue的计算属性可用`get拦截`实现, (没有缓存特性，可借助第三方插件`memoize-one`来实现)
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
- vue核心：响应式数据系统，组件系统
   - 实例中的data与其渲染的DOM元素的内容保持一致，通过设置属性访问器实现
- react没有vue中的watch；通常情况下，React 的状态都是手动 setState 变化的，React 不监听数据变化；；在实践中可以尝试在 state 里放一个定义了 getter 和 setter 的对象，在 setter 里来发这个请求，响应后再 setState 回去。。。`watch-props 库，提供类似于 vue watch 这样的能力`(做业务-监听[弹框](https://www.jb51.net/article/147331.htm)，都是通过生命周期监听 props变化 ，这样bug 会很多,容易导致死循环等问题，`watch-props`目的就是减少使用一些 react 生命周期。)
```js
componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {

    }
}
```

## 中间件
> redux默认只处理同步，应用中间件处理异步=》就是对action,dispatch之前，之后做一些事情<br>
> vuex自带提供了异步处理
- 就是做了一个函数切片(重写dispatch)，相当于vue中对数组方法的重写
```js
let store = store.dispatch
store.dispatch = () => {
    console.log('数据状态更新前')
    store.dispatch()
    console.log('数据状态更新前')
}
```
- 日志中间件
- 错误中间件
## setState 是同步的还是异步的
- 放入setTimeout中会 同步执行
- 直接调用会有一个队列机制 异步执行
   - 源码体现
   > 会有一个队列机制<br>
   > 是否批次 `变量isBatchingUpdates = false` 控制同步更新还是异步更新，batchedUpdates函数会修改`isBatchingUpdates = true`
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
- 自己的弹框组件 需要根据props改变 内部也需要维护state?? - 修改key
## 其他
- PureComponent组件实现
- 为什么子组件的props就能拿到父组件传递的属性呢
## 与vue的性能对比优化
- react改进了fibe, 分片渲染Dom
- vue使用Proxy
- ast语法树描述的只能是Dom属性
- 虚拟Dom可以加入自定义属性
- vue2采用的是对data数据的递归监听，数据一改变，自动更新数据=》更新视图<br>
react 采用的是手动调用setState方法，配合immunite.js做的性能优化

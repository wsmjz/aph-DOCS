# react生态
## umiJs
- 解决方案
## hooks
- 为什么hooks 只能在顶层调用？？
   - 因为：内部是使用数组存储的每个state的值，获取也是通过index索引来获取对应的state的值的， 如果在if中有条件才调用某个state的话，就会引起索引混乱，取不到对应的state的值
## react-router-dom
> react 应用在浏览器（dom）上的路由
## redux-immutable
- 统一管理：state也处理成immutable数据
## redux
> 核心思想：视图派发action，reducer处理更新state，subscribe订阅数据变化
- 与react无直接关系的 状态管理器
- 一个仓库store,包含调度中心(reducer)与state(状态容器)
- 提供disptch,getState,订阅器
- 共享types, 在reducer和组件中都会使用
- store的状态变了，不会刷新组件, 在组件中要订阅变化事件才行
> 这是一个store仓库，包含
### reducer 处理器，管理员
- reducer 只是一个接收 state 和 action，并返回新的 state 的函数。
   - 接受action
   - 修改state
- 大型应用拆分reducer
### state 状态器
### subscribe 订阅
### dispatch 派发
## react-redux
> 说明：与react的整合
- connect
> 返回 一个类组件，可继续嵌套，loadOrerror组件
```js
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadOrError(SettlementStatement));
```
- 原理实现
```js
export function connect(mapStates, mapActions) {
    return function(components) {
        return (
            <div>返回虚拟Dom树</div>
        )
    }
}
```
- actions
- reduxer
## redux-thunk
- 解决异步，增强dispatch
## redux-saga
> 解决异步
- run

## react-redux与vuex的差异
- **和组件结合方式的差异**。VUE通过VUEX全局插件的使用，结合将store传入根实例的过程，就可以使得store对象在运行时存在于任何vue组件中。而React-Redux则除了需要在较外层组件结构中使用<Provider/>以拿到store之外，还需要显式指定容器组件，即用connect包装一下该组件


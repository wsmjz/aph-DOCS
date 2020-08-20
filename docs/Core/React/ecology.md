# react生态
## umiJs
- 解决方案
## hooks
## react-router-dom
> react 应用在浏览器（dom）上的路由
## redux-immutable
- 统一管理：state也处理成immutable数据
## redux
- 与react无直接关系的 状态管理器
- 一个仓库store,包含调度中心(reducer)与state(状态容器)
- 提供disptch,getState,订阅器
## react-redux
> 说明：与react的整合
- connect
- actions
- reduxer
## redux-thunk
- 解决异步，增强dispatch
## redux-saga
> 解决异步
- run

## react-redux与vuex的差异
- **和组件结合方式的差异**。VUE通过VUEX全局插件的使用，结合将store传入根实例的过程，就可以使得store对象在运行时存在于任何vue组件中。而React-Redux则除了需要在较外层组件结构中使用<Provider/>以拿到store之外，还需要显式指定容器组件，即用connect包装一下该组件


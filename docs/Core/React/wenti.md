# 常见问题

## setState 是同步的还是异步的
- 队列
- 放入setTimeout中会 同步执行
- 源码体现
> 会有一个队列机制<br>
> 是否批次 `变量isBatchingUpdates = false` 控制同步更新还是异步更新，batchedUpdates函数会修改`isBatchingUpdates = true`
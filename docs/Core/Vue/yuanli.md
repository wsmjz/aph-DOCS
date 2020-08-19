# 源码原理认识
源码认识
## 1. rollup
## 2. 响应式原理
## 3. 模板编译
- render函数
## 4. 创建渲染watcher
## 5. 生命周期
## 6. 依赖收集
## 7. 异步更新nextTick

## Api实现原理
- @emit

## 其他
- 一个.vue文件会返回什么


## 响应式
- 对象监听
- 数组监听
## 模板编译
- 正则解析标签和内容
- 生成ast语法树
  ```js
  let ast = parseHtml(template)
  ```
- 生成代码
   ```js
  let code = generate(ast)
  ```

- 编译为`render`函数
> 先解析render选项，再template，最后外部模块<br>
> 注意: template模板中不可以字符串开头 必须标签开头
   - render函数将模板字符串 转化为 ast 抽象语法树
      - 正则解析
      - 前进删除`advance`函数
# 源码原理认识
> mount 断点
1. package.json "build": "node scripts/build.js"
2. scripts/build.js 文件
  - 作用是使用rollup打包源代码
  - ./config 文件查看入口文件
3. 入口文件src
  - platforms 平台
    - web/entry-runtime-with-compiler.js (看Vue引入路劲)
    - runtime / compiler 区别 （编译vue中的template）
    - 找到 runtime/index 文件
4. runtime/index 文件
      - Vue.prototype.__patch__ (比对dom)
      - 找到 core/index (核心文件)
      - mountComponent 挂载逻辑
         - core/instance/lifecyle
         - updataComponent **组件级更新** -- 只要一new 就将这个watcher放到Dep.target
   5. core/index (核心文件)
      - initGlobalApi 初始化全局api
         - Vue.util
            - definReactive , 宏任务-先执行，微任务
            - set
            - delect
            - nextTick (下一事件环 eventLoop)
            - initUse Vue.use()
            - initMixin Vue.mixin ==> mergeOptions 合并选项 如果重名的变成数组 [beforeCreater]
            - initExtend Vue.extend  产生一个子类  让子类继承Vue
      - instance/index 真正的Vue 构造函数
         - initMixin(Vue) 初始化mixin
           - initLifecycle(vm) 初始化父子关系 $parent $ref
           - initEvents(vm)  初始化events属性 {}
           - initRender(vm) vm.$createElement => h() 方法
           - callHook(vm, 'beforeCreate') 调用beforeCreate
           - initInjections() 初始化注入数据 一直向上寻找——provided
           - initState(vm) 响应式原理 MVVM  data Props methods watch computed 
           - initProvide(vm)  vm._provided 定义属性
           - callHook(vm, 'created')
        - stateMixin this.$set this.$delete 混合全局方法 添加到原型上
        - eventsMixin $on $once $off $emit 用到了发布订阅
        - lifecycleMixin
            1. Vue.prototype._updata
            2. $forceUpdata(调用watcher 的updata)  $destory(组件销毁，解绑父子关系， *没有清空视图*)
        - renderMixin Vue.prototype_render $nextTick
## 1. rollup
## 2. 响应式原理
> Observer, Watcher, 数据劫持
## 3. 模板编译
> Compile
- render函数
- 文档碎片 遍历
   - 获取Dom节点属性 node.attributes // 类数组 [...attrs] type="type" v-model="message"
   - 编译{{}} 获取文本节点内容 node.textContent
   - 改名字value
   ```js
   let [name, value:expr] = attr
   ```
## 4. 创建渲染watcher
## 5. 生命周期
## 6. 依赖收集
## 7. 异步更新nextTick

## Api实现原理
- $emit
- set()
- 指令
   - v-on
   - v-bind(简写:)

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
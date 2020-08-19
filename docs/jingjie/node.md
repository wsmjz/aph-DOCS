# node概记
> [文档](http://nodejs.cn/)<br>
特点：node是轮训 不会出现高并发
- 事件队列
- 全局对象
- 模块
- npm
- Buffer, fs,流
- http和tcp服务


## 框架
- express
- koa

## 应用
- 文件上传

## 进程与线程
- 开子进程

## 同步，异步/阻塞，非阻塞

## 全局变量（global ）
globle, this并不是global, 每个文件外面都会包着一成函数，实现模块化,并将函数中的this更改了，这个函数也可以传参`console.log(arguments)`
> // {}(exports) require module __filename __dirname 这些参数也是全局对象，可以直接使用<br>
> 查看所有全局对象`global` 
```js
console.log(Object.keys(global))
```
> 注意
```js
console.log(this) // this并不是global
(function (params) {
   console.log(this) // global
})
```
- console
- Buffer 缓存区 存储二进制
- setTimeout
- setInterval
- process
> process.argv
   - nextTick
   - argv 参数列表(从第二个开始是传的) --port --config 
   - cwd 当前工作目录
   - env 环境变量
   > cross-env 跨平台设置环境变量


## 事件环

## 常用包
- commander
> 1.追加参数信息，2.解析参数, 自动配置属性
```js
let program = require('commander')
program.option('-p, --port <value>', '设置端口号')
```
   - on
   - parse
   - option
   - command
   ```js
   program.command('create').action(function() {
      console.log('vue create project')
   })
   ```
   - version
   ```js
   program.version('1.0.0')
   node 1.js --version // 会打印出版本号
   ```
 ## module
 node是基于事件的 发布订阅的模块
 - 模块加载的顺序问题
    - nodejs中默认添加.js .json后缀
    - 默认找index.js, 可创建一个package.json来重新指定，描述
    - 不写后缀，会先找文件，再找文件夹
    - 如果不是内置模块，会找node_modules中的第三方模块（会向上查找）
 - 内置(核心)模块
    - path
    - fs
    - events
    - util
       util.inherits()
 - 自定义模块
    - require做了啥
    - 包装了一层函数
      - 加载json实现
      - require() 是同步的
      - 多次引用 做了缓存 ,模块的缓存机制
 - 第三方模块

 ## 模板引擎的实现原理
 - es6模板字符串
    - 正则匹配
- ejs
- nunjucks
- jade

## npm使用
> 终端输入env 输出所有环境变量path下<br>
- nrm r-切换下载地址源， nvm v-版本
> npm i nrm -g , nrm --help ,nrm ls, nrm use
- 全局包（只能在命令行中使用，不能在代码中使用，不能require）
   - install -g 安装
   - 会链接到npm下（会执行里面的bin文件下的脚本），不会安装到path下
- 本地包
- 创建包
   - 许可
   - npm link 链接
- 只安装生产依赖（只希望项目跑起来）
```js
npm install --production
```
- 依赖
> 一般代码中需要自己 require用到的是生产依赖，像webpack相关的是开发依赖
   - dependencies
   - devDependencies
   - peerDependencies
   - bundledDependencies
   - optionalDependencies
- script 脚本
   - npm run env 会把当前用户目录bin 放到path里 可直接执行
   - "mime": "mime a.js"
   - 课时10 末尾
- 发包
   - 忽略.npmignore
   - 切到官方 nrm use npm 
   - npm login登录
      - npm addUser
   - npm publish
   - npm发布作用域包 私有包

## Buffer应用

## fs应用及流


## 性能优化
### node 中间层
### SSR 渲染
- 原生（原理）
- next(react)
   - 脚手架创建 npx create-next-app name
   - 手动创建
   > 下载ping-cli工具链模板
    ```js
     npm next react react-dom
    ```
    - 好处
       - 按文件自动生成 匹配路由
       - 动态数据加载 服务端获取数据
          - getInitialProps() 支持同构使用axios 不能使用ajax 
       - 传参 Link href="/post?id=123" as 重命名
          ```js
          import { useRouter } from 'next/router' // 获取路由对象
          const router = useRouter()
          router.query.id // 123
          ```
- nuxt(vue)
### SSG 静态站点 - 预渲染

## http
- 握手协议

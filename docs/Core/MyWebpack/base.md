# webpack
- 待整合webpack
## 常见问题
- 优化打包速度
- loader实现
- plugin实现
## 8888888
- npx webpack `就是寻找(运行)node_modules/.bin/webpack.cmd 脚本文件`
- npm run build 同上 就是寻找node_modules/.bin目录
- ast语法分析
- 依赖工具webpack-cli
- 基于node开发（node遵循commonJs规范）
- 默认支持commonjs, es6 esmodle
- 一级
   - 模式
   - 入口
   - 出口
   - loader
   - 插件
- 因为nodejs是基于commonjs规范 webpack是基于node写的 所以只能用module.exports 而不能用 export default
- weback .bin文件中有webpack脚本 执行 打包
- webpack-cli
   - 此工具用于在命令行中运行 webpack
   - https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85
- webpack-serve-dev 启动服务
- 参数解析
   1. --config
   2. --env
      - --env.development
   3. --mode production/development
## webpack 实现过程
- 分析处理入口文件
- 创建依赖关系
- AST 递归解析
- 生成打包结果
## 自带插件
- 别名
- 定义环境变量 `DefinePlugin`
```js
new webpack.DefinePlugin({
   DEV: 'production' // production
   DEV: JSON.stringify('production'), // 'production'
   FLAG: 'true' // true
})
```
- ProvidePlugin
```js
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})
```
## 第三方常用插件
- 处理不同浏览器
- html
- mincss
## npm
- 如何进行版本管理的
- 如何使用package.lock.json 构建依赖
## webpack 是如何打包的
- webpack通过模拟module，exports，require变量，将我们的模块代码打包成一个文件，让浏览器可以运行我们的模块代码
- 实现一个loader
## webpack 是如何实现模块化的
## 核心
核心功能
### loader
转化：es6转化为es5 高级语法转化成低级语法
- 流程解析
   1. loader运行的总体流程
   2. babel-loader
   3. pitch
   4. loader-runner
   5. file
   6. css

- 可处理配置
   1. 处理CSS文件
   2. 处理文件类型
   3. 处理JS模块
   4. 拷贝静态文件
   5. resolve解析
   6. 配置ts环境
   7. 配置ts+react环境
   8. 配置ts+vue环境
   9. 配置代理
- 常用loader  
   - css loaders
      - 加～号，类似于一个变量，比如你在webpack中通过alias定义了一些路径为变量，在css中引用时就可以直接以～加路径变量直接引入该路径下文件，而不加的话，应该是 通过相对路径去查找该文件
   - 图片 loader
   - 字体 icon loader
   - js loader
   - React loader
   - Vue loader
- 手写loader
### plugin
增强：打包流程中 - 打包前做什么  打包中做什么 打包后做什么， 增加一些逻辑 比如：new HtmlWebpackPlugin产生一个html
- 常用plugin
   - 提高开发效率
      - webpack-merge
      - size-plugin 监控资源体积变化，尽早发现问题
- 手写plugin
### 配置
- mode
- optimization: {minimizer}
## Babel 原理
## source-map
调式源码
- hidden-source-map
## 模块打包原理
## 文件监听原理
## 热更新原理
## 如何对bundle体积进行监控和分析
## 文件指纹
- css,js，图片
- hash
- Chunkhash
## webpack.config.js 配置文件
- output
   - filename
      - hash
      - contentHash 每个文件内容不同hash就不同 a.js中引入c, c改变hash也会改变
      - chunkHash

## 文件配置
- 定义webpack.config.js
- 使用path解析绝对路径
```js
path.resolve(__dirname, path)
```
- 配置环境变量
```
module.exports = (env) => {
​	console.log(env)
​	let isEnv = env.development
}
```
## 优化
[更多](https://www.jianshu.com/p/7f48a21d8c5e)
1. 删除无用的Css样式
2. 图片压缩插件
3. CDN加载文件
4. Tree-shaking && Scope-Hoisting （摇晃树）
```js
// 设置 保留es6模块 因为是基于es6静态分析的
```
5. DllPlugin && DllReferencePlugin
6. 动态加载文件
7. 打包文件分析工具
8. SplitChunks
9. 热更新
10. IgnorePlugin
11. 费时分析
12. noParse
13. resolve
14. include/exclude
15. happypack
- 抽离css插件 `MiniCssExtractPlugin`
- 清楚无用css  `PurgeCssExtractPlugin`
   - 配合`glob` 搜索全局
- import()  预加载
### 一.优化构建速度
1. 缩小文件的搜索范围
   1. resolve
      - 源码中的导入语句尽可能的写上文件后缀，如require(./data)要写成require(./data.json)
   2. module.noParse
   ```js
   module:{ noParse:[/jquery|chartjs/, /react\.min\.js$/] }
   ```
2. 使用DllPlugin减少基础模块编译次数  `require('webpack/lib/DllPlugin')`
3. 使用`happyPack`开启多进程Loader转换 `npm i -D happyPack`
4. 使用`wbepack-parallel-uglify-plugin`开启多进程压缩JS文件 `npm i -D webpack-parallel-uglify-plugin`
### 二.优化开发体验
1. 自动刷新
   1. watch: true
   2. devserver
      > 配置 devserver: {inline:true}  devServer.compress NamedModulesPlugin
### 三、优化输出质量
1. 优化输出质量--压缩文件体积
   1. 区分环境--减小生产环境代码体积
   2. 压缩代码-JS、ES、CSS
      - require('webpack/lib/optimize/UglifyJsPlugin') 
      - npm i -D uglify-webpack-plugin@beta 防止babel-loader转换ES6代码
      - 压缩CSS：css-loader?minimize、PurifyCSSPlugin
   3. 使用Tree Shaking剔除JS死代码
      - 使用第三方库时，需要配置 resolve.mainFields: ['jsnext:main', 'main'] 以指明解析第三方库代码时，采用ES6模块化的代码入口
2. 优化输出质量--加速网络请求
   1. 使用CDN加速静态资源加载
   2. 多页面应用提取页面间公共代码，以利用缓存 `require('webpack/lib/optimize/CommonsChunkPlugin');`
   3. 分割代码以按需加载 `import()` , `空闲预加载`
3. 优化输出质量--提升代码运行时的效率
   1. 使用Prepack提前求值 `require('prepack-webpack-plugin').default;` 暂不成熟
   2. 使用Scope Hoisting 作用域提升
      - 由于需要分析模块间的依赖关系，所以源码必须是采用了ES6模块化的，否则Webpack会降级处理不采用Scope Hoisting
### 四、使用输出分析工具
1. 官方工具Webpack Analyse
2. webpack-bundle-analyzer
### 五、其他Tips
1. 配置babel-loader时，use: [‘babel-loader?cacheDirectory’]
2. `externals` 排除因为已使用<script>标签引入而不用打包的代码，noParse是排除没使用模块化语句的代码</script>
3. `performance`参数
4. 配置profile：true 是否捕捉Webpack构建的性能信息，用于分析是什么原因导致构建性能不佳
5. 配置cache：true，是否启用缓存来提升构建速度
6. 使用`url-loade`r把小图片转换成base64嵌入到JS或CSS中，减少加载次数
7. 通过imagemin-webpack-plugin压缩图片，通过webpack-spritesmith制作雪碧图
8. 开发环境下将devtool设置为cheap-module-eval-source-map，因为生成这种source map的速度最快，能加速构建。在生产环境下将devtool设置为hidden-source-map

## 文件分析
1. 同步加载
2. harmony
3. 异步加载

## tapable
1. webpack的插件机制
2. tapable分类
- hook SyncHook在实际工作中有什么用？
- tapable很适合用来实现一个插件系统，并且可以控制各种类型的插件的执行的时间点
- webpack就是这样做的，提供了很多钩子，然后控制各个钩子的执行时间点
```js
const synchook = new SyncHook('name)
// 注册监听函数
synchook.tap('name', (data) => {
   console.log('name', data)
})
synchook.tap('age', (data) => {
   console.log('age', data)
})

// 发布事件
synchook.call('qiqingfu')
```
3. SyncHook

## 代码分割
- 本质
- 意义
   - 极端方案的中间状态
- entry配置 多个entry文件
- 动态加载(按需加载)：import()
- 抽取公共代码 splitChunks配置
## 构建流程
- 初始化参数
- 开始编译
- 确定入口
- 编译模板
- 完成模板编译
- 输出资源
- 输出完成

- 编译流程
- 调试webpack
- Stats 对象
- 详细工作流程
## 参数
- process.argv[] webpack -- 后面的参数   `不需要引入啥 直接获取`
- rollup 只打包js 小
## 问题
- 图片打包问题 不应放在哪儿 打包成base64比较大
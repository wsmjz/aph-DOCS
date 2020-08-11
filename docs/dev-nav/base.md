# 项目结构
```js
|-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- .gitignore  // 忽略文件
        |-- jest.js  // 测试文件
        |-- prevest.js // 预设文件
        |-- .bable.js // es6解析文件
        |-- pi.config.js // 工程配置文件
        |-- components
            |-- nav.js
```


**打造中后台一站式解决方案**
> [响应式官网.预览](www.baofu.com)<br>
> [admin-vue.预览](www.baofu.com)
**此项目为微前端架构，支持vue, react, jq**
- vue 子应用 为原生 配合appleHome-ui 实现
- react 子应用为antd 实现UI层
- jq 子应用实现 官网效果

## 文件结构
- my.config.js 配置文件
- src 源码目录
- 常量管理
- 业务组件

## 微前端架构
> 工程目录下src是主应用的源码，apps是子应用目录
- 应用通信
   - web components(采用)

## 配置
- 全局配置
   > 约定原则
   > 根目录下 my.config.js 是工程配置，即对开发环境、编译、辅助工具等与项目实现功能或业务无关的配置
   - publicPath
    - entry
    - devServerPort
- 子应用工程配置
- 子应用运行时配置
## 脚本命令
- dev
- dev:test
- build
- build:test
- test
- prot
### 子应用
- 创建
```js
npm run app add [name] [port]
```
- 删除
- 启动子应用
- 编译子应用
## 代码生成
- ping.config.js 配置
- 抽取出API请求
- 状态管理vuex
- mock
## 自动配置路由
- 约定
## 常量管理
- 工程配置常量
  - 端口，ip
- 应用业务常量
  - 下拉options
## 实例扩展

## 业务模块集
- 购物车
- 地址管理
## 监控错误处理与上报
> 及时发现错误
- 运行时
   - 语法错误
- 网络
   - 网络中断
   - 网络超时
- 资源加载
- 未处理的promise
- 异步请求错误（fetch与xhr）
- 组件接口提示信息 统一常量管理
- json语法错误

## 国际化

## 样式规范
- 色彩
- border
- 间距
- 投影
- padding
- 文字
### 规范命名词汇
- `warp` 组件容器
- `nav` 导航
- `content` 页面内容体
- `selider` 侧栏
- `main` 主要内容
- `footer` 页脚
## 业务规范
- 构建工具
- 命名规范
- 设计规范
- 文件结构
## 流程规范
## 编码规范
- Airbnb javascript编码规范 eslint
- 函数式编程
   - 纯函数编程 易于观测 返现问题
- 声明式
- 命令式
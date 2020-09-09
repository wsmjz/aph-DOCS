# 介绍
***SW***
**你去寻得你所爱并为之守望**
> https://segmentfault.com/a/1190000009090836, 花裤衩
> https://blog.csdn.net/hyupeng1006/article/details/80755667 Vuex与Redux对比
- 框架，库，方法的出现都是为了解决某种问题，或是增强某些功能，或是简写，避免错误
- 解决错误的能力
```js
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

## **SW 是一个完整的一站式解决方案(开发系统) 提供：**
> [响应式官网.预览](www.baofu.com)<br>
> [pi-admin.预览](www.baofu.com)<br>
> 这是一个由兴趣而驱动的项目，项目建议规范<br>
   ### 通过 `@ping/sw-cli` 实现的交互式的项目脚手架。
   ### `@ping/sw` 一站式自动化解决方案
      - 配置文件 `ping.config.js（可选，）`
      - 代码生成
         - 模拟数据Mock
         - 配置vuex,Store
      - 自动路由配置
   ### `@ping/ui-vue` 原装vue组件库
   ### `@ping/ui-react` 原装react组件库
   ### 自动配置安装官方webpack同用法（考虑是否开发`原装webpack`）
   ### `@ping/schame` 全局校验
   ### `@ping/echarts` 图表
   ### `@ping/map` 地图
   ### `@ping/go` 关系图
   ### `@ping/store` 状态机
   ### `@ping/router` 路由系统
   ### `@ping/date` 日期格式化 
   ### 一套丰富的常用插件集合
   ### 一个运行时依赖 `(@ping/cli-service)`，该依赖：
      - 可升级
      - 基于 webpack 构建，并带有合理的默认配置
      - 可以通过项目内的配置文件进行配置；
      - 可以通过插件进行扩展。


**工程主应用可集成vue, react, jq项目**
> vue 子应用 为原生 配合`@ping/v-ui` 实现<br>
> react 子应用为antd 实现UI层 <br>
> jq 子应用实现 官网效果

## 项目结构
```js
|-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src                  // 主应用
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- .gitignore      // 忽略文件
        |-- jest.js         // 测试文件
        |-- prevest.js      // 预设文件
        |-- .bable.js       // es6解析文件
        |-- pi.config.js    // 工程配置文件
        |-- components
            |-- nav.js
```
- ping.config.js 配置文件
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
   > 根目录下 ping.config.js 是工程配置，即对开发环境、编译、辅助工具等与项目实现功能或业务无关的配置
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
### 环境变量
- dev
- prod
- test
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
## 自动路由配置
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
- 写入加载语言包
```js
exports['default'] = {
    locale: 'en',
    Pagination: _en_US2['default'],
    DatePicker: _en_US4['default'],
    TimePicker: _en_US6['default'],
    Calendar: _en_US8['default'],
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
```
## 测试
## 持续集成与部署
- jekens 配置
- docker 文件
- nglix 配置
## 版本与分支
- tag
- branch

## 主题换肤
- 科技
- 健康
- 明亮

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
- 分支管理
- 环境管理
   - 体验区
   - 稳定区
   - 灰度
- CICD
## 编码规范
- Airbnb javascript编码规范 eslint
- 函数式编程
   - 纯函数编程 易于观测 返现问题
- 声明式
- 命令式
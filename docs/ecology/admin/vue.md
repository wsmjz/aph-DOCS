# 介绍
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
## 自动配置路由
## 常量管理
- 工程配置常量
  - 端口，ip
- 应用业务常量
  - 下拉options
## 实例扩展

## 业务模块集
- 购物车
- 地址管理

## 国际化

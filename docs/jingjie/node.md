<<<<<<< HEAD:docs/jingjie/node.md
## node基础
- [文档](http://nodejs.cn/)
## 特点
- node是轮训 不会出现高并发
## 模块
- command
- path
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

# http
- 握手协议
=======
## node基础
- [文档](http://nodejs.cn/)
## 特点
- node是轮训 不会出现高并发
## 模块
- command
- path
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

# http
- 握手协议
>>>>>>> 0e65048c0905c5533a08dbeaa5a437fdca8e5c5b:docs/node_note/note.md

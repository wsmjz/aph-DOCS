# 性能优化
## 编码
- 算法 排序，搜索算法提高js代码执行效率
- 函数式编程来优化代码结构
- 函数节流，防抖
## 合理规划html代码结构
## css优化
- 渲染原理：
- 原因：重绘与回流
- 规范 
   **BEM(Block Element Modifier)** 是一种命名CSS class的模式，使用这种模式可以让 CSS 代码更加利于维护。标准的 BEM 写法是 .block-name__element-name--modifier-name。
   ```html
      <div class="vi-card">
         <div class="vi-card_title"></div>
         <div class="vi-card_control">
            <div class="vi-btn--primary'></div>
         </div>
      </div>
      vi是命名前缀，vi-card表示一个block，v-card_title，_表示v-card下面的子元素title,--表示修饰符，表示状态 vi-btn--primary表示是普通按钮
   ```

- 书写顺序
   1. 位置属性(display, position)
   2. 盒模型属性(width, height, border, padding, background)
   3. 文本属性(line-hight, font, color)
   4. css3属性(transition)

- 避免css选择器层级太深 > > .add > span
- 尽量使用类名 div p 后代选择器会查找所有p元素
- 整合图片 css精灵 雪碧图 零星图片都包含到一张大图中去 -- 避免图片src为空 字体裁剪
- 避免重定向
- 使用iconfont
- 减少iframe使用
- 减少dom操作
- 压缩 JavaScript 、 CSS 、字体、图片等（webpack）
- js 放在页面底部
- 减少 DNS 查询

## ES7
- import()
- 魔术字符串 添加预加载关键词
## webpack优化
- 权衡 资源的合并与压缩
- 图片压缩
   - 雪碧图
   - svg
   - 字体图标
- 在webpack打包的过程中，将多余文件去掉，如map文件
   - 压缩HTML代码
## 用户体验
- 骨架屏
- 长列表
- vue-lazyload插件, 图片懒加载
- 预加载
## 数据资源的懒加载和预加载
## 静态资源cdn
## Nglix 代理
## 服务端
- http请求优化
   - 客户端减少请求
   - 服务端
- 预渲染SSG
- SSR
- SEO， 原理: putr无头浏览器
## ssr & ssg
> 服务端渲染
- 输入地址返回空白HTML，优化 客户端 请求到中间层 代理 不在直接请求到后端 back ground for front  （bbf）
## 浏览器 缓存方案
vuex, redux 数据持久化解决方案
- localStorage
- indexedDB
- h5-manifest 缓存优化
## web worker
并行执行js代码，减少阻塞
## vue代码层优化优化
## react代码层优化

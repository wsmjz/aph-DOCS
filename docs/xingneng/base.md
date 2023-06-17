# 性能优化

> 一句话该注意的都要注意，不该注意的也要注意哈哈

- 脚手架
- 文件结构
- 变量命名（css，方法，文件）
- 逻辑提炼
- esLint 检查
- ts 规范
- 组件封装

## 编码

- 算法 排序，搜索算法提高 js 代码执行效率
- 函数式编程来优化代码结构
- 函数节流，防抖
- if 语句简化

```js
if (value === "duck" || value === "dog" || value === "cat") {
  // ...
}
const options = ["duck", "dog", "cat"];
if (options.includes(value)) {
  // ...
}
```

- 解构赋值
- 命名
- 代码风格（比如几个空格）

## 合理规划 html 代码结构

## 图片处理

> 讲到 前端性能优化 时，其实能够感知到的最大优化就是在于 图片，其它的优化点的 ROI 几乎都没图像优化来得高；压缩图片资源大小，收益是很大的

- 方法：用 PS 降低图像的亮度、对比度，以此来降低图片的质量，再用 contrast 和 brightness 来提升图像的亮度、对比度，以此来恢复图片原有效果；UI 给低像素的图片，通过 css 对比度还原图片质量

```css
filter: brightness(1.2) contrast(1.7);
```

## css 优化

- 渲染原理：
- 原因：重绘与回流
- 规范
  **BEM(Block Element Modifier)** 是一种命名 CSS class 的模式，使用这种模式可以让 CSS 代码更加利于维护。标准的 BEM 写法是 .block-name\_\_element-name--modifier-name。

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

  1.  位置属性(display, position)
  2.  盒模型属性(width, height, border, padding, background)
  3.  文本属性(line-hight, font, color)
  4.  css3 属性(transition)

- 避免 css 选择器层级太深 > > .add > span
- 尽量使用类名 div p 后代选择器会查找所有 p 元素
- 整合图片 css 精灵 雪碧图 零星图片都包含到一张大图中去 -- 避免图片 src 为空 字体裁剪
- 避免重定向
- 使用 iconfont
- 减少 iframe 使用
- 减少 dom 操作
- 压缩 JavaScript 、 CSS 、字体、图片等（webpack）
- js 放在页面底部
- 减少 DNS 查询

## ES7

- import()
- 魔术字符串 添加预加载关键词

## webpack 优化

- 权衡 资源的合并与压缩
- 图片压缩
  - 雪碧图
  - svg
  - 字体图标
- 在 webpack 打包的过程中，将多余文件去掉，如 map 文件
  - 压缩 HTML 代码

## 用户体验

- 骨架屏
- 长列表
- vue-lazyload 插件, 图片懒加载
- 预加载

## 网络请求 useRequest

- 乐观更新
- 预拉取

## 数据资源的懒加载和预加载

## 静态资源 cdn

## Nglix 代理

## 服务端

- http 请求优化
  - 客户端减少请求
  - 服务端
- 预渲染 SSG
- SSR
- SEO， 原理: putr 无头浏览器

## ssr & ssg

> 服务端渲染

- 输入地址返回空白 HTML，优化 客户端 请求到中间层 代理 不在直接请求到后端 back ground for front （bbf）

## 浏览器 缓存方案

vuex, redux 数据持久化解决方案

- localStorage
- indexedDB
- h5-manifest 缓存优化

## web worker

并行执行 js 代码，减少阻塞

## vue 代码层优化优化

## react 代码层优化

- use reducer 比起 usestate 优雅 可以不传值

## react-query （useRequest）

- 乐观更新
- 跳转是否需要加载动画
  - 如果我们确信时间短就不需要动画，看起过渡效果更好一点，有动画反而会闪一下

## react 官网优化

- 预加载
- dns 预解析

## 代码片段

好的 坏的

## 相对比较

- 必须手动执行更新

## 同步 异步问题

到底什么是同步 什么是异步

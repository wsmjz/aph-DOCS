# 待办事项
- 改动了会有未暂存标记
- 开课吧脚手架视频整理
- 珠峰react源码视频整理
- vite 视频原理
- webpack 原理
- 按鼠标方向移入css效果
- 数据结构二叉树
- package 脚本命令参数解析 执行原理
   - 可执行的Shell命令
- 导入excel 表格
- http 调用本地摄像头
- 给定树节点 生成面包屑
- 业务
   - 上拉下拉刷新
   - import { toNumber } from 'lodash'
- 文件断点续传，分片上传，下载
- 图片裁剪，封装，Bloob
- map 实现
- npm 包压缩 上传
```js
npm run dist // 生成压缩文件dist package.json main 里面引入dist 删除项目中的其他文件  或者新建一个项目只包含package和dist
```
- 高阶应用
- 回调函数与回调值
- 实现transition 组件
- 编程范式
   - 函数式编程
      - 纯函数编程 易于观测 返现问题
   - 声明式
   - 命令式

1. 水利表格，步骤条
2. 建易通组织架构
3. 建易通签字
4. 脚手架， 压缩，推送npm社区

- request...新特性做动画
1. 百度统计页面访问量 微信分享 支付 桌面应用 NW electron cordar  / 中国的 JavaScript 和 Ruby 社区 / 中国开源社区
2. clipboard.min.js / 递归函数 加return 与 不加return 的区别 / 文件流 转换
3. docker 微服务
4. world press ，wix
5. sortablejs 拖拽
7. electron，egg.js-基于koa 抓包
8. 搜索ssh视频
9. ast 虚拟节点树  js调用摄像头拍照上传照片
10. 文件上传,下载 封装 / 表单提交封装 / 图片裁剪，合成
11. iframe 应用场景 
   - 摄像头调用
   - 自定义表单打印
12. [fx粒子动画](https://fivexu.github.io/ui/#/tooltip)
14. webview webApp
15. 资金审批小数点位数 正则匹配
16. [腾讯新版前端组件框架 omi](https://www.cnblogs.com/iamzhanglei/p/9810365.html)
17. [函数](https://www.cnblogs.com/_franky/archive/2012/12/13/2815624.html)
18. [http优化](https://www.cnblogs.com/GrayZhang)
19. requestAnimationFrame
20. [浏览器原理](http://jinlong.github.io/)
21. Roter人员组件问题 现在为外部判断选中值 需改进 convenienceModule>projectManagement>projectlist>securitycheck>securitylookedit
22. 扫描二维码 访问网页
23. 根据对象属性值 true,false缓存部分路由
24. 单页面 多页面
25. node做中间层(件)/ 流处理成Excel / 处理pdf数据流 / 浏览器控制台 / truck try promise awit / ts装饰器 与 装饰器模式
26. 研究jquery 源码 -障碍：正则
27. 选择器 栈排列 / vue断点调试 / render方法
28. 手机事件处理hammer. js / fastclick
29. codemirror
30. 重要的是 学习方法 
31. cordova有个热推送的插件
32. cavans 合成 播放video
33. 腾讯课堂 - 波波老师算法 / wap2app 套壳
34. tapable 
36. 自定义表单 - 拖拽添加
37. Vue.nextTick() 与 this.nextTick(callback) 与 this.$nextTick(callback)
38. echarts双y轴 双x轴设置

## 运维
- nglix
- docker
- CICD
- linux
- Xshell

## 必须基石，竞争力
- Promis, async, await原理
   - 30%
- Vue 源码
- react 源码
- vue-router， vuex实现
- 常用函数实现
   - apply, compose
- 设计模式
   - 柯理化，与反柯理化
- 微信支付
- 文件树
- 组件库
   - 日历
   - 表单
- 校验库
- 网络
   - http原理
- 前端监控
- 全流程解决方案

## 期望
- 视频流 直播 
- 微前端
- 微服务
- 网站离开 保存提示
- 环球网校
- 虚拟dom跨平台应用 转化
- B端产品 C端产品 小程序为C端 bs架构 cs架构
- 调用设备原生接口 （日历，蓝牙）
## 大类问题
- tabs 返回当前列表问题 分页返回当前页 搜索返回当前条件页
   - 每个table 一个组件
- 验证类
- 提示类
- 脏数据处理 null '' undefind
- event 事件  vue中$event
- 表单缓存 回显问题
## 业务场景
- 缓存组件数据
- 传值拷贝问题
   - 原型链
## 总结
- 优质代码
   - 控制异步编程
   - 设计模式替代if else
   - 纯函数式编程 易于理解每一个函数的作用
- 问题
   - 逻辑耦合在视图层。a === 'a' && b ==='b' && c==='c' && d ==='d'? <div>...</div>:null
   - 组件复用，函数复用，不封装，代码重复。
   - 函数功能不单一，一个函数处理太多职责。且这些职责没有任何关联，但是都耦合在同一个区块内。
   - 参数列表混乱，有做好防御编程，不处理错误（接口错误，超时，重复提交等等
   - 魔法数字，魔法字符串，且没说明。
   - 糟糕数据结构 / 糟糕命名 （其实上面的具体代码示例也存在）
   - 鼠标，元素，滚动条位置信息 clientX scroolTop 
   - 动态组件is
   - 珠峰-两个&&符号 返回值
   - 动态路由匹配

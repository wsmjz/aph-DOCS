# 第三方库使用问题
此整体模块带整理

## 日志(发表前沿)
近几年 low-code 理念在前端领域逐渐流行起来，主要有这些原因：

被资源化的前端开发者：工作量大，但技术要求大多不高，生产效率成为了必须要解决的问题

开放的前端技术体系：low-code 类代码生成工具很容易与前端技术体系结合起来

趋于成熟的前端工程化体系：成熟稳定的前提下，才会转而追求变革式的生产效率突破

面对大量低技术含量的需求，前端开发者就变成了极易替代的资源（就像低值易耗资产一样），前端人力进而成为产品需求迭代的瓶颈

此时，最好的解决办法是通过工具化、自动化的方式提高生产效率，突破前端资源瓶颈，自然就有了 low-code 方向的探索和实践，诸如 jQuery 时代的表单生成器、移动时代的 H5 页面制作工具
## 交互效果
- 码云首页效果图
- [输入框交互效果](https://hubojing.github.io/advertising/)
- [canvans效果Zdog库](https://dp2px.com/2019/07/30/html5canvas1/)
- [bbb](https://blog.gatsby.fun/)
## 参考文章
- [Vuex与Redux对比](https://blog.csdn.net/hyupeng1006/article/details/80755667)
## 名词
`webview`
## 八大知识体系

一：JS原理类
数据类型，作用域，原型，对象，继承，异步，递归等

二:JS框架类
JQuery,React,Vue,Angular,包括app框架。ReactiveNative,Ionic等

三：关联知识点
浏览器兼容，webpack,http请求，http与https以及http状态码，前端安全(XSS漏洞/sql注入/CSRF漏洞/Cookie安全策略/传输安全),
Redux,mobx,Less,数据结构，算法，小程序等。

四:前端性能优化
减少http请求，优化接口，精简代码，代码规范，压缩图片，雪碧图，使用CDN

五:NodeJs
express框架，promise,CommonJS,require

六:服务器语言
java或者C#,至少要会写项目

七:运维
了解数据库，会写一般的Linux命令，项目部署的相关配置

八:前瞻性学习
目前流行的趋势，区块链，AI等
## 包列表
   - better-npm-run
   - yargs(解析node参数)
   - lodash
   - jszip
   - 二维码相关
      - qrcode
      - qrcode.react
   - react-copy-to-clipboard
   - moment
   - file-saver
   - immutaion 唯一变量
   - react-immutable-render-mixin 改变深层对象
## rxjs 更复杂的状态管理
## socket.io
## 转化PDFhtml2canva
## hls.js 视频处理 播放m3u8格式视频流
## fmlls 音频裁剪
## iLL8 国际化
## Base64
- js-base64
## 图片裁剪
- react-image-crop
## npm管理
> 要求：(node版本v8.12.0)
   1. 项目打包压缩
   2. npm adduser  注册
   2. npm login
   2. npm publish
- 如何管理npm 包 package.lock.json
## vuetify.js
- [文档](https://vuetifyjs.com/zh-Hans/jobs/for-vue/)
- 移动端：有一定开发能力的团队，应自己开发一套，匹配自身需求，维护起来也更容易
## slatejs
- 可定制富文本编辑框架
## 讨论
- 光凭自己用起来的优越感来判断框架的优劣，应该向自己发问，是不是自己技术真的不行。
- 现在的框架完全就是新型的产品，产品的终极目标就是迎合市场，哪个更容易被市场接受，哪个就是好的产品
- 总结：框架本身并没有优劣，只是所偏向的，侧重的，关注的问题点不一样(vue侧重于基础向上，react侧重合理，vue每一个响应式自动生成Watcher, react手动setState()，大型项目更加可控)，解决的问题不一样

## 优秀插件，库
- 插件
1. html2canva
2. hls.js 视频处理 播放m3u8格式视频流
- 库
1. [fontawesome](http://www.fontawesome.com.cn/faicons/)
2. [lodash](https://lodash.com/docs/4.17.11)
3. 
4. [微信jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
5. [微信转码框架](https://uniapp.dcloud.io/)
6. rxjs
7. [wps office](https://view.officeapps.live.com/op/view.aspx)
# H5 要点整理
# 小程序要点
- [文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)
- [组件库](https://youzan.github.io/vant-weapp/#/field)

## 1.云开发
### 1.云存储
说明说明
### 2.云函数
会静静地

## 2.开始
### 1.注册
首先需要注册一个腾讯云账号
### 2.打包
打包上线
# 杂记
**八大知识体系**

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

## 待处理问题
<!-- 11. 珠峰-两个&&符号 返回值 -->
<!-- 1. 动态路由匹配 -->
<!-- 动态组件is -->
<!-- 鼠标，元素，滚动条位置信息 clientX scroolTop -->
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

## 备忘录
- vue 禁止滚轮事件 @mousewheel.prevent
- v-if 表单验证失效 改用 v-show
- 手机事件处理hammer. js / fastclick
- 移动设备浏览器为了检查用户是否在做双击，默认click事件会大约延迟300毫秒左右 - 解决 Fastclick
- 元素柯拖拽属性：draggable="true"；事件：onDragstart，onDragenter，onDragend
- 对象的循环采用Object.keys() , for in 会循环原型链上的
## 数据
- 如何判断一个变量是否为整数
```js
// parsInt 取整 和自生比较是否相等
```
- 0.1 + 0.2 == 0.3000000

## 其他
### 浅拷贝与深拷贝
- 数组的浅拷贝：数组里的引用类型都是浅拷贝的
   ```js
      /**
        数组的浅拷贝
    **/
    //1、基本 =
    var arr1 = [1, 2, 3]
    var arr2 = arr1
    arr1[0]=100
    console.log(arr1,arr2) // [ 100, 2, 3 ] [ 100, 2, 3 ]

    //2、slice
    var arr3 = [1, 2, 3]
    var arr4 = arr3.slice(-1) // 取数组最后一个元素
    arr3[2] = 100
    console.log(arr3,arr4) // [ 1, 2, 100 ] [ 3 ]
    //看起来修改旧数组不改变新数组，像是深拷贝了
    //但是！！！
    var arr5 = [1, 2, 3, {b: 4}]
    var arr6 = arr5.slice(-1)
    arr5[3].b = 100
    console.log(arr5, arr6) //[ 1, 2, 3, { b: 100 } ] [ { b: 100 } ]
    // 如果数组里元素是个引用类型，那么旧数组里这个元素被改变，会影响新数组
    // 所以slice()方法是浅拷贝

    //3、concat 同上理

    //4、遍历
    var arr7 = [1,2,3,{b:4}]
    var arr8 = []
    for (var i = 0; i < arr7.length; i ++) {
        arr8.push(arr7[i])
    }
    arr7[3].b = 100
    console.log(arr7, arr8) // [ 1, 2, 3, { b: 100 } ] [ 1, 2, 3, { b: 100 } ]
   ```
- 对象的浅拷贝
   ```js
    // 1、 对象浅拷贝 - Object.assign
    function shallowCopy4(origin) {
        return Object.assign({},origin)
    }

    //2、 对象浅拷贝 - 扩展运算符
    // 扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中
    function shallowCopy5(origin) {
        return {
          ...origin
        }
    }
   ```
- 深拷贝
   - 最方便的JSON正反序列化
   ```js
    function deepClone1(origin) {
      return JSON.parse(JSON.stringify(arr));
    }
   ```
    原理：利用 JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化（还原）js对象
    缺点：缺点就是无法拷贝 undefined、function、symbol 这类特殊的属性值，拷贝完变成null
   - 递归实现
   ```js
    function DeepClone(originObj) {
      // 先判断obj是数组还是对象
      let newObj;
      if(originObj instanceof Array ) {
          newObj = []
      } else if (originObj instanceof Object) {
          newObj = {}
      }
      for (let key in originObj) {
          // 判断子元素类型
          if (typeof(originObj[key]) === "object") {
              // 如果子元素为object 递归一下
              newObj[key] = DeepClone(originObj[key])
          } else {
              newObj[key] = originObj[key]
          }
      }
      return newObj
    }
   ```
### 组件，问题，处理
- 受控组件 - 
- 非受控组件 - 加了ref 可操作dom的
- 定制滚动条样式
- 懒加载，滚动加载 瀑布流，vue指令封装 / 浏览器查看是否添加事件
- vue断点调试
- 语句分号；影响
- 引入自定义字体需用`~@路径`
### 注意
- 深拷贝与浅拷贝 （有些情况需使用拷贝对象，不可直接使用原对象） 
- i++ 与 ++i 的区别
- 思考分页组件 - 异步 dom节点未加载完成问题
```js
let objTotal = 1
let flag = k
$("#pagenation").Page({
    totalPages: objTotal,//total Pages
    callBack : function(page){
        flag='t'
    }
});
// 先设置默认objTotal 避免pagenation报错
// 列表数据 回调函数 请求成功后再重新设置pagenation
if flag == 'k' {
   $("#pagenation").Page({
    totalPages: res.data.pageTotal
   });
}
```
- element.addEventListener(eventType, fn, false) dom对象.addEventListener(事件类型, 回调函数, 事件机制)  事件机制分为冒泡和捕获,如果为false表示事件冒泡,为true表示事件捕获

## 响应式设计
### 方案
- 移动端适配方案: 
1. @media
2. rem
```js
 (function() {
    let screen = window || resize
    let size = 750
 })()
```
3. flex
4. flexibe 淘宝方案
5. viewport
### 备注
1. 移动设备浏览器为了检查用户是否在做双击，默认click事件会大约延迟300毫秒左右 - 解决 Fastclick

## 多端解决方案
一套代码运行多端：微信小程序，百度小程序，支付宝小程序，h5等
### 1. uniapp
### 2. Hybrid
### 3. flutter(UI)
- 混合开发
### 4. taro
### 5. weex
### 6. RN
坑多，前景不好
### 应用打包
1. appcan

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

## 猜猜坑
- [a标签ie下载失效](https://www.jianshu.com/p/2af0610d82c7)
- 火狐浏览器下树组件拖拽失效
```js
dragstart($event) { // 解决：需要在拖拽时dragstart事件时给event事件传一个数据 'aa'可随便设置的一个属性名
   $event.dataTransfer.setData('aa', null)
}
```
- scoped 影响关联问题
- 缓存组件
- 阻止冒泡 click.stop  // e.defaltP...stop
- 为什么需要把子组件派发的事件的回调值拷贝一份Object.assign(this.fitlterData, obj); 
- 为自定义组件绑定原生事件必须使用 .native 修饰符：**native修饰符如何实现，做了什么**
```html
<my-component @click.native="handleClick">Click Me</my-component>
<el-input @change.native=""></el-input>
```

## 社区博文
- [sweetalert](https://sweetalert.bootcss.com/docs/#methods)
- [前端工程师地址](http://gjpykj.ddns.net:8015/#/inputText)
- [码灵程序论坛文档地址](https://nav.imaring.com/)
- [49个不知道的css](https://juejin.im/post/5d3eca78e51d4561cb5dde12#heading-44)
- [各种文档](https://www.kancloud.cn/)
   - [待整理](https://qq1037305420.github.io/Blog/)(https://qq1037305420.github.io/Blog/nav.03.webpack/#%E4%BE%9D%E8%B5%96%E5%B7%A5%E5%85%B7webpack-cli)
   - [珠峰1](https://giserman001.github.io/blogs/miniprogram/)
   - [webpack](https://www.webpackjs.com/concepts/plugins/)
   - [axios文档](https://www.kancloud.cn/yunye/axios/234845)
   - [webpack文档](https://www.kancloud.cn/ywfwj2008/webpack-handbook/84591)
   - [npm文档](https://www.kancloud.cn/shellway/npm-doc/199981)
   - [d3文档](https://www.kancloud.cn/luponu/d3js-api-zh) [luponu作者其他文档](https://www.kancloud.cn/@luponu?tab=book&page=3)

- [几毛社区](www.baidu.com)
- [二叉树](https://www.cnblogs.com/wangjiachen666/p/10155507.html)
- [next中文文档](https://docs.www3.jklib.org/next9/)
- [阮一峰](http://www.ruanyifeng.com/home.html)
- [萤石云](http://open.ys7.com/doc/zh/book/4.x/android-sdk.html?q=)
- [vue各种插件](https://www.toutiao.com/i6718405521088446988/?timestamp=1564450212&app=news_article&group_id=6718405521088446988&req_id=20190730093011010018026159736CF92)
- css
   - [张鑫旭](https://www.zhangxinxu.com)
      - [canvas中文文档](https://www.canvasapi.cn/)
      - [svg文档](https://www.zhangxinxu.com/GitHub/demo-Snap.svg/demo/basic/)
   - [css森林](http://blog.cssforest.org/)
      - [权重比例](http://blog.cssforest.org/2011/05/19/%E9%87%8D%E6%96%B0%E8%AE%A4%E8%AF%86CSS%E7%9A%84%E6%9D%83%E9%87%8D.html)
   - [真不知道的css小点点](https://juejin.im/post/5d3eca78e51d4561cb5dde12)
- 掘金小册
   - [books](https://juejin.im/books)
- 其他
   - [大前端](http://www.daqianduan.com/)
   - [腾讯ISUX](https://www.qianduan.net/)
   - [小胡子](https://www.barretlee.com/)
   - [canvas动画](http://www.jq22.com/webqd2797)
   - [资源清单](https://segmentfault.com/a/1190000000416914)
   - [中文书籍概览](https://github.com/justjavac/free-programming-books-zh_CN)
   - [面试](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Question)
   - [算法](https://www.cnblogs.com/rubylouvre) 司徒正美-大名鼎鼎的MVVM框架avalon.js，就是此人出品
   - [jq框架设计](https://www.cnblogs.com/winter-cn/archive/2013/02/20/2919855.html)
- 社区
  - [前端乱炖](http://html-js.com/)
  - [segmentfault](https://segmentfault.com)
  - [大漠](https://www.w3cplus.com/)
   - [svg](https://www.w3cplus.com/svg/building-progress-ring-quickly.html)
  - [前端网](http://www.w3cfuns.com/)
  - [简书](https://www.jianshu.com/u/1f3c9af35ae8)
  - [掘金](https://juejin.im/getting-started)
  - 知乎
  - [博客园](https://wz.cnblogs.com/)
  - [csdn]
  - 腾讯课堂
  - 开课吧
  - 极光学院
  - 慕课网
  - [vuepress文章](https://b.himnt.top/blog/base/)
  - [读书笔记-印象笔记](https://app.yinxiang.com/LoggedOut.action?userId=18145738)
  - [程序员客栈](https://www.proginn.com/)
  - [我要自学网](https://www.51zxw.net/)

## 酷炫网站
- [wa](https://haremu.com/)
- [aimingoo待处理技术](https://aimingoo.github.io/)

## 书籍
1. 《红宝书》
2. 《你所不知道的js》
3. 《刻意练习》
4. 《图解css3  大漠》
5. 《css世界 张鑫旭》
6. 《狼叔node》
7. 《js阮一峰》

## 其他
- 易源接口
- tinyPNG
- 参考带整理博客
   - [blog1](https://qishaoxuan.github.io/blog/keng/keng.html)
   - [中断axios请求](https://blog.csdn.net/itKingOne/article/details/83651004)
- new URLSearchParams() 与 new FormData()区别
- 冒泡与捕获
   - [先执行捕获，后冒泡](https://blog.csdn.net/moguzhale/article/details/53503044)

## 富文本
- slate
- draft.js
## 地图
- Openlayers
- Arcgis

## npm管理
> 要求：(node版本v8.12.0)
   1. 项目打包压缩
   2. npm adduser  注册
   2. npm login
   2. npm publish
- 如何管理npm 包 package.lock.json
## 收集常用包
- iLL8 国际化
- react-redux
## 测试
1. 单元测试
   - 组件测试用例编写
2. 集成测试
3. 端对端测试
4. 步骤
- 安装
- 创建 jest-config.js


## GIS 地图坐标系
### 坐标系的转换
```js
/**
 * 坐标转换。
 *
 * 支持 GPS、GCJ、BD(Baidu) 三种坐标系。
 *
 * 坐标精度；保留六位小数。
 */
const pi = 3.1415926535897932384626;
const xpi = (pi * 3000.0) / 180.0;
const a = 6378245.0;
const ee = 0.00669342162296594323;

export function transformLat(x, y) {
    let ret =
        -100.0 +
        2.0 * x +
        3.0 * y +
        0.2 * y * y +
        0.1 * x * y +
        0.2 * Math.sqrt(Math.abs(x));
    ret +=
        ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) *
            2.0) /
        3.0;
    ret +=
        ((20.0 * Math.sin(y * pi) + 40.0 * Math.sin((y / 3.0) * pi)) * 2.0) /
        3.0;
    ret +=
        ((160.0 * Math.sin((y / 12.0) * pi) + 320 * Math.sin((y * pi) / 30.0)) *
            2.0) /
        3.0;
    return ret;
}

export function transformLng(x, y) {
    let ret =
        300.0 +
        x +
        2.0 * y +
        0.1 * x * x +
        0.1 * x * y +
        0.1 * Math.sqrt(Math.abs(x));
    ret +=
        ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) *
            2.0) /
        3.0;
    ret +=
        ((20.0 * Math.sin(x * pi) + 40.0 * Math.sin((x / 3.0) * pi)) * 2.0) /
        3.0;
    ret +=
        ((150.0 * Math.sin((x / 12.0) * pi) +
            300.0 * Math.sin((x / 30.0) * pi)) *
            2.0) /
        3.0;
    return ret;
}

export function BD2GCJ(p) {
    const x = p.lng - 0.0065;
    const y = p.lat - 0.006;
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xpi);
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xpi);
    const lng = z * Math.cos(theta);
    const lat = z * Math.sin(theta);
    return {lng, lat};
}

export function GCJ2BD(p) {
    const x = p.lng;
    const y = p.lat;
    const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * xpi);
    const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * xpi);
    const lng = z * Math.cos(theta) + 0.0065;
    const lat = z * Math.sin(theta) + 0.006;
    return {lng, lat};
}

export function GPS2GCJ(p) {
    let dlat = transformLat(p.lng - 105.0, p.lat - 35.0);
    let dlng = transformLng(p.lng - 105.0, p.lat - 35.0);

    const radLat = (p.lat / 180.0) * pi;
    let magic = Math.sin(radLat);

    magic = 1 - ee * magic * magic;

    const sqrtMagic = Math.sqrt(magic);
    dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi);
    dlng = (dlng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi);
    return {
        lng: p.lng + dlng,
        lat: p.lat + dlat,
    };
}

export function GCJ2GPS(p) {
    const pp = GPS2GCJ(p);
    const lng = 2 * p.lng - pp.lng;
    const lat = 2 * p.lat - pp.lat;
    return {lng, lat};
}
```

## Cordova 混合型app框架  [地址](https://qq1037305420.github.io/Blog/nav.04.cordova/)
- [文档](https://cordova.apache.org/)
- [原生组件库](https://ionicframework.com/docs/native/overview)
- Cordova插件封装
### Init
#### plugman
- create
```js
plugman create --name <pluginName> --plugin_id <pluginID> --plugin_version <version> [--path <directory>] [--variable NAME=VALUE]
```
- platform
```js
plugman platform add --platform_name <platform>
```
- package.json
```js
plugman createpackagejson <directory>
```
#### plugin.xml
- plugin name
```js
<js-module name="streamax" src="www/streamax.js">
   <clobbers target="cordova.plugins.streamax" />
</js-module>
```
```js
cordova.plugins.streamax.toast(
   () => {
      resolve()
   },
   () => {
      reject()
   },
   [{ text }]
)
```
- lib files
```js
 <lib-file src="src/android/libs/streamax.jar" />
```
- resource-file
```js
<resource-file src="src/android/libs/armeabi" target="jniLibs/armeabi"/>
```
- source-file
```js
<source-file src="src/android/xxxx.java" target-dir="src/com/packagename/www" />
```
### JavaScript
#### register methods 注册插件函数
```js
function ObjectName() {}

ObjectName.prototype.goVideoPage = function(success, error) {
  exec(success, error, "pluginName", "methodName");
};

var me = new ObjectName();
module.exports = me;
```
#### fireWindowEvent 触发window事件
```js
var channel = require("cordova/channel");

function Streamax() {}

var me = new Streamax();

channel.onCordovaReady.subscribe(function() {
  me.registerKeyboardListener(
    function(streamaxKeycode) {
      cordova.fireWindowEvent("onkeyboardclick", { streamaxKeycode });
    },
    function(e) {
      console.error(e);
    }
  );
});
```
### Android
#### gradle 使用gradle
- plugin.xml
```js
<framework src="src/android/libs/common.gradle" custom="true" type="gradleReference" />
```
- xxx.gradle
例子: 阿里云push
```js
def minSdkVersion = 19

if(cdvMinSdkVersion == null) {
    ext.cdvMinSdkVersion = minSdkVersion;
} else if (cdvMinSdkVersion.toInteger() < minSdkVersion) {
    ext.cdvMinSdkVersion = minSdkVersion;
}

android {
    defaultConfig {
        applicationId "com.xxx.xxx" //包名
        ndk {
            //选择要添加的对应cpu类型的.so库。
            abiFilters 'armeabi', 'arm64-v8a', 'armeabi-v7a', 'x86', 'x86_64', 'mips', 'mips64'
        }
    }
}

dependencies {
    api 'com.aliyun.ams:alicloud-android-push:3.1.4@aar'
    api 'com.aliyun.ams:alicloud-android-utils:1.1.3'
    api 'com.aliyun.ams:alicloud-android-beacon:1.0.1'
    api 'com.aliyun.ams:alicloud-android-ut:5.4.0'
    api 'com.aliyun.ams:alicloud-android-push:3.1.4'
}
```
#### reflect methods 方法映射
- execute
```js
@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        Class<T> classname = T.class;
        try {
            Method method = classname.getDeclaredMethod(action, JSONArray.class, CallbackContext.class);
            return (Boolean) method.invoke(this, args, callbackContext);
        } catch (NoSuchMethodException e) {
            callbackContext.error("404");
        } catch (InvocationTargetException e) {
            callbackContext.error("500");
        } catch (IllegalAccessException e) {
            callbackContext.error("500");
        } catch (Exception e) {
            callbackContext.error("500");
        }
        return false;
    }
```
- method
```js
 private boolean openMapLocation(JSONArray args, final CallbackContext callbackContext) throws JSONException {
   JSONObject obj = args.getJSONObject(0);
   Log.wtf(obj.toString())
 }
```

# 文章与备忘录

## 正则表达式
```js
// \d 匹配数字 等价于 [0-9]
// \D 匹配非数字 等价于 [^0-9]
// ^ 匹配输入字行首
// $ 匹配输入行尾。
// * 匹配前面的子表达式任意次。
// + 匹配前面的子表达式一次或多次(大于等于1次）。
// ? 匹配前面的子表达式零次或一次。
// x|y 匹配x或y。
// [xyz] 字符集合。匹配所包含的任意一个字符。
// [^xyz] 负字符集合。匹配未包含的任意字符。
```
## 异常处理
> [廖雪峰官网](https://www.liaoxuefeng.com/wiki/1022910821149312/1120870328169696)
```js
try {
    throw new Error('错误');
    console.log(11) // 不会执行
} catch {
    console.log(22) // 执行
} finally {
    console.log(33) // 无论是否有错误，一定会被执行
}
```
- 1
```js
Uncaught (in promise) TypeError: Failed to fetch
```
- 2
```js
net::ERR_NAME_NOT_RESOLVED
```
- 3
```js
Uncaught (in promise) SyntaxError: Unexpected end of JSON input
```
## 部署
- package-lock.json 安装依赖部署项目
## 数据
- 如何判断一个变量是否为整数
```js
// parsInt 取整 和自生比较是否相等
```
- 0.1 + 0.2 == 0.3000000

## 其他
- 并行编译
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
- vue 禁止滚轮事件 @mousewheel.prevent
- v-if 表单验证失效 改用 v-show
- 手机事件处理hammer. js / fastclick
- 移动设备浏览器为了检查用户是否在做双击，默认click事件会大约延迟300毫秒左右 - 解决 Fastclick
- 元素柯拖拽属性：draggable="true"；事件：onDragstart，onDragenter，onDragend
- 对象的循环采用Object.keys() , for in 会循环原型链上的

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

# Vue
- 特点
   1. 组件级更新
      - 尽量多的拆分组件：数据更新只会加载，刷新当前组件，不会（避免）更新大组件（未变数据，结构），减少性能消耗
   2. 单向数据流
   3. 发布，订阅模式
   4. 响应式数据 - 原理：数据劫持
   5. 渐进式 - 只是解决了一小部分很重要的痛点，核心组成只提供两项最重要的功能（响应式数据，组件），然后其他为鼓励解决方案，可按需引入 - 比如路由，状态管理，构建工具链和 CLI
- 注意
   - 加载顺序： props, data, computed,created
   - [缓存路由](https://www.cnblogs.com/---godzilla---/p/11525035.html)
   - template空标签
   - 为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？==> 因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题
   - this.$children 在写组件库中重要
   - 组件传值不加冒号(:) 传递的为字符串
   ```js
   props: {
      aaa: {
        type: Boolean,
        default: false
      }
   }
   <cm aaa> // 此种写法 aaa 接受的值为true 
   ```
   - query path / params name 传参
   ```
   query 会显示在地址栏 相当于get 刷新不会丢失参数
   params 会显示在地址栏 相当于post 刷新参数会丢失
   ``` 
   - v-model修饰符
      - lazy  change事件触发
      - trim 去掉前后两端的所有空格
      - number 
- VUE、MVVM框架的三要素
   1. 响应式：vue如何监听到data的每个属性变化？
   2. 模板引擎：vue的模板如何被解析，指令如何处理？
   3. 渲染：vue的模板如何被渲染成html？以及渲染过程
- vue中如何解析模板
   - 模板是什么？
      - 本质：字符串
      - 有逻辑，如v-if v-for等
      - 与html很像，但有很大区别
      - 最终还要转化成html来显示
      - 模板最终要装换成js代码（render函数）
   - 问题解答
      - h函数生成vdom
      - patch函数渲染成dom
- Vue的整个实现流程
   - 解析模板成render函数
   - 响应式开始监听
   - 首次渲染，显示页面，且绑定依赖
   - data属性变化，触发rerender
- cli3 集成了TypeScript 
   - npm install --global @vue/cli 全局安装cli3
   - 选择安装TypeScript  等模块
- SEO - 静态化处理
- Vue就是一个构造函数
```js
Vue.prototype.$axios = ajax // 在其原型上添加方法
```
- 路由守卫 可在路由前处理做一些操作
- 源码核心
   - patch
## 一. 核心
### 运行模式与编译模式
- runtime 运行模式 体积小 new Vue中不能写template .vue文件中是用vue-loader解析的 
- runtime-with-compiler 用户可以写template 因为要解析template 体积大 一般看编译原理的时候使用 
```js
new Vue({
  el: '#app',
  router,
  render(h) {
    return h('div', this.n)
  }
})
```
- 为什么 引入的运行时代码vue/dist/vue.esm.js 可以写做
```js
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
### 1. 多种传值方式
   1. props / $emit 父子通信
      - .sync 可以直接在 子组件中改变 props 的
      - 验证（易忘点）
      ```js
         propC: { // 必填的字符串
            type: String,
            required: true
         },
         propF: { // 自定义验证函数
            validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
         }
         注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
      ```
      - 对象数据添加get,set设置一个属性 子组件可以直接更改数据
      - 或者重新定义一个变量接受 props
      - $on 监听自定义事件 $emit
   2. ref 与 $parent / $children 适用 父子组件通信
   3. EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信(通知所有 - 毫无关系的组件 叔侄关系 son1 - parent2)
   4. $dispatch(可自己实现) - 向上查找(只通知上级父级 - 父子链关系)
   5. $broadcast(可自己实现) - 向下查找 广播 递归 子级具有某个方法的全部执行
   ```js
    Vue.prototype.$broadcast = function(eventName, value) {
       const broadcast = (children) => {
          children.forEach(child => {
             child.emit(eventName, value)
             if(child.$children) {
                broadcast(eventName, value)
             }
          })
       }
       broadcast(eventName, value)
    }
   ```
   5. $attrs/$listeners 适用于 隔代组件通信
   6. provide / inject 适用于 隔代组件通信
   7. vuex
   8. 父组件获取子组件的值 `修饰符.sync 同步数据`

### 2. 自定义指令
```js
fn(el, bing, vnode) {
    // 三个参数值
}
```
   
### 3. 双向数据绑定实现 （响应式）
   - 数据劫持
   ```js
    function() {
        aa = 1
    }
   ```
   - 什么是响应式
      - 修改data属性后，vue立刻监听到
      - data属性被代理到vm上
   - Object.defineProperty(obj, prop, desc) 实现响应式的核心函数
   ```
      Object.defineProperty(obj, prop, desc)的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
      模板中没有的数据，不会走get监听，所以也不会走set监听，Object.defineProperty的原则是走get才会走set,防止无用的数据重复渲染。
   ```
   - 问题解答
      - 关键是理解Object.defineProperty
      - 将data的属性代理到vm上
      ```js
         var vm = {}
         var data = {
            name: 'zhangsan',
            age: 20
         }

         var key, value
         for (key in data) {
            (function (key) {
               Object.defineProperty(vm, key, {
                     get: function () {
                        console.log('get', data[key]) // 监听
                        return data[key]
                     },
                     set: function (newVal) {
                        console.log('set', newVal) // 监听
                        data[key] = newVal
                     }
               })
            })(key)
         }
      ```
   
### 4. data里的依赖收集
在它下面定义的变量 会添加get,和set属性
- data会解析成一个对象，防止组件共用一个对象，因此返回一个函数
```js
let a = {

}

```

### 5. watch 实现原理
### 6. computed 实现原理
- 具有缓存作用
### 7. 发布订阅模式
### 8. **diff 虚拟节点vnode 实现
- 原则：
1. 旧0与新0比较 - 相同直接更新，不同则新节点去旧队列中查找，插入之前
2. 旧[length - 1]与新[lenth - 1]比较
3. 旧[length - 1]与新0比较
4. 旧0与新[length - 1]比较

- 注意：
虚拟dom 其实就是用对象描述dom
key值为标记重用dom元素

### 9. SSH服务端渲染
### 10. 权限菜单
   1. 需求
   2. 场景应用

## 二. 易忘Api

- 混入
```
    minxs
```
- 继承
- 响应式数据
- 指令v-model 是一个语法糖 v-model='something' 相当于 v-bind:value="something" v-on:input="something = $event.target.value"
- :selectItems.sync 同步数据语法糖 同v-model
- updata()
   - 树组件中Dom更新使用
```js
   updata() {
      document.onclick = () => {
         this.ifFlag = -1;
      }
   }
```
- 其他api
   1. fordata()
   2. defin()

## 三. 优化

### vue3的性能提升在于：
- Proxy
- vdom 重写
   - 静态标记

### 1. data() 优化
   - data里的数据是响应式数据 会添加getter, set属性，即为响应式数据 但也增加了消耗，非响应式数据放在data外 或computed中或(**this实例上**)，减少性能消耗
如定时器:
```js
this.timer = setTimeOut(() => {

}, 1000)
```
   - 少用watch 耗费性能

### 2. v-if
v-if false值 里面的逻辑不会执行 v-show 只是样式display: none 里面的逻辑都会执行
### 3. v-for
:key 值应使用唯一id 不要使用index 节点对比更改会增加性能消耗 重新渲染dom 而唯一id 对比只去改变值而已
推荐的使用key，应该理解为“使用唯一id作为key”。因为index作为key，和不带key的效果是一样的。index作为key时，每个列表项的index在变更前后也是一样的，都是直接判断为sameVnode然后复用。
```
0 苹果 ----- 1 香蕉
1 香蕉 ----- 0 香蕉
2 橘子 ----- 2 香蕉
```

### 4. 预渲染
插件：SkeletonWebpackPlugin

### 5. ssr服务端渲染
需要配合nodejs 在服务端先渲染出页面 再返回给客户端

### 6. 用户体验 骨架屏
相当于loading

### 7. 长列表优化(只加载视图区内容)
scrollTop 计算

### 8. 路由懒加载
此方法会把原本打包到一个app.js文件分开成多个js文件打包，这样会减小单个文件的大小，但是不会减小整个js文件夹的大小。通过这种方式可以做到按需加载，只加载单个页面的js文件。
```js
{
   name: 'home',
   path: '/home',
   component(resolve) {
      require(['../views/home.vue], resolve)
   }
}
```
### 9. 组件异步加载
加载首页的时候，可以先给首页的子组件设置v-if = “false”，在页面初始化的时候再给子组件设置为true，此方法利用了v-if的惰性，setTimeout会使子组件在所有的组件初始化完成并显示后再对其子组件进行初始化。

注：在实际开发中还遇到了另一种情况也可以用此方法解决，在入口js中获取了app的token，但是在具体页面中发现不管是在created还是mounted中都是有时候能获取到token，有时候又不可以，是因为执行顺序的原因，可以通过 setTimeout 时间设置为0 这种方法把用到token的请求方法给排到最后，这样就能保证请求方法中有token了。
```js
created() {
   setTimeout(() => {
      this.isShow = true
   }, 0)
}
```
### 10. 使用异步组件，按需加载
```js
components: {
   'my-component':()=>import('./my-async-component')
}
```
### 11. 外部引入一些插件，不要在vue中引入
例如，我在此项目中有用到moment.js这个插件，在vue内部引入后打包的项目大小要比在外部用src的方式引入打包的项目大个300k左右。

首先，下载好moment.min.js包，然后在vue项目的webpack.base.conf.js中添加如下代码
```js
   externals: {
      'axios': 'axiox',
      'moment': 'moment'
   }
```
加上以上代码后是不会将moment.js给打包到js中的。

最后一步，将刚才下载的moment.min.js包，手动引入到打包好的index.html 文件中。

注：此方法真的会很有用，如果怕整个项目文件过大的话，还可以用cdn的方法引入: https://cdn.bootcss.com/moment.js/2.22.1/moment.min.js

很重要：冒号后面大写的名字是我们自己定义的名字和项目中要使用的名字 如：‘vue’: 'Vue', 后面的Vue 必须要和项目中的保持一致。
### 12. 尽量多的拆分组件，组件级更新(子组件改变只更新子组件)

## 四. vuex
- 同步异步方法
- dispatch

## 五. router
- hash 模式
- mode 模式
- 每个实例都能拿到router 
- 路由表改变时 Vue.util.defineReactive() 定义响应式数据 更新视图
```js
new Vue({
   router
})
```
- 应该是根组件有的话 才有 新的vue实例没有传的话 就应该没有
```js
Vue.mixin({
   beforeCreate() { // 这个before会先执行

   }
})
```

## 六. render函数之JSX应用
1. 模板缺陷
2. 函数式组件
3. 待整理训练营文档：[地址](http://www.zhufengpeixun.cn/train/vue-info/jsx.html#%E4%B8%80-%E6%A8%A1%E6%9D%BF%E7%BC%BA%E9%99%B7)

## 七. JWT认证
- JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案
   **解决问题：**session不支持分布式架构，无法支持横向扩展，只能通过数据库来保存会话数据实现共享。如果持久层失败会出现认证失败。
   **优点：**服务器不保存任何会话数据，即服务器变为无状态，使其更容易扩展

- Payload 负载、载荷
## 八. 杂记

- ast 语法树
- 组件
   1. 函数式组件
   2. 递归组件
   3. 全局（局部）组件
- 动态路由权限匹配
- [缓存组件，动态组件](https://www.jb51.net/article/160009.htm)
所以我们可以选择性的进行组件的缓存，也就是说你想让谁缓存，就让谁缓存，非常的自由与可配置
- extend
Vue.extend返回的是一个“扩展实例构造器”，也就是一个预设了部分选项的 Vue 实例构造器。刚学的时候对“扩展实例构造器”这一名词感觉很疑惑，其实它就像构造函数，构造函数中会事先定义好一些属性，new出来的对象也就默认有构造函数中的属性，同理Vue.extend也是如此，看下例
- $nextTick
应用场景
- SPA 单页面的理解  [更多](https://www.jianshu.com/p/b1564296a78b)
SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载
   1. 优点
      - 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
      - 基于上面一点，SPA 相对对服务器压力小；
      - 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
   2. 缺点
      - 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
      - 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
      - SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
- v-show 与 v-if 有什么区别
v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
- Class 与 Style 如何动态绑定
```js
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div> // 对象语法
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div> // 数组语法

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div> // 对象语法
<div v-bind:style="[styleColor, styleSize]"></div> // 数组语法
data() {
  return {
      styleColor: {
        color: 'red'
      },
      styleSize:{
        fontSize:'23px'
      }
  }
}
```
- Vue 的父组件和子组件生命周期钩子函数执行顺序
   - 加载渲染过程
      父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
   - 子组件更新过程
      父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
   - 父组件更新过程
      父 beforeUpdate -> 父 updated
   - 销毁过程
      父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
- 浏览器打开一个项目打包的情况图 npm run build --report
- vue-quill-editor vue官方富文本
- ts模式 需新建shims-vue.d.ts 解析.vue文件
## 易忘点
- 作用域插槽
```js
<slot :namme="张三"></slot>
<template slot-scope="propsName">{{propsName.name}}</template>
```
## SSR
> 如果你调研服务器端渲染 (SSR) 只是用来改善少数营销页面（例如 /, /about, /contact 等）的 SEO，那么你可能需要预渲染。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点。

如果你使用 webpack，你可以使用 prerender-spa-plugin 轻松地添加预渲染。它已经被 Vue 应用程序广泛测试 - 事实上，作者是 Vue 核心团队的成员
### nuxt.js
- seo 
- 首屏比spa(全部返回)快
- 路由功能
- sass,less预处理器
- 静态文件服务
## 源码重要方法
- 模板编译成render函数(解析后的结果生成render函数)放到options上
- $mount 挂载方法
- __patch__
- initGlobalAPI 初始化静态的一些vue方法 `core/index`
   - Vue.set `core/global-api/index`
   - Vue.nextTick
   - Vue.use
   - Vue.options
   - Vue.extend
   - Vue.component
## 注意
- .vue文件中 data可以是箭头函数 this就是指代的当前vue实例
- new Vue() 中不行  this向上查找为window
- 子组件的二次渲染问题
- 深度数据改变，视图为更新
- 作用域插槽
- 如何判断一个变量为 true / false
## 父子组件的生命周期
- 执行顺序
```js
created - 父
created - 子
mounted - 子
mounted - 父
```
## 监听数组变化
```js
data() {
    return {
      arrList: [1,2,3,4,5]
    };
  },
  methods: {
    changeArr() {
      // this.arrList[0] = 10;
      // 修改为：
      this.$set(this.arrList, 0, 10);
      // 或
      this.arrList.splice(0, 1, 10);
   }
```
- 原理
   - 监听数组变换 采用 函数劫持
   - 监听数组内元素变化采用？？
   - arr[0] = 12 // 不会被监控到
   - arr[0].a = 1 // 第1项是对象 能监控到他的属性
   - 监听深层对象
   ```js
   data() {
      return {
         aa: {
            bb: {
               person: {
                  name: "张三"
               }
            }
         }
      }
   }
   this.aa.bb.person.name = "王武" // 视图不会刷新
   ```
## vue 与react 设计的不同
- Vue 组件的二次渲染
   - 应用场景：数据通过异步操作后，对之前刚加载的数据进行变更后，发现数据不能生效
   - 实现目的：使组件强制二次渲染
   - 方法
      - 使用ref 保证数据改变后执行子组件方法 刷新
      - 当数据变更后,通过watch 监听，先去销毁当前的组件，然后再重现渲染。使用 v-if 可以解决这个问题
      ```js
       watch:{
             menuTree(){
 
                  this.reFresh= false
                  this.$nextTick(()=>{
                    
                    this.reFresh = true
                })
            }
       }
      ```
      - 通过vue key 实现，所以当key 值变更时，会自动的重新渲染
      ```js
         <template>
            <third-comp :key="menuKey"/>
         </template>
         
         <script>
            export default{
               data(){
                  return {
                        menuKey:1
                     }
               },
               watch:{
                     menuTree(){
         
                        ++this.menuKey
                     }
               }
         }
         </script>
      ```
## 踩踩坑
- 弹框组件切换应使用v-show, 使用v-if会导致校验失败的问题

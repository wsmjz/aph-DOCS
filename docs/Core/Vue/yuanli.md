# 源码原理认识
> mount 断点
1. package.json "build": "node scripts/build.js"
2. scripts/build.js 文件
  - 作用是使用rollup打包源代码
  - ./config 文件查看入口文件
3. 入口文件src
  - platforms 平台
    - web/entry-runtime-with-compiler.js (看Vue引入路劲)
    - runtime / compiler 区别 （编译vue中的template）
    - 找到 runtime/index 文件
4. runtime/index 文件
      - Vue.prototype.__patch__ (比对dom)
      - 找到 core/index (核心文件)
      - mountComponent 挂载逻辑
         - core/instance/lifecyle
         - updataComponent **组件级更新** -- 只要一new 就将这个watcher放到Dep.target
   5. core/index (核心文件)
      - initGlobalApi 初始化全局api
         - Vue.util
            - definReactive , 宏任务-先执行，微任务
            - set
            - delect
            - nextTick (下一事件环 eventLoop)
            - initUse Vue.use()
            - initMixin Vue.mixin ==> mergeOptions 合并选项 如果重名的变成数组 [beforeCreater]
            - initExtend Vue.extend  产生一个子类  让子类继承Vue
      - instance/index 真正的Vue 构造函数
         - initMixin(Vue) 初始化mixin
           - initLifecycle(vm) 初始化父子关系 $parent $ref
           - initEvents(vm)  初始化events属性 {}
           - initRender(vm) vm.$createElement => h() 方法
           - callHook(vm, 'beforeCreate') 调用beforeCreate
           - initInjections() 初始化注入数据 一直向上寻找——provided
           - initState(vm) 响应式原理 MVVM  data Props methods watch computed 
           - initProvide(vm)  vm._provided 定义属性
           - callHook(vm, 'created')
        - stateMixin this.$set this.$delete 混合全局方法 添加到原型上
        - eventsMixin $on $once $off $emit 用到了发布订阅
        - lifecycleMixin
            1. Vue.prototype._updata
            2. $forceUpdata(调用watcher 的updata)  $destory(组件销毁，解绑父子关系， *没有清空视图*)
        - renderMixin Vue.prototype_render $nextTick
## 1. 开发环境(rollup)
Rollup 是一个 JavaScript 模块打包器,可以将小块代码编译成大块复杂的代码， rollup.js更专注于Javascript类库打包 （开发应用时使用Wwebpack，开发库时使用Rollup）
### 安装rollup环境
```sh
npm install @babel/preset-env @babel/core rollup rollup-plugin-babel rollup-plugin-serve cross-env -D
```
`rollup.config.js文件编写`
```js
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
export default {
    input: './src/index.js',
    output: {
        format: 'umd', // 模块化类型
        file: 'dist/umd/vue.js', 
        name: 'Vue', // 打包后的全局变量的名字
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        process.env.ENV === 'development'?serve({
            open: true,
            openPage: '/public/index.html',
            port: 3000,
            contentBase: ''
        }):null
    ]
}
```
`配置.babelrc文件`
```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

`执行脚本配置`
```json
"scripts": {
    "build:dev": "rollup -c",
    "serve": "cross-env ENV=development rollup -c -w"
}
```


## 2. 响应式原理
> Observer, Watcher, 数据劫持<br>
导出`vue构造函数`
```js
import {initMixin} from './init';

function Vue(options) {
    this._init(options);
}
initMixin(Vue); // 给原型上新增_init方法
export default Vue;
```
`init`方法中初始化vue状态
```js
import {initState} from './state';
export function initMixin(Vue){
    Vue.prototype._init = function (options) {
        const vm  = this;
        vm.$options = options
        // 初始化状态
        initState(vm)
    }
}
```
根据不同属性进行初始化操作
```js
export function initState(vm){
    const opts = vm.$options;
    if(opts.props){
        initProps(vm);
    }
    if(opts.methods){
        initMethod(vm);
    }
    if(opts.data){
        // 初始化data
        initData(vm);
    }
    if(opts.computed){
        initComputed(vm);
    }
    if(opts.watch){
        initWatch(vm);
    }
}
function initProps(){}
function initMethod(){}
function initData(){}
function initComputed(){}
function initWatch(){}
```
### 1.初始化数据
```js
import {observe} from './observer/index.js'
function initData(vm){
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm) : data;
    observe(data);
}
```
### 2.递归属性劫持
```js
class Observer { // 观测值
    constructor(value){
        this.walk(value);
    }
    walk(data){ // 让对象上的所有属性依次进行观测
        let keys = Object.keys(data);
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let value = data[key];
            defineReactive(data,key,value);
        }
    }
}
function defineReactive(data,key,value){
    observe(value);
    Object.defineProperty(data,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue == value) return;
            observe(newValue);
            value = newValue
        }
    })
}
export function observe(data) {
    if(typeof data !== 'object' && data != null){
        return;
    }
    return new Observer(data);
}
```
### 3.数组方法的劫持
```js
import {arrayMethods} from './array';
class Observer { // 观测值
    constructor(value){
        if(Array.isArray(value)){
            value.__proto__ = arrayMethods; // 重写数组原型方法
            this.observeArray(value);
        }else{
            this.walk(value);
        }
    }
    observeArray(value){
        for(let i = 0 ; i < value.length ;i ++){
            observe(value[i]);
        }
    }
}
```
重写数组原型方法
```js
let oldArrayProtoMethods = Array.prototype;
export let arrayMethods = Object.create(oldArrayProtoMethods);
let methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort',
    'splice'
];
methods.forEach(method => {
    arrayMethods[method] = function (...args) {
        const result = oldArrayProtoMethods[method].apply(this, args);
        const ob = this.__ob__;
        let inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2)
            default:
                break;
        }
        if (inserted) ob.observeArray(inserted); // 对新增的每一项进行观测
        return result
    }
})
```
增加__ob__属性
```js
class Observer { 
    constructor(value){
        Object.defineProperty(value,'__ob__',{
            enumerable:false,
            configurable:false,
            value:this
        });
        // ...
    }
 }
```
> 给所有响应式数据增加标识，并且可以在响应式上获取Observer实例上的方法
### 4.数据代理
```js
function proxy(vm,source,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[source][key];
        },
        set(newValue){
            vm[source][key] = newValue;
        }
    });
}
function initData(vm){
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm) : data;
    for(let key in data){ // 将_data上的属性全部代理给vm实例
        proxy(vm,'_data',key)
    }
    observe(data);
}
```


## 3. 模板编译
> Compile
- render函数
- 文档碎片 遍历
   - 获取Dom节点属性 node.attributes // 类数组 [...attrs] type="type" v-model="message"
   - 编译{{}} 获取文本节点内容 node.textContent
   - 改名字value
   ```js
   let [name, value:expr] = attr
   ```
```js
Vue.prototype._init = function (options) {
    const vm = this;
    vm.$options = options;
    // 初始化状态
    initState(vm);
    // 页面挂载
    if (vm.$options.el) {
    	vm.$mount(vm.$options.el);
    }
}
Vue.prototype.$mount = function (el) {
    const vm = this;
    const options = vm.$options;
    el = document.querySelector(el);

    // 如果没有render方法
    if (!options.render) {
        let template = options.template;
        // 如果没有模板但是有el
        if (!template && el) {
        	template = el.outerHTML;
        }
        const render= compileToFunctions(template);
        options.render = render;
    }
}
```
将template编译成render函数
### 1.解析标签和内容
```js
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;  
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`); // 标签开头的正则 捕获的内容是标签名
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`); // 匹配标签结尾的 </div>
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // 匹配属性的
const startTagClose = /^\s*(\/?)>/; // 匹配标签结束的 >
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g
function start(tagName,attrs){
    console.log(tagName,attrs)
}
function end(tagName){
    console.log(tagName)
}
function chars(text){
    console.log(text);
}
function parseHTML(html){
    while(html){
        let textEnd = html.indexOf('<');
        if(textEnd == 0){
            const startTagMatch = parseStartTag();
            if(startTagMatch){
                start(startTagMatch.tagName,startTagMatch.attrs);
                continue;
            }
            const endTagMatch = html.match(endTag);
            if(endTagMatch){
                advance(endTagMatch[0].length);
                end(endTagMatch[1]);
                continue;
            }
        }
        let text;
        if(textEnd >= 0){
            text = html.substring(0,textEnd);
        }
        if(text){
            advance(text.length);
            chars(text);
        }
    }
    function advance(n){
        html = html.substring(n);
    }
    function parseStartTag(){
        const start = html.match(startTagOpen);
        if(start){
            const match = {
                tagName:start[1],
                attrs:[]
            }
            advance(start[0].length);
            let attr,end;
            while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))){
                advance(attr[0].length);
                match.attrs.push({name:attr[1],value:attr[3]});
            }
            if(end){
                advance(end[0].length);
                return match
            }
        }
    }
}
export function compileToFunctions(template){
    parseHTML(template);
    return function(){}
}
```
### 2.生成ast语法树
语法树就是用对象描述js语法
```js
{
    tag:'div',
    type:1,
    children:[{tag:'span',type:1,attrs:[],parent:'div对象'}],
    attrs:[{name:'zf',age:10}],
    parent:null
}
```
```js
let root;
let currentParent;
let stack = [];
const ELEMENT_TYPE = 1;
const TEXT_TYPE = 3;

function createASTElement(tagName,attrs){
    return {
        tag:tagName,
        type:ELEMENT_TYPE,
        children:[],
        attrs,
        parent:null
    }
}
function start(tagName, attrs) {
    let element = createASTElement(tagName,attrs);
    if(!root){
        root = element;
    }
    currentParent = element;
    stack.push(element);
}
function end(tagName) {
    let element = stack.pop();
    currentParent = stack[stack.length-1];
    if(currentParent){
        element.parent = currentParent;
        currentParent.children.push(element);
    }
}
function chars(text) {
    text = text.replace(/\s/g,'');
    if(text){
        currentParent.children.push({
            type:TEXT_TYPE,
            text
        })
    }
}
```
### 3.生成代码
template转化成render函数的结果
```html
<div style="color:red">hello {{name}} <span></span></div>
render(){
   return _c('div',{style:{color:'red'}},_v('hello'+_s(name)),_c('span',undefined,''))
}
```
实现代码生成
```js
function gen(node) {
    if (node.type == 1) {
        return generate(node);
    } else {
        let text = node.text
        if(!defaultTagRE.test(text)){
            return `_v(${JSON.stringify(text)})`
        }
        let lastIndex = defaultTagRE.lastIndex = 0
        let tokens = [];
        let match,index;
        
        while (match = defaultTagRE.exec(text)) {
            index = match.index;
            if(index > lastIndex){
                tokens.push(JSON.stringify(text.slice(lastIndex,index)));
            }
            tokens.push(`_s(${match[1].trim()})`)
            lastIndex = index + match[0].length;
        }
        if(lastIndex < text.length){
            tokens.push(JSON.stringify(text.slice(lastIndex)))
        }
        return `_v(${tokens.join('+')})`;
    }
}
function getChildren(el) { // 生成儿子节点
    const children = el.children;
    if (children) {
        return `${children.map(c=>gen(c)).join(',')}`
    } else {
        return false;
    }
}
function genProps(attrs){ // 生成属性
    let str = '';
    for(let i = 0; i<attrs.length; i++){
        let attr = attrs[i];
        if(attr.name === 'style'){
            let obj = {}
            attr.value.split(';').forEach(item=>{
                let [key,value] = item.split(':');
                obj[key] = value;
            })
            attr.value = obj;
        }
        str += `${attr.name}:${JSON.stringify(attr.value)},`;
    }
    return `{${str.slice(0,-1)}}`;
}
function generate(el) {
    let children = getChildren(el);
    let code = `_c('${el.tag}',${
        el.attrs.length?`${genProps(el.attrs)}`:'undefined'
    }${
        children? `,${children}`:''
    })`;
    return code;
}
let code = generate(root);
```
### 4.生成render函数
```js
export function compileToFunctions(template) {
    parseHTML(template);
    let code = generate(root);
    let render = `with(this){return ${code}}`;
    let renderFn = new Function(render);
    return renderFn
}
```

## 4. 创建渲染watcher
### 1.初始化渲染Watcher
- [地址1](http://zhufengpeixun.com/jiagou/vue-analyse/one.html)
- [地址](http://zhufengpeixun.com/jiagou/)
## 5. 生命周期
## 6. 依赖收集
## 7. 异步更新nextTick

## Api实现原理
- $emit
- set()
- 指令
   - v-on
   - v-bind(简写:)

## 其他
- 一个.vue文件会返回什么


## 响应式
- 对象监听
- 数组监听
## 模板编译
- 正则解析标签和内容
- 生成ast语法树
  ```js
  let ast = parseHtml(template)
  ```
- 生成代码
   ```js
  let code = generate(ast)
  ```

- 编译为`render`函数
> 先解析render选项，再template，最后外部模块<br>
> 注意: template模板中不可以字符串开头 必须标签开头
   - render函数将模板字符串 转化为 ast 抽象语法树
      - 正则解析
      - 前进删除`advance`函数
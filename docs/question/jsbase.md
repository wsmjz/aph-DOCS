## 数组扁平化
将一个多维数组变为一个一维数组
1. 使用flat()
```js
const res1 = arr.flat(Infinity);
```
2. 利用正则
```js
// 但数据类型都会变为字符串
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
```
3. 正则改良
```js
const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
```
4. 使用reduce
```js
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const res4 = flatten(arr);
```
5. 函数递归
```js
const res5 = [];
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
}
fn(arr);
```

## 数组去重
```js
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
```
1. 利用Set
```js
const res1 = Array.from(new Set(arr));
```
2. 两层for循环+splice
```js
const unique1 = arr => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--;
        j--;
      }
    }
  }
  return arr;
}
```
3. indexOf
```js
const unique2 = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
}
```
> 用include、filter，思路大同小异
4. include
```js
const unique3 = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}
```
5. filter
```js
const unique4 = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
```
6. Map
```js
const unique5 = arr => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}
```

## 类数组转化为数组
类数组是具有length属性，但不具有数组原型上的方法。常见的类数组有arguments、DOM操作方法返回的结果
1. Array.from
```js
Array.from(document.querySelectorAll('div'))
```
2. Array.prototype.slice.call()
```js
Array.prototype.slice.call(document.querySelectorAll('div'))
```
3. 扩展运算符
```js
[...document.querySelectorAll('div')]
```
4. concat
```js
Array.prototype.concat.apply([], document.querySelectorAll('div'));
```


## Array.prototype.filter()
MDN
## Array.prototype.map()
mdn 实现
```js
Array.prototype.map = function(callback, thisArg) {
  if (this == undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const res = [];
  // 同理
  const O = Object(this);
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in O) {
      // 调用回调函数并传入新数组
      res[i] = callback.call(thisArg, O[i], i, this);
    }
  }
  return res;
}
```
## Array.prototype.forEach()
```js
Array.prototype.forEach = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + ' is not a function');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
}
```
## Array.prototype.reduce()
```js
Array.prototype.reduce = function(callback, initialValue) {
  if (this == undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callbackfn + ' is not a function');
  }
  const O = Object(this);
  const len = this.length >>> 0;
  let accumulator = initialValue;
  let k = 0;
  // 如果第二个参数为undefined的情况下
  // 则数组的第一个有效值作为累加器的初始值
  if (accumulator === undefined) {
    while (k < len && !(k in O)) {
      k++;
    }
    // 如果超出数组界限还没有找到累加器的初始值，则TypeError
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = O[k++];
  }
  while (k < len) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O);
    }
    k++;
  }
  return accumulator;
}
```
## Function.prototype.apply()
```js
Function.prototype.apply = function(context = window, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
}
```
## Function.prototype.call
```js
Function.prototype.call = function(context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;

  const res = this[fn](...args);
  delete this.fn;
  return res;
}
```
## Function.prototype.bind
```js
Function.prototype.bind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error("Type Error");
  }
  // 保存this的值
  var self = this;

  return function F() {
    // 考虑new的情况
    if(this instanceof F) {
      return new self(...args, ...arguments)
    }
    return self.apply(context, [...args, ...arguments])
  }
}
```
## debounce（防抖)
触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。<br>
> 防抖常应用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次。
```js
const debounce = (fn, time) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  }
};
```

## throttle（节流）
高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率
> 节流常应用于鼠标不断点击触发、监听滚动事件
```js
const throttle = (fn, time) => {
  let flag = true;
  return function() {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  }
}
```

## 函数珂里化
> 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)<br>
实现add(1)(2)(3)(4)=10; 、 add(1)(1,2,3)(2)=9;
```js
function add() {
  const _args = [...arguments];
  function fn() {
    _args.push(...arguments);
    return fn;
  }
  fn.toString = function() {
    return _args.reduce((sum, cur) => sum + cur);
  }
  return fn;
}
```

## 模拟new操作
3个步骤
1. 以ctor.prototype为原型创建一个对象。
2. 执行构造函数并将this绑定到新创建的对象上。
3. 判断构造函数执行返回的结果是否是引用数据类型，若是则返回构造函数执行的结果，否则返回创建的对象。
```js
function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('Type Error');
  }
  const obj = Object.create(ctor.prototype);
  const res = ctor.apply(obj, args);

  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
}
```

## instanceof
instanceof运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上。
```js
const myInstanceof = (left, right) => {
  // 基本数据类型都返回false
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
```

## 原型继承
这里只写寄生组合继承了，中间还有几个演变过来的继承但都有一些缺陷
```js
function Parent() {
  this.name = 'parent';
}
function Child() {
  Parent.call(this);
  this.type = 'children';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

## Object.is
Object.is解决的主要是这两个问题
```js
+0 === -0  // true
NaN === NaN // false
```
```js
const is= (x, y) => {
  if (x === y) {
    // +0和-0应该不相等
    return x !== 0 || y !== 0 || 1/x === 1/y;
  } else {
    return x !== x && y !== y;
  }
}
```

## Object.assign
`Object.assign()`方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象（请注意这个操作是浅拷贝）
```js
Object.defineProperty(Object, 'assign', {
  value: function(target, ...args) {
    if (target == null) {
      return new TypeError('Cannot convert undefined or null to object');
    }
    
    // 目标对象需要统一是引用数据类型，若不是会自动转换
    const to = Object(target);

    for (let i = 0; i < args.length; i++) {
      // 每一个源对象
      const nextSource = args[i];
      if (nextSource !== null) {
        // 使用for...in和hasOwnProperty双重判断，确保只拿到本身的属性、方法（不包含继承的）
        for (const nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
  // 不可枚举
  enumerable: false,
  writable: true,
  configurable: true,
})
```

## 深拷贝
递归的完整版本, 考虑到了Symbol属性
```js
const cloneDeep1 = (target, hash = new WeakMap()) => {
  // 对于传入参数处理
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  // 哈希表中存在直接返回
  if (hash.has(target)) return hash.get(target);

  const cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);

  // 针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {
        cloneTarget[symKey] = cloneDeep1(target[symKey]);
      } else {
        cloneTarget[symKey] = target[symKey];
      }
    })
  }

  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] =
        typeof target[i] === 'object' && target[i] !== null
        ? cloneDeep1(target[i], hash)
        : target[i];
    }
  }
  return cloneTarget;
}

```

## promise原理
<!-- [参考](https://juejin.im/post/6860037916622913550) -->
<!-- https://juejin.im/post/6875152247714480136 -->
### 特点
- Promise构造函数接受一个函数参数exector，exector接受resolve和reject两个函数并立即执行，通过resolve/reject改变状态
- 状态改变后，触发原型链上的then、catch方法
- Promise类拥有静态方法resolve、reject、all、race
- 实例方法then, catch, 
- Promise内部异步代码执行的问题
- Promise的链式调用
- 值传透
- 状态一旦改变就不可逆！！自己
### Promise并行限制
就是实现有并行限制的Promise调度器问题。
### 实现
- 初版
- 支持异步和链式调用
此时初版还有三个方向需要完善：
1. Promise内部异步代码执行的问题。
2. Promise的链式调用
3. 值穿透: then参数期望是函数，传入非函数则会发生值穿透。值传透可以理解为，当传入then的不是函数的时候，这个then是无效的。
- 实现catch()方法
`Promise.prototype.catch`就是`Promise.prototype.then(null, onRejected)`的别名
```js
catch(onRejected) {
  return this.then(null, onRejected);
}
```

- Promise.resolve()
```js
static resolve(value) {
  if (value instanceof Promise) {
    // 如果是Promise实例，直接返回
    return value;
  } else {
    // 如果不是Promise实例，返回一个新的Promise对象，状态为FULFILLED
    return new Promise((resolve, reject) => resolve(value));
  }
}
```
- Promise.reject()
`Promise.reject`也会返回一个Promise实例，状态为REJECTED。<br>
与Promise.resolve不同的是，Promise.reject方法的参数会原封不动地作为reject的参数
```js
static reject(reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  })
}
```

- Promise.all
`Promise.all`是支持链式调用的，本质上就是返回了一个Promise实例，通过`resolve`和`reject`来改变实例状态。
```js
Promise.myAll = function(promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let index = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
      .then(res => {
        ans[i] = res;
        index++;
        if (index === promiseArr.length) {
          resolve(ans);
        }
      })
      .catch(err => reject(err));
    }
  })
}

```
- Promise.race
```js
Promise.race = function(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      // 如果不是Promise实例需要转化为Promise实例
      Promise.resolve(p).then(
        val => resolve(val),
        err => reject(err),
      )
    })
  })
}

```
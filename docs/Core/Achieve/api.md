# Api

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
> call 与 bind 是apply的语法糖，里面包装了apply()
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
- call,apply,bind
```js
// call
Function.prototype.myCall = function(ctx) {
    if(typeof this !== 'function') {
        throw new TypeError('请传入函数！');
    }
    const args = [...arguments].slice(1);
    // 为当前对象添加函数fn, 值为要调用的函数;
    ctx.fn = this ;
    // 执行添加的函数fn
    const res = ctx.fn(...args);
    // 执行完后删除
    delete ctx.fn;
    return res;
}

var n = 1;
var obj = { n: 2 };

function getValue() {
  console.log(this.n);
}

getValue.myCall(window) // 1
getValue.myCall(obj) // 2
```
```js
// apply 第二个参数为数组
```
```js
// bind
```
> bind 立即执行；apply,call 调用执行
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
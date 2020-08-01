# 核心实现
## 节流函数
## 防抖函数
## 柯里化函数
- curring 函数
## compose 函数
```js
function compose(...funcs) {
  return function(...args) {
    let result,
    len = funcs.length
    if(len === 0) {
      result = args
    } else if(len === 1) {
      result = funcs[0](...args)
    } else {
      result = funcs.reduce((x, y) => {
        return typeof x === 'function' ? y(x(...args)) : y(x)
      })
    }
    return result
  }
}
compose(fn1, fn2, fn3, fn2)(5) // 16
```
- 函数劫持
> 数组内部元素改变通过Vue.set() 或 splice
> vue 中改写数组方法
```js
Array.prototype.push = function() {}
```
- 函数切片
   - 在函数前加before
- new
- call
```js
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
- apply
   - 第二个参数为数组
- bind
> bind 立即执行；apply,call 调用执行
## promise实现
> 1).一个promise实例的状态一经确定就不会改变了<br>
> 2).如果返回的还是一个promise 会`等待(一直等待就相当于中断promise链的下面的then就不会执行了)`这个promise的返回结果
- resolvePromise函数 的几种情况
```js
// 处理第一个then的返回值x
function resolvePromise(promise2, x, resolve, reject) {
  if(x === promise2) {
    return reject(
      new TypeError('错误，自己永远等待自己')
    )
  }
}
```
- 如果先`.catch`，再`.then` 会是什么情况？
- 实例方法`.then`,`.catch`,`.finaly`,`.slice`,
- 类的方法`.all`
- 如何终止一个promise链？
```js
返回一个既不成功，也不失败的promise
```
- promise中进入失败态的`两种`情况
```js
```
- 为什么promise中链式调用返回的是一个新的promise，而不是this？
```js
let p = new Promise((resolve, reject) => {
  reject()
})
p.then(() => {

}, () => {
  return undefind // 本来应该走到下一个的成功 但是这儿reject已经是失败态了(如果then返回的是this当前实例的话) 就不可能变成成功态（一个promise实例的状态一经确定就不会改变了），就会矛盾了
}).then(() => { // 每次调用then都需要返回一个新的promise状态，保证状态不影响

}, () => {

})
```
## 刻意练习 曲线记忆 3-7-15-30

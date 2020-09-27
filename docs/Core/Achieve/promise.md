# promise实现原理
<!-- [参考](https://juejin.im/post/6860037916622913550) -->
<!-- https://juejin.im/post/6875152247714480136 -->
```js
let p = new Promise()
// 返回的 p 就是一个对象（可叫做promise对象，实例对象）
```
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
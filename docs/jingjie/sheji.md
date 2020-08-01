# 设计模式
1. 单一职责原则：类的设计尽量做到只有一个原因可以引起它的改变
2. 里氏替换原则：只要父类出现的地方子类就可以出现，且替换成子类也不会出现任何错误或者异常
3. 依赖倒置原则：针对接口编程，而不是针对实现编程
4. 接口隔离原则：不要建立臃肿庞大的接口。即接口尽量细化，同时接口中的方法尽量少
5. 迪米特法则：  一个对象应该对其他对象有最少的了解，也就是说一个类要对自己需要耦合或者调用的类知道的最少
6. 开闭原则：    一个软件实体，比如类，模块，函数应该对扩展开放，对修改关闭
[文章1](https://blog.csdn.net/weixin_33749131/article/details/91375763)
[文文章2](https://www.jianshu.com/p/15f20627750a)
## 创建型模式
### 简单工厂
```js
class Coffee1 {}
class Coffee2 {}
class Factory {
   static order(name) {
      case 'coffee1':
        return new Coffee1()
      case 'coffee2':
        return new Coffee2()
      ...
   }
} 
```
### 工厂方法模式
### 抽象工厂模式
### 单例模式
### 原型模式
### 建造者模式

## 结构型模式
### 适配器模式
### 装饰器模式
### 代理模式
### 外观模式
### 桥接模式
### 组合模式
### 享元模式

## 行为型模式
### 状态模式
   > 同于策略模式 内部维护状态
### 策略模式
   ```js
   class Customer {
      constructor() {
         this.kinds = {
            normal(amount) {
               return amount
            },
            member(amount) {
               return amount * .9
            },
            vip(amount) {
               return amount * .7
            }
         }
      }
      pay(kind, amount) {
         return this.kinds[kind](amount)
      }
   }
   let c = new Customer()
   c.pay('vip', 100)
   ```
### 模板方法模式
### 观察者模式（发布订阅）
> 观察者基于发布订阅  观察者包含发布订阅
```js
let event = { // 发布订阅 
   arr: [],
   on(fn) {
      this.arr.push(fn) // 订阅  添加每一个 到arr订阅器中
   },
   emit() {
      this.arr.forEach(fn => fn()); // 发布 依次执行 发布
   }
}
```
```js
class Subject { // 被观察者
   constructor() {
      this.arr = []
      this.state = '初始值'
   }
   changeState(newState) {
      this.state = newState
      this.arr.forEach(o = o.update(this)) // 状态改变了 依次调用每一个实例中的update
   }
   attach(o) { // 添加观察者
      this.arr.push(o) // o 每一个实例
   }
}
class Watcher { // 观察者 爸爸 妈妈
   constructor() {
      this.name = ''
   }
   update(obj) {
      console.log(obj.state) // 能拿到被观察者改变后的值
   }
}
let s = new Subject('小孩')
let o1 = new Watcher('爸爸')
let o2 = new Watcher('妈妈')
s.attach(o1) // 添加观察者
s.attach(o2) // 添加观察者
s.changeState('改变了')
```
### 命令模式
   - 命令对象 执行者 调用方
   - 
   ```js
   class Cooker {
      cook() {
         console.log('做饭')
      }
   }
   class Clean {
      clean() {
         console.log('清洁')
      }
   }
   class cookCommand {
      constructor(receiver) {
         this.receiver = receiver
      }
      execute() { // 执行
         this.receiver.cook()
      }
   }
   class cleanCommand {
      constructor(receiver) {
         this.receiver = receiver
      }
      execute() { // 执行
         this.receiver.clean()
      }
   }
   class Customer { // 顾客
      constructor(command) {
         this.command = command
      }
      cook() { // 定义一系列命令
         this.command.execute()
      }
      clean() {
         this.command.execute()
      }
   }
   let cooker = new Cooker() // 具体的执行者 厨师
   let cookCommand = new cookCommand(cooker) // 吧这个实例添加到 命令对象 中
   let customer = new Customer(cookCommand) // 执行者拿到命令对象 遥控板
   customer.cook() // 执行已有的命令
   ```
### 迭代子模式
### 责任链模式
### 备忘录模式
### 访问者模式
### 中介者模式
### 解释器模式

## 其他
### 并发型模式
### 线程池模式
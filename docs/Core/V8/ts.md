# TypeScript语法
我想表达的是应该尽量的复用类型或者使用类型推导，而不是一味的去声明新的类型，这样在项目后期维护或者代码重构时能带来一些方便
- 可以作为项目api
- 约定后端返回值 排错
- ts 系统始终考虑是否安全 是否可能出错
- 类型推导
- 类型注解
- 断言
```js
!
as
```
- js 高级语法
```js
?  ??  ! &&
```
## 数据类型
- 联合类型
### 基础类型
- number
- string
- boolean
- 数组
- 元组
- null
- undefind
- 枚举 enum
   - 普通
   - 常量
- void
- never
   - 完整性保护
- 字面量类型
   - 可以自己定义 写一个值
```js
interfer IOnly{
   age: 10 // 表示age属性只能为10
}
type x = 1 | 2 | 3 // 可以用type

type Direction = 'Up' | 'Down' | 'Left' | 'Right';
let direction:Direction = 'Down';
```
- bignit
- symbol
### 类
- 描述类型 *** 重要 麻烦
- 主要描述实例
```js
let a:String = new String()
```
### 对象类型
- object
### any任意类型
### 高级类型unknow

## 函数

- 具有参数类型，返回值类型，自身类型

## type

- 方便联合类型
- 写别名

## 接口

- 接口是抽象的, 自身不能实现 描述形状
- 不能写联合类型

- 抽象接口
abstract
```js
可实现具体
```
- 可以继承

```
imtend
```
- 可被实现
- 接口也可继承类
```js
class Anima {
   age: string = ""
   cat() {
      
   }
}
interfer ICat extends Anima{

}

```
- 混合接口
```
interfer {
   (): string
}
```

## 泛型

## 类
- class 继承
- 静态属性，静态方法
- 解释器 @Component
- 修饰符

### 类的修饰符
- public(公开的) 会绑定到this上
- protected(受保护的) 继承自己的才可访问 外面实例不可访问
- private(私有的
- readonly



# 断言
- 可以增加字段
# 类的实现
# 抽象类



## 类型推导

## 类型推断

## 类型保护

### 完整性
```js
interface ICircle {
    kind: 'circle',
    r: number
}
interface IRant {
    kind: 'rant',
    width: number,
    height: number
}
interface ISquare {
    kind: 'square',
    width: number
}
type Area = ICircle | IRant | ISquare
const isAssertion = (obj: never) => { }
const getArea = (obj: Area) => {
    switch (obj.kind) {
        case 'circle':
            return 3.14 * obj.r ** 2
        default:
            return isAssertion(obj); // 必须实现所有逻辑
    }
}
```

## 类型声明

## 兼容性
- 区间大于等于所需类型即可（也可用做`as断言`必须需要某些属性，其他可选）
```js
1.
interface IAnimal {
    car: string,
    home: string
}
interface IPerson {
    car: string,
    home: string,
    money: number
}
let animal: IAnimal;
let person: IPerson = {
    car: '奔驰',
    home: "别墅",
    money: 1000000000
};
animal = person;

2.
IPerson as IAnimal
```
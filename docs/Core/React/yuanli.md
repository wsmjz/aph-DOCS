# 源码认识
- Es6 class constructor实现
   - constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象
   ```js
    class Foo {
        constructor() {
            return {
                name: '新对象' // 若是返回基本数据类型.数字 instanceof还是返回true
            }
        }
    }
   // 判断谁是谁的实例
   // new Foo() instanceof Foo   // true
   new Foo() instanceof Foo // false
   ```
   - 类的所有方法都定义在类的prototype属性上面。
   ```js
    Point.prototype = {
        constructor() {},
        toString() {},
        toValue() {},
    };
   ```
   - es6类，完全可以看作构造函数的另一种写法`Point === Point.prototype.constructor // true`
    ```js
    function Ani() {

    }
    class Ani {

    }
    ```
    - super 既可以当做函数使用，也可以当做对象使用
- 类组件继承实现
## redux
- 40：10
- combineReducers


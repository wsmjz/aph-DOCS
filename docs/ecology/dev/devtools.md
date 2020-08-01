# 介绍
- 引入
```js
import { scrollShow } from 'ping-devtools/derective'
import { fomateTime } from 'ping-devtools/filters'
import { money } from 'ping-devtools/utils'
```
## 常用工具函数

### 获取时间，转换格式
```js
time(date, 'YY-MM-DD')
```
### 金钱格式化
```js
money(data, '￥')  // ￥200
```
### 千位数
```js
thousands(data, 3, ',') // 12,367,876  // 默认逗号分隔
```
### 保留小数
```js
retains(data, 2, false) // 298.09 // 235.00  // 默认末尾为0时也保留 false 末尾为0时 不保留
```
### 数据处理
支持链式调用
- 扁平化数据
- 树状话数据



## 指令
- 自定义指令
### 滚动显示
```js
**v-scrollShow**
```
> 控制滚动到可视区添加这个类    自定义添加这个类的效果 
### 懒加载数据
```js
**v-loadLists**
```
### 元素聚焦
```js
v-foucs
```


## 过滤器
### 时间格式
```js
fomate
```
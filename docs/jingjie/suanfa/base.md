# 算法
- [进阶之路](https://github.com/sisterAn/JavaScript-Algorithms)
- [博客](https://github.com/sisterAn/blog)
- [可搜索Fiber原理](https://github.com/sisterAn/blog/issues/34)
   - 这种生命周期会存在一个问题，那就是当更新复杂组件的最上层组件时，调用栈会很长，如果在进行复杂的操作时，就可能长时间阻塞主线程，带来不好的用户体验，Fiber 就是为了解决该问题而生。
   - Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了**异步渲染**，在不影响体验的情况下去**分段计算更新**
## 查找
- 分类
   - 二分
   - 二维数组查找
   - 旋转数组的最小数字
### 二分算法
- 代码
```js
function binarySearch(data, arr, start, end) {
    if (start > end) {
        return -1;
    }
    var mid = Math.floor((end + start) / 2);
    if (data == arr[mid]) {
        return mid;
    } else if (data < arr[mid]) {
        return binarySearch(data, arr, start, mid - 1);
    } else {
        return binarySearch(data, arr, mid + 1, end);
    }
}
```
- 应用
   - 长列表
- lpr vue缓存组件

### 二维数组查找


## DFS(深度优先)和BFS(广度优先)
> 时间复杂度和空间复杂度，它们的高低共同决定着一段代码质量的好坏
- [文章](http://www.conardli.top/docs/)
- [知识体系](http://www.conardli.top/blog/article/)
- [静水](https://slbyml.github.io/links/)
- [112](https://www.chavesgu.com/)
- [数据结构](http://www.conardli.top/docs/)
   - 差webpack系列
### 深度优先
与 BFS 不同，更早访问的结点可能不是更靠近根结点的结点。因此，你在DFS 中找到的第一条路径可能不是最短路径。<br>
在DFS中，结点的处理顺序是完全相反的顺序，就像它们被添加到栈中一样，它是后进先出。所以深度优先搜索一般**使用栈实现**。
### 广度优先
它的特点是越是接近根结点的结点将越早地遍历。<br>

例如，我们可以使用 BFS 找到从起始结点到目标结点的路径，特别是最短路径。<br>

在BFS中，结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，即先进先出，所以广度优先搜索一般**使用队列实现**
## 动态规划
动态规划往往是最能有效考察算法和设计能力的题目类型，面对这类题目最重要的是抓住问题的阶段，了解每个阶段的状态，从而分析阶段之间的关系转化。<br>
适用于动态规划的问题，需要满足最优子结构和无后效性，动态规划的求解过程，在于找到状态转移方程，进行自底向上的求解。<br>
自底向上的求解，可以帮你省略大量的复杂计算，例如上面的斐波拉契数列，使用递归的话时间复杂度会呈指数型增长，而动态规划则让此算法的时间复杂度保持在O(n)。
### 路径问题
- 最小路径和
- 不同路径
### 买卖股票类问题
- 描述1<br>
输入: [7,1,5,3,6,4]<br>
输出: 5<br>
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。<br>
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
- 描述2<br>
输入: [7,6,4,3,1]<br>
输出: 0<br>
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
#### 解法：动态规划
动态规划（Dynamic Programming，DP）是一种将复杂问题分解成小问题求解的策略，但与分治算法不同的是，分治算法要求各子问题是相互独立的，而动态规划各子问题是相互关联的。
> 分治，顾名思义，就是分而治之，将一个复杂的问题，分成两个或多个相似的子问题，在把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解则为子问题解的合并。<br>
- 我们使用动态规划求解问题时，需要遵循以下几个重要步骤：
   - 定义子问题
   - 实现需要反复执行解决的子子问题部分
   - 识别并求解出边界条件<br>
**第一步：定义子问题**<br>
动态规划是将整个数组归纳考虑，假设我们已经知道了 `i-1` 个股票的最大利润为 `dp[i-1]`，显然 `i` 个连续股票的最大利润为 `dp[i-1]` ，要么就是就是 `prices[i] - minprice` （ `minprice` 为前 `i-1` 支股票的最小值 ），在这两个数中我们取最大值

**第二步：实现需要反复执行解决的子子问题部分**<br>
`dp[i] = Math.max(dp[i−1], prices[i] - minprice)`

**第三步：识别并求解出边界条件**<br>
`dp[0]=0`
**最后一步：把尾码翻译成代码，处理一些边界情况**<br>
因为我们在计算 `dp[i]` 的时候，只关心 `dp[i-1]` 与 `prices[i]`，因此不用把整个 `dp` 数组保存下来，只需设置一个 `max` 保存 `dp[i-1]` 就好了

**代码实现（优化):**
```js
let maxProfit = function(prices) {
    let max = 0, minprice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        max = Math.max(max, prices[i] - minprice)
    }
    return max
}
console.log(maxProfit([7,1,5,3,6,4]))
```
**复杂度分析：**
- 时间复杂度：O(n)
- 空间复杂度：O(1)

#### 更多分类
- 最佳时机
- 打家劫舍

### 子序列问题
- 不同的子序列
- 乘积最大子序列
## 回溯算法
## 贪心算法
## 分治
## 递归和循环
- 一组规则，也称作递推关系
- 递归出口
- 避免重复计算
### 斐波那契数列
现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）
- 递归解法
```js
function Fibonacci(n) {
    if (n < 2) {
    return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```
- 递归加记忆化
> 使用一个数组缓存计算过的值。
```js
function Fibonacci(n, memory = []) {
    if (n < 2) {
    return n;
    }
    if (!memory[n]) {
    memory[n] = Fibonacci(n - 1, memory) + Fibonacci(n - 2, memory);
    }
    return memory[n];
}
```
- 动态规划解法
```js
function Fibonacci(n){
    if(n<=1){
        return n;
    }
    let i = 1;
    let pre = 0;
    let current = 1;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}
```
## 排序
- 冒泡
> 依次向右查找<br>
> O(n) 方 复杂度很大
- 二分
- LRP
# 可视化
**H5 webGl**
## echarts,heightcharts
- 注意: 改变数据后需重绘更新echarts
   1. 获取dom元素 myChart1.getDom()
   2. 执行更新方法 myChart1.resize();
   3. 例如 myChart1.getDom().style.height = echarH + "px";
- 取消网格线
```
xAxis: { // yAxis同
   splitLine: {
      show: false // 是否显示分隔线。默认数值轴显示，类目轴不显示。
   }
}
```
## svg
SVG 渲染器相比 Canvas 渲染器在移动端的总体表现更好
内存占用更低（这对移动端尤其重要）、渲染性能略高、并且用户使用浏览器内置的缩放功能时不会模糊
1. 路劲动画
   - 参数：M，A, L

## canvas
Canvas 更适合绘制图形元素数量非常大（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 特效
- https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial
- 属性：
### 阴影相关
1. content.shadowBlur = value
2. shadowColor
- 方法：
### 渐变相关
1. context.createLinearGradient(x0, y0, x1, y1)
### 图案相关
1. createPattern()
### 绘制路劲
1. content.beginPath()
### 位置检查
1. context.isPointInPath()
2. context.isPointInStroke()
### 变换
1. context.rotate()
### 动画
- h5 requestAnimation() 取代setTimeOut
## d3
## three
> three 是对webGl 封装的 一个js库
- 场景
- 相机
- 渲染函数
- http://www.webgl3d.cn/threejs/examples/#webgl_camera

## pixijs
## 流程图
### jsplumb
### mxgraph
### go.js
- xdh
### Fabric.js
> https://spritejs.org/#/
- 基于canvans的库
- Fabric.js是一个可以简化Canvas程序编写的库。 Fabric.js为Canvas提供所缺少的对象模型, svg parser, 交互和一整套其他不可或缺的工具
- Canvas提供一个好的画布能力, 但是Api不够友好。绘制简单图形其实还可以, 不过做一些复杂的图形绘制, 编写一些复杂的效果，就不是那么方便了。Fabric.js就是为此而开发，它主要就是用对象的方式去编写代码
## 可视化表单
## 可视化三角生成
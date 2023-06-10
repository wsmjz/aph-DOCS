# css 备忘录

## filter特性
> 组合使用时可能有奇效
```css
filter: blur(5px); /* 毛玻璃 */
filter: brightness(0.4); /* 亮度 */
 filter: contrast(200%); /* 对比度 */
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%); 
filter: hue-rotate(90deg); /* 色相 */
filter: invert(75%); /* 翻转 热成像 */
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);
```
## 居中
13. 居中问题(margin, padding, centen/line-hight position, flex, table, after)
   - ::after  --- 可以理解为 ::after 把 img 往下拉到了中间。
   ```css
      <div class="wrapper">
         <img src="test.png">
      </div>
      .wrapper {
         width: 300px;
         height: 300px;
         border: 1px solid #ccc;

         text-align: center;
      }

      .wrapper::after {
         content: '';
         display: inline-block;
         vertical-align: middle;
         height: 100%;
      }

      .wrapper > img {
         vertical-align: middle;
      }
   ```
   - ::before  --- font-size: 0; 的神秘之处在于，可以消除标签之间的间隙。另外，因为伪元素搭配的，都是最基础的 CSS写法，所以不存在兼容性的风险
   ```css
      <div class="wrapper">
         <img src="test.png">
      </div>
      .wrapper {
         width: 300px;
         height: 300px;
         border: 1px solid #ccc;

         text-align: center;
         font-size: 0;
      }

      .wrapper::before {
         display: inline-block;
         vertical-align: middle;
         font-size: 14px;
         content: '';
         height: 100%;
      }

      .wrapper > img {
         vertical-align: middle;
         font-size: 14px;
      }
   ```
```css
/* 1 */
.parent {
  display: grid;
  place-items: center;
}
```
## 其他
- transform translateY：0.8 可压缩内容 比如符号 X
- 伪类的z-index  须在父级加上z-index 才有效果 而不是自身元素上加
- 深度选择器 >>> /deep/
- vw不精细
- 悬停浮动 用 relative(相对定位) top 实现 不影响原有布局 
- calc()计算属性
- 3d 属性
- background 合写 必须 center/cover
- 定位原点transform: transtend
- object-fit
- 权重（内联-1000, id-100, 类-10, 元素-1）
- position
```js
- startic // z-index 无效 不脱离文档流
- reletive // z-index 无效 不脱离文档流
- absolute // z-index 有效 脱离文档流
- fixed // z-index 有效 脱离文档流
```
- BEM CEM css规范
- 如何实现0.5px的线
- not选择器
```js
not(main) { // 不是main类

}
```

1. calc()计算属性
2. 3d 属性
3. 穿透属性
4. background 合写 必须 center/cover
5. 重置样式表reset rem
6. 定位原点transform: transtend
7. object-fit
8. [你未必知道的49个CSS知识点](https://juejin.im/post/5d3eca78e51d4561cb5dde12)
9. width: 100% 指代元素content内容宽度
10. 隐藏css滚动条
11. 数字，字母需设置自动换行：word-wrap:break-word; 
14. 如果让两个div在一排内显示，那怎么办，可能有的同学会说使用display属性啊，把他们设置成inline-block。但是，你会发现两个div盒子中间有间隙，仅仅的这点间隙，到底是多大呢，如果我们在一行内计算整个盒模型的宽度的话，是否又计算的精准呢？所以使用display的方法是不对的，这时我们就用到了浮动属性 ，浮动可以实现元素并排。
15. 权重（内联-1000, id-100, 类-10, 元素-1）
- 语法
```css
:root {
   ---c: 6
}
```

## 模块化方案，样式隔离
> 主题配置 less sass stylus

- scope
- css Modules
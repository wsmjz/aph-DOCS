# 内置主题

MyWeb 4.x 的样式是用SCSS预处理，内置了一套变量。原则上在开发过程只允许使用内置的变量，不建议另起变量名，便于实现主题在线切换功能。
如需定制主题，只需重新给变量赋值即可。

## 通用配置

通用配置是经过实践得出最合适的规范，建议任何主题都应该遵从。

### 字体
:::demo(theme-1)
```html
<template>
   <table>
      <tr>
      <th>层级</th>
      <th>变量名</th>
      <th>字体大小</th>
      <th>效果预览</th>
     </tr>
     <tr>
       <td>主标题</td>
       <td>$--font-size-extra-large</td>
       <td>30px</td>
       <td><span class="font-size-extra-large">MyWeb 4.x 文字样本</span></td>
     </tr>
     <tr>
       <td>标题</td>
       <td>$--font-size-large</td>
       <td>24px</td>
       <td><span class="font-size-large">MyWeb 4.x 文字样本</span></td>
     </tr>
     <tr>
       <td>小标题</td>
       <td>$--font-size-medium</td>
       <td>20px</td>
       <td> <span class="font-size-medium">MyWeb 4.x 文字样本</span></td>
     </tr>
    <tr>
       <td>正文（ 大 ）</td>
       <td>$--font-size-normal</td>
       <td>18px</td>
       <td> <span class="font-size-normal">MyWeb 4.x 文字样本</span></td>
     </tr>
     <tr>
       <td>正文</td>
       <td>$--font-size</td>
       <td>16px</td>
       <td><span class="font-size">MyWeb 4.x 文字样本</span></td>
     </tr>
      <tr>
       <td>正文（ 小 ）</td>
        <td>$--font-size-small</td>
        <td>14px</td>
        <td><span class="font-size-small">MyWeb 4.x 文字样本</span></td>
      </tr>
      <tr>
        <td>辅助文字</td>
        <td>$--font-size-extra-small</td>
        <td>12px</td>
        <td><span class="font-size-extra-small">MyWeb 4.x 文字样本</span></td>
      </tr>
   </table>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  
  table {
     display: table;
     width: 100%;
  }
  
  .font-size-extra-large{
    font-size: $--font-size-extra-large;
  }
  .font-size-large {
     font-size: $--font-size-large;
  }
  .font-size-medium {
     font-size: $--font-size-medium;
  }
  .font-size-normal {
     font-size: $--font-size-normal;
  }
  .font-size {
    font-size: $--font-size;
  }
  .font-size-small{
    font-size: $--font-size-small;
  }
  .font-size-extra-small{
    font-size: $--font-size-extra-small;
  }
</style>

```
::::

### 行高
:::demo(theme-2)
```html
<template>
  <table>
     <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="80">默认值</th>
      <th>效果预览</th>
    </tr>
    <tr>
      <td>宽松</td>
       <td>$--line-height-large</td>
       <td>2em</td>
       <td class="line-height-large"><span v-for="n in 20" :key="n">文字样本</span></td>
    </tr>
    <tr>
      <td>常规</td>
       <td>$--line-height-normal</td>
       <td>1.5em</td>
       <td class="line-height-normal"><span v-for="n in 20" :key="n">文字样本</span></td>
    </tr>
    <tr>
      <td>紧凑</td>
       <td>$--line-height-small</td>
       <td>1.3em</td>
       <td class="line-height-small"><span v-for="n in 20" :key="n">文字样本</span></td>
    </tr>
      <tr>
        <td>无行高</td>
         <td>$--line-height-none</td>
         <td>1em</td>
         <td class="line-height-none"><span v-for="n in 20" :key="n">文字样本</span></td>
      </tr>
    </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  .line-height-large {
     line-height: $--line-height-large;
  }
  .line-height-normal {
     line-height: $--line-height-normal;
  }
  .line-height-small {
     line-height: $--line-height-small;
  }
  .line-height-none {
     line-height: $--line-height-none;
  }
</style>

```
:::

### 内边距
:::demo(theme-3)
```html
<template>
  <table>
   <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="80">默认值</th>
      <th>效果预览</th>
   </tr>
    <tr>
      <td>大边距</td>
      <td>$--padding-large</td>
      <td>1.5rem</td>
      <td><span class="box padding-large">文字样本</span></td>
    </tr>
    <tr>
      <td>正常边距</td>
      <td>$--padding-normal</td>
      <td>1rem</td>
      <td><span class="box padding-normal">文字样本</span></td>
    </tr>
    <tr>
      <td>小边距</td>
      <td>$--padding-small</td>
      <td>0.5rem</td>
      <td><span class="box padding-small">文字样本</span></td>
    </tr>
    <tr>
      <td>无边距</td>
      <td>$--padding-none</td>
      <td>0</td>
      <td><span class="box padding-none">文字样本</span></td>
    </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   background: $--color-primary;
   color: $--color-primary-light-10;
   display: inline-block;
  }
  .padding-large {
    padding: $--padding-large;
  }
  .padding-normal {
    padding: $--padding-normal;
  }
  .padding-small {
    padding: $--padding-small;
  }
  .padding-none {
    padding: $--padding-none;
  }
</style>

```
:::

### 圆角
:::demo(theme-4)
```html
<template>
  <table>
   <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="80">默认值</th>
      <th>效果预览</th>
   </tr>
    <tr>
      <td>大圆角</td>
      <td>$--border-radius-large</td>
      <td>8px</td>
      <td><span class="box border-radius-large"></span></td>
    </tr>
    <tr>
      <td>正常圆角</td>
      <td>$--border-radius-base</td>
      <td>4px</td>
      <td><span class="box border-radius-base"></span></td>
    </tr>
    <tr>
      <td>小圆角</td>
      <td>$--border-radius-small</td>
      <td>2px</td>
      <td><span class="box border-radius-small"></span></td>
    </tr>
    <tr>
      <td>圆形</td>
      <td>$--border-radius-circle</td>
      <td>100%</td>
      <td><span class="box border-radius-circle"></span></td>
    </tr>
    <tr>
      <td>无圆角</td>
      <td>$--border-radius-none</td>
      <td>0</td>
      <td><span class="box border-radius-none"></span></td>
    </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   background: $--color-primary;
   display: inline-block;
   width: 100px;
   height: 100px;
  }
  
  .border-radius-large {
    border-radius: $--border-radius-large;
  }
  
  .border-radius-base {
    border-radius: $--border-radius-base;
  }
  .border-radius-small {
    border-radius: $--border-radius-small;
  }
  
  .border-radius-circle {
    border-radius: $--border-radius-circle;
  }
  
  .border-radius-none {
    border-radius: $--border-radius-none;
  }

</style>

```
:::

### 阴影
:::demo(theme-5)
```html
<template>
  <table>
   <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="400">默认值</th>
      <th>效果预览</th>
   </tr>
    <tr>
      <td>基础投影</td>
      <td>$--box-shadow-base</td>
      <td>0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)</td>
      <td><span class="box box-shadow-base"></span></td>
    </tr>
    <tr>
      <td>大投影</td>
      <td>$--box-shadow-dark</td>
      <td>0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)</td>
      <td><span class="box box-shadow-dark"></span></td>
    </tr>
    <tr>
      <td>小投影</td>
      <td>$--box-shadow-light</td>
      <td>0 2px 12px 0 rgba(0, 0, 0, 0.1) </td>
      <td><span class="box box-shadow-light"></span></td>
    </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   /*background: $--color-primary;*/
   display: inline-block;
   width: 100px;
   height: 100px;
  }
  
  .box-shadow-base {
     box-shadow: $--box-shadow-base;
  }
 
  .box-shadow-dark {
     box-shadow: $--box-shadow-dark;
  }
  
  .box-shadow-light {
     box-shadow: $--box-shadow-light;
  }

</style>

```
:::

### 边框
:::demo(theme-6)
```html
<template>
   <table>
    <tr>
       <th width="80">用途</th>
       <th width="200">变量名</th>
       <th width="300">默认值</th>
       <th>效果预览</th>
    </tr>
     <tr>
       <td>实线</td>
       <td>$--border-base</td>
       <td>1px solid $--color-border</td>
       <td class="box"><div class="border-base"></div></td>
     </tr>
     <tr>
       <td>虚线</td>
       <td>$--border-dashed</td>
       <td>2px dashed $--color-border</td>
       <td class="box"><div class="border-dashed"></div></td>
     </tr>
    </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
    
    div {
      height: 50px;
    }
  }
  .border-base {
    border: $--border-base;
  }
  .border-dashed {
    border: $--border-dashed;
  }
</style>  

```
:::

## 默认主题配色

### 背景/前景色
:::demo(theme-7)
```html
<template>
  <table>
     <tr>
        <th width="80">用途</th>
        <th width="200">变量名</th>
        <th width="200">默认值</th>
        <th>效果预览</th>
     </tr>
     <tr>
        <td>背景色</td>
        <td>$--background</td>
        <td>$white</td>
        <td><div class="box background"></div></td>
     </tr>
     <tr>
        <td>前景色</td>
        <td>$--color</td>
        <td>$neutral-black-2</td>
        <td><div class="box color"></div></td>
     </tr>
     <tr>
        <td>搭配效果</td>
        <td></td>
        <td></td>
        <td><div class="box background font-color">文字样本</div></td>
     </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   height: 50px;
   text-align: center;
   line-height: 50px;
  }
  
  .background {
     background: $--background;
  }
 
  .color {
    background: $--color;
  }
  
  .font-color {
     color: $--color;
  }
  
</style>

```
:::

### 品牌色

:::demo(theme-8)
```html
<template>
  <table>
     <tr>
        <th width="80">色阶</th>
        <th width="200">变量名</th>
        <th width="100">默认值</th>
        <th>效果预览</th>
     </tr>
     <tr>
        <td>主色</td>
        <td>$--color-primary</td>
        <td>$blue-4</td>
        <td><div class="box color-primary"></div></td>
     </tr>
     <tr v-for="n in 10" :key="n">
        <td>level {{n}}</td>
        <td>$--color-primary-light-{{n}}</td>
        <td>$blue-{{n}}</td>
        <td><div class="box" :class="`color-primary-light-${n}`"></div></td>
     </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   height: 50px;
   text-align: center;
   line-height: 50px;
  }
  
  .color-primary {
     background: $--color-primary;
  }
 
  .color-primary-light-1 {
    background: $--color-primary-light-1;
  }
  
  .color-primary-light-2 {
    background: $--color-primary-light-2;
  }
  
  .color-primary-light-3 {
    background: $--color-primary-light-3;
  }
  
  .color-primary-light-4 {
    background: $--color-primary-light-4;
  }
  
  .color-primary-light-5 {
    background: $--color-primary-light-5;
  }
  
  .color-primary-light-6 {
    background: $--color-primary-light-6;
  }
  
   .color-primary-light-7 {
     background: $--color-primary-light-7;
   }
   
  .color-primary-light-8 {
    background: $--color-primary-light-8;
  }
  
  .color-primary-light-9 {
    background: $--color-primary-light-9;
  }
  
  .color-primary-light-10 {
    background: $--color-primary-light-10;
  }
  
</style>

```
:::

### 辅助色

:::demo(theme-9)
```html
<template>
  <table>
     <tr>
        <th width="120">用途</th>
        <th width="200">变量名</th>
        <th width="200">默认值</th>
        <th>效果预览</th>
     </tr>
     <tr>
        <td>成功主色</td>
        <td>$--color-success</td>
        <td>$green-primary</td>
        <td><div class="box color-success"></div></td>
     </tr>
     <tr>
        <td>成功色阶 #1</td>
        <td>$--color-success-light</td>
        <td>$green-9</td>
        <td><div class="box color-success-light"></div></td>
     </tr>
     <tr>
     <tr>
        <td>成功色阶 #2</td>
        <td>$--color-success-lighter</td>
        <td>$green-10</td>
        <td><div class="box color-success-lighter"></div></td>
     </tr>
     
     <tr>
        <td>警告主色</td>
        <td>$--color-warning</td>
        <td>$gold-primary</td>
        <td><div class="box color-warning"></div></td>
     </tr>
     <tr>
        <td>警告色阶 #1</td>
        <td>$--color-warning-light</td>
        <td>$gold-9</td>
        <td><div class="box color-warning-light"></div></td>
     </tr>
  
     <tr>
        <td>警告色阶 #2</td>
        <td>$--color-warning-lighter</td>
        <td>$gold-10</td>
        <td><div class="box color-warning-lighter"></div></td>
     </tr>
     
     <tr>
        <td>危险主色</td>
        <td>$--color-danger</td>
        <td>$red-primary</td>
        <td><div class="box color-danger"></div></td>
     </tr>
     <tr>
        <td>危险色阶 #1</td>
        <td>$--color-danger-light</td>
        <td>$red-9</td>
        <td><div class="box color-danger-light"></div></td>
     </tr>
 
     <tr>
        <td>危险色阶 #2</td>
        <td>$--color-danger-lighter</td>
        <td>$red-10</td>
        <td><div class="box color-danger-lighter"></div></td>
     </tr>
     
     <tr>
        <td>信息主色</td>
        <td>$--color-info</td>
        <td>$neutral-white-4</td>
        <td style="background: #fff"><div class="box color-info"></div></td>
     </tr>
     <tr>
        <td>信息色阶 #1</td>
        <td>$--color-info-light</td>
        <td>$neutral-black-7</td>
        <td style="background: #fff"><div class="box color-info-light"></div></td>
     </tr>

     <tr>
        <td>信息色阶 #2</td>
        <td>$--color-info-lighter</td>
        <td>$neutral-black-9</td>
        <td style="background: #fff"><div class="box color-info-lighter"></div></td>
     </tr>
     
     
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   height: 50px;
   text-align: center;
   line-height: 50px;
  }
  
  .color-success {
     background: $--color-success;
  }
 
  .color-success-light {
    background: $--color-success-light;
  }
  
  .color-success-lighter {
     background: $--color-success-lighter;
  }
  
  .color-warning {
     background: $--color-warning;
  }
 
  .color-warning-light {
    background: $--color-warning-light;
  }
  
  .color-warning-lighter {
     background: $--color-warning-lighter;
  }
  
  .color-danger {
     background: $--color-danger;
  }
 
  .color-danger-light {
    background: $--color-danger-light;
  }
  
  .color-danger-lighter {
     background: $--color-danger-lighter;
  }
  
  .color-info {
     background: $--color-info;
  }
 
  .color-info-light {
    background: $--color-info-light;
  }
  
  .color-info-lighter {
     background: $--color-info-lighter;
  }
  
</style>

```
:::


### 中性色

:::demo(theme-10)
```html
<template>
  <table>
   <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="200">默认值</th>
      <th>效果预览</th>
   </tr>
    <tr>
      <td>标题</td>
      <td>$--color-title</td>
      <td>$neutral-black-1</td>
      <td class="box"><div class="color-title"></div></td>
    </tr>
    <tr>
      <td>主要文本</td>
      <td>$--color-primary-text</td>
      <td>$neutral-black-2</td>
      <td class="box"><div class="color-primary-text"></div></td>
    </tr>
    <tr>
      <td>常规文本</td>
      <td>$--color-normal-text</td>
      <td>$neutral-black-3</td>
      <td class="box"><div class="color-normal-text"></div></td>
    </tr>
    <tr>
      <td>次要文本</td>
      <td>$--color-secondary-text</td>
      <td>$neutral-black-4</td>
      <td class="box"><div class="color-secondary-text"></div></td>
    </tr>

    <tr>
      <td>占位文本</td>
      <td>$--color-placeholder</td>
      <td>$neutral-black-5</td>
      <td class="box"><div class="color-placeholder"></div></td>
    </tr>
    <tr>
      <td>边框线</td>
      <td>$--color-border</td>
      <td>$neutral-black-6</td>
      <td class="box"><div class="color-border"></div></td>
    </tr>
    <tr>
      <td>分隔线</td>
      <td>$--color-divider</td>
      <td>$neutral-black-6</td>
      <td class="box"><div class="color-divider"></div></td>
    </tr>
    <tr>
      <td>区块背景</td>
      <td>$--color-background</td>
      <td>$neutral-black-7</td>
      <td class="box"><div class="color-background"></div></td>
    </tr>
    <tr>
      <td>表格头</td>
      <td>$--color-table-header</td>
      <td>$neutral-black-8</td>
      <td class="box"><div class="color-table-header"></div></td>
    </tr>
    <tr>
      <td>表格斑马线</td>
      <td>$--color-table-stripe</td>
      <td>$neutral-black-9</td>
      <td class="box"><div class="color-table-stripe"></div></td>
    </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
   div {
      height: 30px;
   }
  
  }
  .color-title {
     background: $--color-title;
  }
  .color-primary-text {
     background: $--color-primary-text;
  }
  .color-secondary-text {
     background: $--color-secondary-text;
  }
  .color-normal-text {
     background: $--color-normal-text;
  }
  .color-placeholder {
     background: $--color-placeholder;
  }
  .color-border {
     background: $--color-border;
  }
  .color-divider {
     background: $--color-divider;
  }
  .color-background {
     background: $--color-background;
  }
  .color-table-header {
     background: $--color-table-header;
  }
  .color-table-stripe {
     background: $--color-table-stripe;
  }
  
  
</style>

```
:::


### 链接颜色

:::demo(theme-11)
```html
<template>
   <table>
    <tr>
       <th width="80">用途</th>
       <th width="200">变量名</th>
       <th width="200">默认值</th>
       <th>效果预览</th>
    </tr>
     <tr>
       <td>链接文字</td>
       <td>$--link-color</td>
       <td>$--color-primary</td>
       <td class="box"><div class="link-color"><a href="#">链接文字</a></div></td>
     </tr>
     <tr>
       <td>鼠标经过</td>
       <td>$--link-hover-color</td>
       <td>$--color-primary-light-6</td>
       <td class="box"><div class="link-hover-color"><a href="#">链接文字</a></div></td>
     </tr>
    </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
    
  }
  .link-color {
     a {
     color: $--link-color;
     }
  }
  .link-hover-color {
     a {
     color: $--link-hover-color;
     }
  }
</style>  

```
:::

### 禁用颜色


:::demo(theme-12)
```html
<template>
   <table>
    <tr>
       <th width="80">用途</th>
       <th width="200">变量名</th>
       <th width="200">默认值</th>
       <th>效果预览</th>
    </tr>
     <tr>
       <td>填充背景</td>
       <td>$--disabled-fill</td>
       <td>$neutral-black-8</td>
       <td class="box"><div class="disabled-fill"></div></td>
     </tr>
     <tr>
       <td>文本颜色</td>
       <td>$--disabled-color</td>
       <td>$neutral-black-5</td>
       <td class="box"><div class="disabled-color"></div></td>
     </tr>
     <tr>
       <td>边框颜色</td>
       <td>$--disabled-border-color</td>
       <td>$neutral-black-7</td>
       <td class="box"><div class="disabled-border-color"></div></td>
     </tr>
    </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
    div {
       height: 40px;
    }
    
  }
  .disabled-fill {
     background: $--disabled-fill;
  }
  .disabled-color {
     background: $--disabled-color;
  }
  .disabled-border-color {
     background: $--disabled-border-color;
  }
</style>  

```
:::

## 深色主题配色

### 背景/前景色
:::demo(theme-13)
```html
<template>
  <table>
     <tr>
        <th width="80">用途</th>
        <th width="200">变量名</th>
        <th width="200">默认值</th>
        <th>效果预览</th>
     </tr>
     <tr>
        <td>背景色</td>
        <td>$--background</td>
        <td>$blue-1</td>
        <td><div class="box background"></div></td>
     </tr>
     <tr>
        <td>前景色</td>
        <td>$--color</td>
        <td>$white</td>
        <td><div class="box color"></div></td>
     </tr>
     <tr>
        <td>搭配效果</td>
        <td></td>
        <td></td>
        <td><div class="box background font-color">文字样本</div></td>
     </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/themes/_dark.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   height: 50px;
   text-align: center;
   line-height: 50px;
  }
  
  .background {
     background: $--background;
  }
 
  .color {
    background: $--color;
  }
  
  .font-color {
     color: $--color;
  }
  
</style>

```
:::

### 品牌色

:::demo(theme-14)
```html
<template>
  <table>
     <tr>
        <th width="80">色阶</th>
        <th width="200">变量名</th>
        <th width="100">默认值</th>
        <th>效果预览</th>
     </tr>
     <tr>
        <td>主色</td>
        <td>$--color-primary</td>
        <td>$blue-5</td>
        <td><div class="box color-primary"></div></td>
     </tr>
     <tr v-for="n in 10" :key="n">
        <td>level {{n}}</td>
        <td>$--color-primary-light-{{n}}</td>
        <td>$blue-{{n}}</td>
        <td><div class="box" :class="`color-primary-light-${n}`"></div></td>
     </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/themes/_dark.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
   height: 50px;
   text-align: center;
   line-height: 50px;
  }
  
  .color-primary {
     background: $--color-primary;
  }
 
  .color-primary-light-1 {
    background: $--color-primary-light-1;
  }
  
  .color-primary-light-2 {
    background: $--color-primary-light-2;
  }
  
  .color-primary-light-3 {
    background: $--color-primary-light-3;
  }
  
  .color-primary-light-4 {
    background: $--color-primary-light-4;
  }
  
  .color-primary-light-5 {
    background: $--color-primary-light-5;
  }
  
  .color-primary-light-6 {
    background: $--color-primary-light-6;
  }
  
   .color-primary-light-7 {
     background: $--color-primary-light-7;
   }
   
  .color-primary-light-8 {
    background: $--color-primary-light-8;
  }
  
  .color-primary-light-9 {
    background: $--color-primary-light-9;
  }
  
  .color-primary-light-10 {
    background: $--color-primary-light-10;
  }
  
</style>

```
:::

### 辅助色

:::demo(theme-15)
```html
<template>
  <table>
     <tr>
        <th width="120">用途</th>
        <th width="200">变量名</th>
        <th width="200">默认值</th>
        <th>效果预览</th>
     </tr>
     <tr>
        <td>成功主色</td>
        <td>$--color-success</td>
        <td>$green-primary</td>
        <td><div class="box color-success"></div></td>
     </tr>
     <tr>
        <td>成功色阶 #1</td>
        <td>$--color-success-light</td>
        <td>$green-9</td>
        <td><div class="box color-success-light"></div></td>
     </tr>
     <tr>
     <tr>
        <td>成功色阶 #2</td>
        <td>$--color-success-lighter</td>
        <td>$green-10</td>
        <td><div class="box color-success-lighter"></div></td>
     </tr>
     
     <tr>
        <td>警告主色</td>
        <td>$--color-warning</td>
        <td>$gold-primary</td>
        <td><div class="box color-warning"></div></td>
     </tr>
     <tr>
        <td>警告色阶 #1</td>
        <td>$--color-warning-light</td>
        <td>$gold-9</td>
        <td><div class="box color-warning-light"></div></td>
     </tr>
  
     <tr>
        <td>警告色阶 #2</td>
        <td>$--color-warning-lighter</td>
        <td>$gold-10</td>
        <td><div class="box color-warning-lighter"></div></td>
     </tr>
     
     <tr>
        <td>危险主色</td>
        <td>$--color-danger</td>
        <td>$red-primary</td>
        <td><div class="box color-danger"></div></td>
     </tr>
     <tr>
        <td>危险色阶 #1</td>
        <td>$--color-danger-light</td>
        <td>$red-9</td>
        <td><div class="box color-danger-light"></div></td>
     </tr>
 
     <tr>
        <td>危险色阶 #2</td>
        <td>$--color-danger-lighter</td>
        <td>$red-10</td>
        <td><div class="box color-danger-lighter"></div></td>
     </tr>
     
     <tr>
        <td>信息主色</td>
        <td>$--color-info</td>
        <td>$neutral-white-4</td>
        <td class="bg"><div class="box color-info"></div></td>
     </tr>
     <tr>
        <td>信息色阶 #1</td>
        <td>$--color-info-light</td>
        <td>$neutral-white-7</td>
        <td class="bg"><div class="box color-info-light"></div></td>
     </tr>

     <tr>
        <td>信息色阶 #2</td>
        <td>$--color-info-lighter</td>
        <td>$neutral-white-9</td>
        <td class="bg"><div class="box color-info-lighter"></div></td>
     </tr>
     
     
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/themes/_dark.scss";
  table {
    display: table;
     width: 100%;
  }
  .bg {
    background: $--background;
  }
  .box{
   height: 50px;
   text-align: center;
   line-height: 50px;
  }
  
  .color-success {
     background: $--color-success;
  }
 
  .color-success-light {
    background: $--color-success-light;
  }
  
  .color-success-lighter {
     background: $--color-success-lighter;
  }
  
  .color-warning {
     background: $--color-warning;
  }
 
  .color-warning-light {
    background: $--color-warning-light;
  }
  
  .color-warning-lighter {
     background: $--color-warning-lighter;
  }
  
  .color-danger {
     background: $--color-danger;
  }
 
  .color-danger-light {
    background: $--color-danger-light;
  }
  
  .color-danger-lighter {
     background: $--color-danger-lighter;
  }
  
  .color-info {
     background: $--color-info;
  }
 
  .color-info-light {
    background: $--color-info-light;
  }
  
  .color-info-lighter {
     background: $--color-info-lighter;
  }
  
</style>

```
:::


### 中性色

:::demo(theme-16)
```html
<template>
  <table>
   <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="200">默认值</th>
      <th>效果预览</th>
   </tr>
    <tr>
      <td>标题</td>
      <td>$--color-title</td>
      <td>$neutral-white-1</td>
      <td class="box"><div class="color-title"></div></td>
    </tr>
    <tr>
      <td>主要文本</td>
      <td>$--color-primary-text</td>
      <td>$neutral-white-2</td>
      <td class="box"><div class="color-primary-text"></div></td>
    </tr>
    <tr>
      <td>常规文本</td>
      <td>$--color-normal-text</td>
      <td>$neutral-white-3</td>
      <td class="box"><div class="color-normal-text"></div></td>
    </tr>
    <tr>
      <td>次要文本</td>
      <td>$--color-secondary-text</td>
      <td>$neutral-white-4</td>
      <td class="box"><div class="color-secondary-text"></div></td>
    </tr>

    <tr>
      <td>占位文本</td>
      <td>$--color-placeholder</td>
      <td>$neutral-white-5</td>
      <td class="box"><div class="color-placeholder"></div></td>
    </tr>
    <tr>
      <td>边框线</td>
      <td>$--color-border</td>
      <td>$neutral-white-6</td>
      <td class="box"><div class="color-border"></div></td>
    </tr>
    <tr>
      <td>分隔线</td>
      <td>$--color-divider</td>
      <td>$neutral-white-6</td>
      <td class="box"><div class="color-divider"></div></td>
    </tr>
    <tr>
      <td>区块背景</td>
      <td>$--color-background</td>
      <td>$neutral-white-7</td>
      <td class="box"><div class="color-background"></div></td>
    </tr>
    <tr>
      <td>表格头</td>
      <td>$--color-table-header</td>
      <td>$neutral-black-5</td>
      <td class="box"><div class="color-table-header"></div></td>
    </tr>
    <tr>
      <td>表格斑马线</td>
      <td>$--color-table-stripe</td>
      <td>$neutral-black-6</td>
      <td class="box"><div class="color-table-stripe"></div></td>
    </tr>
   </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/themes/_dark.scss";
 
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
   div {
      height: 30px;
   }
  
  }
  .color-title {
     background: $--color-title;
  }
  .color-primary-text {
     background: $--color-primary-text;
  }
  .color-secondary-text {
     background: $--color-secondary-text;
  }
  .color-normal-text {
     background: $--color-normal-text;
  }
  .color-placeholder {
     background: $--color-placeholder;
  }
  .color-border {
     background: $--color-border;
  }
  .color-divider {
     background: $--color-divider;
  }
  .color-background {
     background: $--color-background;
  }
  .color-table-header {
     background: $--color-table-header;
  }
  .color-table-stripe {
     background: $--color-table-stripe;
  }
  
  
</style>

```
:::


### 链接颜色

:::demo(theme-17)
```html
<template>
   <table>
    <tr>
       <th width="80">用途</th>
       <th width="200">变量名</th>
       <th width="200">默认值</th>
       <th>效果预览</th>
    </tr>
     <tr>
       <td>链接文字</td>
       <td>$--link-color</td>
       <td>$--color-primary</td>
       <td class="box"><div class="link-color"><a href="#">链接文字</a></div></td>
     </tr>
     <tr>
       <td>鼠标经过</td>
       <td>$--link-hover-color</td>
       <td>$--color-primary-light-3</td>
       <td class="box"><div class="link-hover-color"><a href="#">链接文字</a></div></td>
     </tr>
    </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/themes/_dark.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
    
  }
  .link-color {
     a {
     color: $--link-color;
     }
  }
  .link-hover-color {
     a {
     color: $--link-hover-color;
     }
  }
</style>  

```
:::

### 禁用颜色


:::demo(theme-18)
```html
<template>
   <table>
    <tr>
       <th width="80">用途</th>
       <th width="200">变量名</th>
       <th width="200">默认值</th>
       <th>效果预览</th>
    </tr>
     <tr>
       <td>填充背景</td>
       <td>$--disabled-fill</td>
       <td>$neutral-black-7</td>
       <td class="box"><div class="disabled-fill"></div></td>
     </tr>
     <tr>
       <td>文本颜色</td>
       <td>$--disabled-color</td>
       <td>$neutral-white-5</td>
       <td class="box"><div class="disabled-color"></div></td>
     </tr>
     <tr>
       <td>边框颜色</td>
       <td>$--disabled-border-color</td>
       <td>$neutral-black-6</td>
       <td class="box"><div class="disabled-border-color"></div></td>
     </tr>
    </table>
</template>

<style lang="scss" scoped>
  @import "~$ui/styles/themes/_dark.scss";
  table {
    display: table;
     width: 100%;
  }
  .box{
    background: $--background;
    div {
       height: 40px;
    }
    
  }
  .disabled-fill {
     background: $--disabled-fill;
  }
  .disabled-color {
     background: $--disabled-color;
  }
  .disabled-border-color {
     background: $--disabled-border-color;
  }
</style>  

```
:::

## bee-mobile是一个基于 React 的移动端组件库

<p align="center">
    <img width="140" height="140" src="http://oumfrpm5j.bkt.clouddn.com/bee-mobile/logo.svg"/>
</p>

主页：[Bee Mobile](https://bee-mobiles.github.io)

### 丰富强大的组件

一共拥有50多个组件，已为你需要在项目中使用的很多功能性组件做好准备。

<div style="margin-top: 10px">
  <img style="width: 25%" src="https://github.com/IronPans/ironpans.github.io/blob/master/resources/gif/bm-button.gif">
  <img style="width: 25%" src="https://github.com/IronPans/ironpans.github.io/blob/master/resources/gif/bm-buttonNavigation.gif">
  <img style="width: 25%" src="https://github.com/IronPans/ironpans.github.io/blob/master/resources/gif/bm-datepicker.gif">
  <img style="width: 25%" src="https://github.com/IronPans/ironpans.github.io/blob/master/resources/gif/bm-spin.gif">
</div>

### 快速上手

**npm**

推荐使用npm的方式安装，它能更好地和 webpack 打包工具配合使用。
```
npm install bee-mobile -S
```

**CDN**

目前可以通过 unpkg.com/bee-mobile 获取到最新版本的资源，在页面上引入js 和css文件即可开始使用。
```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/bee-mobile/dist/bee-mobile.min.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/bee-mobile/dist/bee-mobile.min.js"></script>
```

**开始使用**

```
import React from 'react';
import {Button} from 'bee-mobile';

const App = () => (
     < Button theme="primary">
               Hello World
     </Button>
);
```






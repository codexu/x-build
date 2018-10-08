# x-animate

x-animate是通过屏幕滚动控制动画执行的插件，可以配合[animate.css](https://daneden.github.io/animate.css/)使用。

<p align="center">
  <img width="280" src="https://github.com/codexu/_images/blob/master/x-animate/animate.gif?raw=true">
</p>

#### 快速起步

- 安装

```
$ npm install animate.css x-animate --save
```

- 引用

```javascript
// javascript
import 'animate.css'
import Animate from 'x-animate'
let animate = new Animate();
```

```html
<!-- html -->
<div animate="bounceInLeft"></div>
```

#### 配置项

```html
<!-- html -->
<div animate="bounceInLeft" delay="1000" duration="1000" offset="100" animate-enter="animateEnter" animate-leave="animateLeave"></div>
```

- `animate(必填项)` 参考animate.css动画名，或参考自定义动画。

- `delay(可选)` 延时：(毫秒)，当屏幕滚动到对应位置时，延时结束执行动画。

- `duration(可选)` 持续时间：(毫秒)，动画执行的持续时间，数值越大动画越慢。

- `offset(可选)` 偏移量：(px)，以屏幕底部为轴，默认滚动到某一元素已显示一半高度时执行动画。偏移量为正数，则需多滚动相应的距离；偏移量为负值，则会提前相应距离执行动画。

- `animate-enter(可选)` 钩子函数：(function(item))，当某个元素动画开始时执行函数。

- `animate-leave(可选)` 钩子函数：(function(item))，当某个元素动画结束时执行函数。

#### 生命周期函数

在需要触发的元素上增加属性`animate-enter`(动画前)或`animate-leave`(动画后)，值为定义在methods中的函数名。

```html
<!-- html -->
<div animate-enter="animateEnter" animate-leave="animateLeave"></div>
```

将需要执行的函数定义在methods中。

```javascript
// javascript
new Animate({
  methods: {
    animateEnter(item) {
      console.log('animateEnter', item);
    },
    animateLeave(item) {
      console.log('animateLeave', item);
    }
  }
});
```

#### 自定义动画

使用自定义的动画，例如新定义`newAnimate`动画:

```css
@keyframes newAnimate {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.newAnimate {
  animation-name: fadeIn;
}
```

```html
<!-- html -->
<div animate="newAnimate"></div>
```

#### 深度配置

配置属性名称、滚动节流调节、生命周期函数。

```javascript
// javascript
new Animate({
  // 默认值'animate'，对应<div animate=""></div>，防止与其他插件命名冲突
  name: 'animate',
  // 默认值'delay'，对应<div delay=""></div>，防止与其他插件命名冲突
  delay: 'delay',
  // 默认值'duration'，对应<div duration=""></div>，防止与其他插件命名冲突
  duration: 'duration',
  // 默认值50，滚动节流间隔时间
  interval: 50,
  // 默认空，生命周期函数
  methods: {}
});
```
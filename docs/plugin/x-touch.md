# x-touch

`x-touch`，基于ES6的移动端滑动组件，为某个dom绑定点击事件和上下左右方向滑动事件。

#### 使用方式

``` javascript
import Touch from './class/x-touch'

let logo = document.getElementById('logo')

new Touch(logo, 'tap', () => {
  // do something...
})
```

#### 参数

- 点击： `tap`

- 向上滑动： `swipUp`

- 向下滑动： `swipDown`

- 向左滑动： `swipLeft`

- 向右滑动： `swipRight`
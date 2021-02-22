# Loading

`v1.1.1 新增`

@/store/modules/system/loading.js

全局loading动画。

## state.spinning

用于开启关闭动画

- 类型：`Boolean(默认：false)`

## state.tip

用于自定义文案

- 类型：`String`

## mutations.OPENT

开启loading动画

- 参数：text，类型：String，说明：自定义文案

## mutations.CLOSE

关闭loading动画

## mutations.SET_TIP

修改自定文案

- 参数：value，类型：String

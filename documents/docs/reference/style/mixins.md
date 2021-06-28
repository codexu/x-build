# Mixins

## 文字一行超出省略号

```scss
@include ellipsis
```

## 多行文字超出省略号

```scss
@include ellipsis-multiline($number)
```

### Params

| 参数    | 说明                   | 类型   | 默认值 |
| ------- | ---------------------- | ------ | ------ |
| $number | 设置在第几行超出显示省略号 | number | 4      |

## 美化文本选中

```scss
@include beauty-select($color,$bgcolor)
```

### Params

| 参数     | 说明         | 类型             | 默认值     |
| -------- | ------------ | ---------------- | ---------- |
| $color   | 设置字体颜色 | 十六进制数、颜色 | #fff（白） |
| $bgcolor | 设置背景颜色 | 十六进制数、颜色 | #000（黑） |

## 毛玻璃

```scss
@include blur($blur)
```

### Params

| 参数  | 说明         | 类型   | 默认值 |
| ----- | ------------ | ------ | ------ |
| $blue | 设置虚幻像素 | string | 10px   |

## 滤镜

将彩色照片显示为黑白照片、保留图片层次。

```scss
@include grayscale
```

## 移动端 100vh

```scss
@include vh($height)
```

### Params

| 参数    | 说明 | 类型   | 默认值 |
| ------- | ---- | ------ | ------ |
| $height | 设置高度 | string | 100vh  |

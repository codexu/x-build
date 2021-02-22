# 内置Mixins

## 水平居中

```scss
@include horizontal-center
```

## 文字一行超出省略号

```scss
@include ellipsis
```

## 多行文字超出省略号

```scss
@include ellipsis-multiline($number)
```

- *$number* `1` 第几行显示省略号

## 美化文本选中

```scss
@include beauty-select($color,$bgcolor)
```

- $color `#fff` 字体颜色
- $bgcolor `#000` 背景颜色

## 毛玻璃

```scss
@include blur($blur)
```

- $blue `10px` 虚幻像素

## 滤镜

将彩色照片显示为黑白照片、保留图片层次

```scss
@include grayscale
```

## 背景色

```scss
@include background($border-radius,$bg-color,$color,$font-weight) 
```

- $border-radius `5px`  圆角
- $bg-color `#eee` 背景色
- $color `#fff` 字体颜色
- $font-weight `400`  字体粗细

## 等边三角形

```scss
@include triangle($size,$color,$dir) 
```

- $size`5px` 大小
- $color`rgba(0, 0, 0, 0.6)` 边框颜色
- $dir`bottom` 方向

## 移动端 vh

`v1.1.7 新增`

```scss
@include vh($height) 
```

- $height`100vh` 高度

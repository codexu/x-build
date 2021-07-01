# Mixins

## 文字一行超出省略号

<CodeGroup>
  <CodeGroupItem title="scss">

```bash:no-line-numbers
@include ellipsis
```

  </CodeGroupItem>

  <CodeGroupItem title="less" active>

```bash:no-line-numbers
.ellipsis()
```

  </CodeGroupItem>
</CodeGroup>

## 多行文字超出省略号

<CodeGroup>
  <CodeGroupItem title="scss">

```bash:no-line-numbers
@include ellipsis-multiline($number)
```

  </CodeGroupItem>

  <CodeGroupItem title="less" active>

```bash:no-line-numbers
.ellipsis-multiline(@number)
```

  </CodeGroupItem>
</CodeGroup>

### Params

| 参数   | 说明                       | 类型   | 默认值 |
| ------ | -------------------------- | ------ | ------ |
| number | 设置在第几行超出显示省略号 | number | 4      |

## 美化文本选中

<CodeGroup>
  <CodeGroupItem title="scss">

```bash:no-line-numbers
@include beauty-select($color,$bgcolor)
```

  </CodeGroupItem>

  <CodeGroupItem title="less" active>

```bash:no-line-numbers
.beauty-select(@color,@bgcolor)
```

  </CodeGroupItem>
</CodeGroup>

### Params

| 参数    | 说明         | 类型             | 默认值     |
| ------- | ------------ | ---------------- | ---------- |
| color   | 设置字体颜色 | 十六进制数、颜色 | #fff（白） |
| bgcolor | 设置背景颜色 | 十六进制数、颜色 | #000（黑） |

## 毛玻璃

<CodeGroup>
  <CodeGroupItem title="scss">

```bash:no-line-numbers
@include blur($blur)
```

  </CodeGroupItem>

  <CodeGroupItem title="less" active>

```bash:no-line-numbers
.blur(@blur)
```

  </CodeGroupItem>
</CodeGroup>

### Params

| 参数 | 说明         | 类型   | 默认值 |
| ---- | ------------ | ------ | ------ |
| blur | 设置虚幻像素 | string | 10px   |

## 滤镜

将彩色照片显示为黑白照片、保留图片层次。
<CodeGroup>
  <CodeGroupItem title="scss">

```bash:no-line-numbers
@include grayscale
```

  </CodeGroupItem>

  <CodeGroupItem title="less" active>

```bash:no-line-numbers
.grayscale()
```

  </CodeGroupItem>
</CodeGroup>

## 移动端 100vh

<CodeGroup>
  <CodeGroupItem title="scss">

```bash:no-line-numbers
@include vh($height)
```

  </CodeGroupItem>

  <CodeGroupItem title="less" active>

```bash:no-line-numbers
.vh(@height)
```

  </CodeGroupItem>
</CodeGroup>

### Params

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| height | 设置高度 | string | 100vh  |

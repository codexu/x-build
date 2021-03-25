# 图片规范

## 图片格式

常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP、SVG，根据图片格式的特性和场景需要选取适合的图片格式。

- 不存在透明度的图片选择 JPEG 格式。
- 存在透明度的图片使用 PNG24 格式。
- 矢量图使用 SVG 格式。

## 图片质量

- 上线的图片都应该经过压缩处理，压缩后的图片不应该出现肉眼可感知的失真区域。
- 60质量的JPEG格式图片与质量大于60的相比，肉眼已看不出明显的区别，因此保存 JPEG 图的时候，质量一般控制在60，若保真度要求高的图片可适量提高到 80，图片大小控制在 200KB 以内。

## SVG

SVG 是特殊的静态资源，由于体积小巧，且不容易发生改动，所以会与项目一起上传至 Gitlab，并且脚手架会将所有的 svg 最后通过 Sprite 的方式进行合并，这种操作是很难在设计师处进行的。
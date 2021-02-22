# 浮点型精度

**filter.float**

三种不同的取整方式，默认保留两位小数。

float(precision, type)

## 参数 type

- round: 默认，根据 precision（精度） 四舍五入 number。
- ceil: 根据 precision（精度） 向上舍入 number。（ precision（精度）可以理解为保留几位小数。）
- floor: 根据 precision（精度） 向下舍入 number。（ precision（精度）可以理解为保留几位小数。）

```html
<p>{{ 2.34567 | float }}</p>
// 2.35
<p>{{ 2.34567 | float(4) }}</p>
// 2.3457
<p>{{ 2.34567 | float(2, 'ceil') }}</p>
// 2.35
<p>{{ 2.34567 | float(2, 'floor') }}</p>
// 2.34
```

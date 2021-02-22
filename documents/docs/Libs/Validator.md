# 表单验证

`v1.1.8 新增`

针对于 **Ant Design Vue** 的 `FormModel` 表单验证（validator 属性）开发，最终返回一个 validator函数：`function(rule, value, callback)`。

## 使用
```js
import { max, email } from '@/libs/validator'

data() {
  return {
    rules: {
       age: [{ validator: max(20) }],
       email: [{ validator: email }]
    }
  }
}
```

## 最大值
**max(params, msg)**
- **params** `Number，必填` 最大值
- **msg** `选填，默认：''` 说明

## 最小值
**min(params, msg)**
- **params** `Number，必填` 最小值
- **msg** `String，默认：''` 说明

## 数值范围
**range(params, msg)**
- **params** `Object，默认：{ min: 6, max: 18 }` 最小值与最大值
- **msg** `选填，默认：''` 说明

## 密码
**password(illegal, range)**
- illegal `Boolean，默认：true` 是否校验非法字符
- range `Object，默认：{ min: 6, max: 18 }` 长度

### 确认密码
**confirmPassword(params)**
- params `String/Number` 密码
- 使用方法
```js
rules: {
  confirmPassword: [{ validator: '' }]
},
```
```js
watch: {
// form：表单对象
// this.form.password：密码
  form: {
    handler() {
      this.rules.confirmPassword[0].validator = confirmPassword(this.form.password);
      // 关联密码与确认密码
      this.$refs.ruleForm.validateField(['password', 'confirmPassword']);
    },
    deep: true,
  },
},
```

## 整数
**integer**

## 两位小数
**decimal**

## 身份证
**card**

## 中文
**chinese**

## 电子邮箱
**email**

## 手机号
**mobile**

## 固话号码
**landline**

## url地址
**url**
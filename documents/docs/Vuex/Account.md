# 登陆登出

@/store/modules/system/account.js

用于登录、登出接口逻辑实现。

## action.login

调用登录接口，成功后调用 system/user/SET_INFO

- 参数 username，类型: String，说明：用户名
- 参数 password，类型: String，说明：密码

## action.logout

调用登出接口，成功后调用 system/user/CLEAR_INFO

## action.verification

在路由跳转验证中会加载此处的 token 验证逻辑，通常为请求后端接口。
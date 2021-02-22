# 用户信息

@/store/modules/system/user.js

## state.info

用于储存登陆或手动获取的原始用户信息。

- 类型：Object

## mutations.SET_INFO

设置用户信息，本地化储存token、用户ID。

- 参数：info，类型：Object

## mutations.CLEAR_INFO

清空用户信息，本地化清空token、用户ID。

## action.getInfo

获取用户信息，通过 本地存储的 USER_ID 判断。
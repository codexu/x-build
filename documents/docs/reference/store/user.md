# 用户管理

`@/store/sys/user.ts`

用于管理用户信息（包括 UA 查询）与登录的 store。

## API

```javascript
import useUserStore from '@/store/sys/user';

const userStore = useUserStore();
```

## State

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| userInfo | 用户信息 | `UserInfo` | -      |
| ua       | 用户 UA  | `UaResult` | -      |

UserInfo:

```typescript
export interface UserInfo {
  id: string;
  token: string;
  name?: string;
  avatar?: string;
  roles?: string[];
}
```

UaResult:

```typescript
import { IResult as UaResult } from 'ua-parser-js';
```

## Actions

### setUserInfo

设置用户信息，并将 id 与 token 保存在 LocalStorage 中。

```typescript
userStore.setUserInfo(payload: UserInfo);
```

LocalStorage:

| KEY          | 说明               |
| ------------ | ------------------ |
| USER_ID      | 用户 ID            |
| ACCESS_TOKEN | 服务器返回的 token |

发送请求时，ACCESS_TOKEN 会附带在请求头上，前提是你需要使用脚手架封装的 axios。

### resetUserInfo

重置用户信息，退出登录时会调用此方法。

### getUserInfo

获取用户信息，会从 LocalStorage 获取用户 ID，查询逻辑需要你自己编辑。

### login

用户登录，登录逻辑需要自己编写。

```typescript
userStore.login(username: string, password: string);
```

### logout

退出登录，会清掉用户信息。

### verification

如果有独立验证 token 的接口可以使用此方法校验。

# Git Hook

git hook 结合 ESLint 与 StyleLint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则提交失败。

## husky

当我们执行 npm run lint 的时候，系统会校验我们所有的代码，这将浪费大量的时间，如果项目从一开始就保证了提交前校验代码的工作，那么多余的代码校验都是徒劳的。所以我们只想校验我们自己提交的代码，这个时候我们引用了 `husky`。

`husky` 的解决方案就是将代码校验放到本地，在 commit 之前先对缓存区里的代码做一次 Lint 校验。

## 跳过检查

**不建议**你这么做，但你执意如此：

```bash:no-line-numbers
git commit -m "xxx" --no-verify
```

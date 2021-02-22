---
home: true
heroText: x-build
tagline: 前端脚手架
actionText: 完整学习 →
actionLink: /Guide/Overview/Features
features:
- title: 完备的基础功能
  details: 以 Vue 框架为基础，集成多个满足业务需求基础功能和性能优化。
- title: 按需引入的功能
  details: 提炼了典型的业务模型，提供了丰富的组件、过滤器、指令集、状态管理等功能。
- title: 严格的开发规范
  details: 根据项目结构、代码规范、开发规则等方面提供了完整的前端开发规范文档。
---

## 快速上手

x-build 是一个基于 [Node.js](http://nodejs.cn/) 环境的命令行工具。在公司内网环境下，配置好 [NPM 源](/Guide/Overview/NPM.md)，通过以下命令即可安装：

```bash
npm install x-build -g
```

通过以下指令[创建](/Guide/Overview/Create.md)一个新项目，并且会自动帮你安装所有依赖：

```
x-build create [name]
```
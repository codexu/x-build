# NPM 配置

x-build 是 mapwhale 环境下的 npm 包，安装前需要修改 npm 源，用法类似于设置淘宝镜像。

## 设置源

```powershell
npm set registry http://39.99.247.200:18700/nexus/repository/npm-group/
```

## 登陆

```powershell
npm login --registry=http://39.99.247.200:18700/nexus/repository/npm-group/ 
```

## NRM 管理源（推荐）

在 mapwhale 源下可能会影响正常的依赖安装，所以可以使用 nrm 切换源。

- 安装 nrm：

```
npm install nrm -g
```

- 将 mapwhale 源加入 nrm 列表：

```
nrm add mapwhale http://39.99.247.200:18700/nexus/repository/npm-group/
```

- 选择 mapwhale 源：

```
nrm use mapwhale
```

## 下载资源

```powershell
npm login --registry=http://39.99.247.200:18700/nexus/repository/npm-group/
```

::: warning 警告
切换到私服后可能会导致 yarn 无法正常使用。
:::

## 上传资源

执行 npm publish 上传到本地 NPM 源

* 配置本机的npm登陆

```powershell
npm login --registry=http://39.99.247.200:18700/nexus/repository/npm-hosted/
```

* package.json 配置上传

```json
"publishConfig":{
  "registry": "http://39.99.247.200:18700/nexus/repository/npm-hosted/"
}
```

```shell
npm publish --registry=http://39.99.247.200:18700/nexus/repository/npm-hosted/
```

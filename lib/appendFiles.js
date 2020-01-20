// 根据配置写入文件

const fs = require('fs-extra');
const store = require('./store');
const version = require('../package.json').version;

// index.html 模板文件
const htmlTemp = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${store.dirname}</title>
</head>
<body>
  <p>X-BUILD v${version}</p>
</body>
</html>
`;

// index.pug 模板文件
const pugTemp = `<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    title X-BUILD v${version}
  body
    p X-BUILD v${version}
`;

const entry = [
  `./src/scripts/index.${store.options.typescript ? 'ts' : 'js'}`,
  `./src/styles/index.${store.options.precss}`,
  'normalize.css'
];
if (store.options.mobileLayout) entry.push('hotcss');

// xbuild.config.js 配置文件
const configTemp = `module.exports = {
  // 入口文件
  entry: [\n    '${entry.join("',\n    '").toString()}'\n  ],
  pug: ${store.options.pug},
  eslint: ${store.options.eslint},
  babel: ${store.options.babel},
  typescript: ${store.options.typescript},
  // 设计稿宽度
  designWidth: ${store.options.mobileLayout ? 750 : 0},
};
`;

// package.json
const packageTemp = `{
    "name": "${store.dirname}",
    "version": "0.1.0",
    "scripts": {
        "serve": "cross-env NODE_ENV=serve x-service",
        "build": "cross-env NODE_ENV=build x-service",
        "test": "jest --coverage"
    },
    "license": "ISC"
}
`;

// tsconfig.json
const tsTemp = `{
    "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "jsx": "react",
        "allowJs": true
    }
}
`;

/**
 * 遍历创建文件
 * @param {string} dest 相对路径 + 文件名
 * @param {string} temp 文件模板
 */

const htmlEx = store.options.pug ? 'pug' : 'html';

const confList = [
  { // 创建配置文件
    dest: `./${store.dirname}/xbuild.config.js`,
    temp: configTemp,
  },
  { // 通过选项创建 html 或 pug 文件
    dest: `./${store.dirname}/src/index.${htmlEx}`,
    temp: store.options.pug ? pugTemp : htmlTemp,
  },
  { // 创建package.json文件
    dest: `./${store.dirname}/package.json`,
    temp: packageTemp,
  }
];

// 创建 ts 配置文件
if (store.options.typescript) {
  confList.push({
    dest: `./${store.dirname}/tsconfig.json`,
    temp: tsTemp,
  });
}

module.exports = function appendFiles() {
  confList.forEach(item => {
    fs.appendFileSync(
      item.dest,
      item.temp,
      {
        flag: 'w'
      }
    );
  });
  fs.rename(`./${store.dirname}/src/styles/index.css`, `./${store.dirname}/src/styles/index.${store.options.precss || 'css'}`);
  fs.rename(`./${store.dirname}/src/scripts/index.js`, `./${store.dirname}/src/scripts/index.${store.options.typescript ? 'ts' : 'js'}`);
};

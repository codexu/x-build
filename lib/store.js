// 所有配置信息项

module.exports = {
  // 创建目录名
  dirname: '',
  cmd: '',
  // npm 版本 url
  npmVersionUrl: 'https://registry.npmjs.org/x-build/latest',
  // 选项
  options: {
    eslint: false,
    babel: false,
    typescript: false,
    // 移动端布局
    mobileLayout: false,
    pug: false,
    // css 预处理器
    precss: 'css',
    answers: [],
    dependencies: [
      {
        name: 'postcss-loader',
        version: '3.0.0'
      },
      {
        name: 'css-loader',
        version: '2.1.1'
      },
      {
        name: 'style-loader',
        version: '0.23.1'
      },
      {
        name: 'file-loader',
        version: '3.0.1'
      },
      {
        name: 'autoprefixer',
        version: '9.6.0'
      },
      {
        name: 'url-loader',
        version: '1.1.2'
      },
      {
        name: 'html-loader',
        version: '0.5.5'
      },
      {
        name: 'html-webpack-plugin',
        version: '3.2.0'
      },
      {
        name: 'mini-css-extract-plugin',
        version: '0.7.0'
      },
      {
        name: 'webpack',
        version: '4.33.0'
      },
      {
        name: 'webpack-cli',
        version: '3.3.2'
      },
      {
        name: 'webpack-dev-server',
        version: '3.5.1'
      },
      {
        name: 'webpack-merge',
        version: '4.2.1'
      },
      {
        name: 'clean-webpack-plugin',
        version: '3.0.0'
      },
      {
        name: 'mini-css-extract-plugin',
        version: '0.7.0'
      },
      {
        name: 'html-webpack-plugin',
        version: '3.2.0'
      },
      {
        name: 'normalize.css',
        version: '8.0.1'
      },
      {
        name: 'jest',
        version: '24.9.0'
      },
      {
        name: 'x-build',
        version: require('../package').version
        // version: 'beta'
      },
      {
        name: 'cross-env',
        version: '5.2.0'
      },
    ],
  },
  // 选项列表
  inquirerList: {
    name: 'options',
    type: 'checkbox',
    message: 'Check the features needed for your project',
    choices: [
      {
        name: 'Babel',
        value: 'babel',
        checked: true
      },
      {
        name: 'Eslint',
        value: 'eslint',
        checked: true
      },
      {
        name: 'Typescript',
        value: 'typescript',
      },
      {
        name: 'CSS Pre-processors',
        value: 'precss'
      },
      {
        name: 'Pug(Jade)',
        value: 'pug'
      },
      {
        name: 'Mobile layout',
        value: 'mobileLayout'
      },
    ]
  },
  inquirerPrecssList: {
    name: 'Precss',
    type: 'list',
    message: 'Choose the CSS Pre-processors needed for your project',
    choices: [
      {
        name: 'Sass',
        value: 'scss',
      },
      {
        name: 'Less',
        value: 'less',
      },
      {
        name: 'Stylus',
        value: 'styl',
      },
    ]
  },
  // 预设依赖及版本信息
  dependencies: {
    babel: [
      {
        name: '@babel/runtime',
        version: '7.4.5'
      },
      {
        name: '@babel/plugin-transform-runtime',
        version: '7.4.4'
      },
      {
        name: '@babel/core',
        version: '7.4.5'
      },
      {
        name: '@babel/preset-env',
        version: '7.4.5'
      },
      {
        name: 'babel-loader',
        version: '8.0.6'
      },
    ],
    eslint: [
      {
        name: 'babel-eslint',
        version: '10.0.1'
      },
      {
        name: 'eslint-loader',
        version: '2.1.2'
      },
      {
        name: 'eslint',
        version: '5.16.0'
      },
    ],
    typescript: [
      {
        name: 'typescript',
        version: '3.5.1'
      },
      {
        name: 'ts-loader',
        version: '6.0.2'
      },
      {
        name: 'tslint',
        version: '5.17.0'
      },
    ],
    pug: [
      {
        name: 'pug',
        version: '2.0.3'
      },
      {
        name: 'pug-loader',
        version: '2.4.0'
      },
    ],
    mobileLayout: [
      {
        name: 'px2rem-loader',
        version: '0.1.9'
      },
      {
        name: 'hotcss',
        version: '2.2.1'
      },
    ],
    scss: [
      {
        name: 'node-sass',
        version: '4.12.0'
      },
      {
        name: 'sass-loader',
        version: '7.1.0'
      },
    ],
    less: [
      {
        name: 'less-loader',
        version: '5.0.0'
      },
      {
        name: 'less',
        version: '3.9.0'
      },
    ],
    styl: [
      {
        name: 'stylus-loader',
        version: '3.0.2'
      },
      {
        name: 'stylus',
        version: '0.54.5'
      },
    ],
  },
};
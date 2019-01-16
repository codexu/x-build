/**
 * @description: 通过命令选择，初始化参数信息
 */

function setParam() {
  // 设置依赖安装指令 安装依赖后具有空格
  switch (this.answers.package_manager) {
    case 'npm':
      this.installBaseType = 'npm install';
      this.installType = 'npm install --save ';
      this.installDevType = 'npm install --save-dev';
      break;
    case 'cnpm':
      this.installBaseType = 'cnpm install';
      this.installType = 'cnpm install --save ';
      this.installDevType = 'cnpm install --save-dev';
      break;
    default:
      this.installBaseType = 'yarn';
      this.installType = 'yarn add ';
      this.installDevType = 'yarn add -D ';
      break;
  }

  /* 添加插件 -> this.plugin */
  if (this.answers.rem){
    this.answers.plugin.push('hotcss');
  }
  if (this.answers.plugin.includes('x-animate') || this.answers.plugin.includes('x-fullpage') ){
    this.answers.plugin.push('animate.css');
  }

  /* 添加依赖 -> this.dependencies */
  // 使用 rem 布局依赖 hotcss
  if (this.answers.rem) {
    this.dependencies.push('hotcss');
  }
  if (this.answers.plugin.length > 0) {
    this.dependencies = [...this.dependencies, ...this.answers.plugin];
  }
  if (this.dependencies.length > 0) {
    this.progress++;
  }

  /* 添加依赖 -> this.devDependencies */
  // eslint
  if (this.answers.eslint) {
    this.devDependencies = [...this.devDependencies, 'babel-eslint', 'eslint-loader', 'eslint'];
  }
  // 模板引擎
  if (this.answers.pug) {
    this.devDependencies = [...this.devDependencies, 'pug', 'pug-loader'];
  }
  // css预处理器
  switch (this.answers.precss) {
    case 'Sass':
      this.cssExt = 'scss';
      this.devDependencies = [...this.devDependencies, 'sass-loader', 'node-sass'];
      break;
    case 'Less':
      this.cssExt = 'less';
      this.devDependencies = [...this.devDependencies, 'less-loader', 'less'];
      break;
    case 'Stylus':
      this.cssExt = 'styl';
      this.devDependencies = [...this.devDependencies, 'stylus-loader', 'stylus'];
      break;
    default:
      this.cssExt = 'css';
      break;
  }
  if (this.devDependencies.length > 0) {
    this.progress++;
  }
}

module.exports = setParam;
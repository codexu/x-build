module.exports = {
  // 默认端口
  port: 8080,
  // 自动使用默认浏览器运行项目
  open: false,
  // 入口文件
  entry: [
    './src/scripts/index.js',
    './src/styles/index.false',
  ],
  pug: false,
  eslint: false,
  babel: false,
  // 是否使用 rem 布局
  mobileLayout: false,
  // rem 布局参数设置
  remUnit: 46.875,
  // base64 处理 （单位字节）
  base64: 8 * 1024,
  // 跨域配置
  proxy: {
    '/api': {
      target: '#',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true,
      secure: false
    }
  }
};

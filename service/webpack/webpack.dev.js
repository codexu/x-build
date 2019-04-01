const webpack = require('webpack');
const base = require('./webpack.base');
const path = require('path');
const config = require(path.resolve(`${process.cwd()}/config.json`));
const loaders = require('./lib/loaders');

// 开发模式
base.mode = 'development';
base.module = {rules: loaders('development')};
base.devtool = 'cheap-module-eval-source-map';

function getIPAdress (){
  let interfaces = require('os').networkInterfaces();
    // eslint-disable-next-line guard-for-in
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++){
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}

base.devServer = {
  port: config.port,
  overlay: {
    errors: true
  },
  open: true,
  hot: true,
  host: getIPAdress(),
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
};

base.plugins.push(
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = base;

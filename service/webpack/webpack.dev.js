const webpack = require('webpack');
const base = require('./webpack.base');
const path = require('path');
const net=require('net')
const config = require(path.resolve(`${process.cwd()}/config.json`));
const loaders = require('./lib/loaders');

// 开发模式
base.mode = 'development';
base.module = {rules: loaders('development')};
base.devtool = 'cheap-module-eval-source-map';

function getIPAdress (){ // 获取本机ip
  var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
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

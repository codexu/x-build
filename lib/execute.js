const { spawn } = require('child_process');
const clearConsole = require('./clearConsole');
const pkg = require('../package.json');
const msg = require('./msg');

const path = require('path');
const config = path.resolve(`${process.cwd()}/config.json`);
const port = require(config).port;
/* eslint-disable */
function execute(cmd, isServe, callback, cwd = process.cwd()) {
  return new Promise((resolve, reject) => {
    let items = cmd.split(' ');
    let exe = items.shift();
    let processor = spawn(exe, items, { cwd });
    let collect = () => {
      let str = '';
      let print = () => {
        if (isServe){
          clearConsole('magenta', `X-BUILD v${pkg.version}`);
          console.log('');
          msg.print('green', ` - Running at: http://localhost:${port}/`);
          msg.print('green', ` - Documentation: https://codexu.github.io/`);
          console.log('');
        } else {
          clearConsole('magenta', `X-BUILD v${pkg.version} completion of construction`);
          console.log('');
        }
        
        let lines = str.split(/[\n|\r\n]/);
        str = lines.pop();
        let contents = lines.join('\r\n');
        if (str === '') { // 如果本来内容就是完整断句的，这里进行修正，表示结尾是正常断句的
          contents += '\r\n';
        }
        callback(contents);
      };
      return (data) => {
        str += data.toString();
        print();
      };
    };
    if (typeof callback === 'function') {
      processor.stdout.on('data', collect());
      processor.stderr.on('data', collect());
    }
    processor.on('error', reject);
    processor.on('close', resolve);
  })
}

module.exports = execute;
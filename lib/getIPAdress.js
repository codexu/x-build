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

module.exports = getIPAdress;

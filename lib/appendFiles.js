const fs = require('fs-extra');
const store = require('./store');
const version = require('../package.json').version;

const htmlTemp = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>X-BUILD v${version}</title>
</head>
<body>
  <p>X-BUILD v${version}</p>
</body>
</html>
`;

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

const configTemp = `module.exports = {
  port: 8080,
  remUnit: 46.875,
  pug: ${store.options.pug},
  eslint: ${store.options.eslint},
  babel: ${store.options.babel},
  mobileLayout: ${store.options.mobileLayout},
  base64: 10000,
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
}
`;

module.exports = function appendFiles() {
  fs.appendFileSync(
    `./${store.dirname}/src/index.${store.options.pug ? 'pug' : 'html'}`,
    store.options.pug ? pugTemp : htmlTemp,
    { flag: 'w' }
  );
  fs.appendFileSync(
    `./${store.dirname}/xbuild.config.js`,
    configTemp,
    { flag: 'w' }
  );
};

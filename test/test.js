const expect = require('chai').expect;

/* eslint-disable */
const getVersion = require('../lib/getVersion');
describe('#getVersion', () => {
  const url = 'https://registry.npmjs.org/x-build/latest';
  const packageVersion = require('../package.json').version;

  it('使用正确的 url 返回 Promise', () => {
    expect(getVersion(url)).to.be.a('Promise');
  })
  it('使用正确的 url 返回 版本号与 package 版本号一致', () => {
    getVersion(url).then(res => {
      expect(res).to.equal(packageVersion);
    })
  })
});

const checkOS = require('../lib/checkOS');
describe('#checkOS', () => {
  const OS_TYPE_WINDOWS = 'Windows_NT';
  const OS_TYPE_DARWIN = 'Darwin';
  const OS_TYPE_LINUX = 'Linux';
  const array = ['cd test', 'npm install']
  it('OS_TYPE_WINDOWS 返回 使用 & 链接的字符串', () => {
    expect(checkOS(array, OS_TYPE_WINDOWS)).to.equal('cd test & npm install');
  })
  it('OS_TYPE_DARWIN 返回 使用 \\n 链接的字符串', () => {
    expect(checkOS(array, OS_TYPE_DARWIN)).to.equal('cd test\nnpm install');
  })
  it('OS_TYPE_LINUX 返回 使用 \\n 链接的字符串', () => {
    expect(checkOS(array, OS_TYPE_LINUX)).to.equal('cd test\nnpm install');
  })
});
const expect = require('chai').expect;

const getVersion = require('../lib/getVersion');
const hasYarn = require('../lib/hasYarn');
const checkOS = require('../lib/checkOS');

/* eslint-disable */
describe('#getVersion', () => {
  it('should return Promise & latest version', () => {
    const url = 'https://registry.npmjs.org/x-build/latest';
    expect(getVersion(url)).to.be.a('Promise');
    let version = null;
    getVersion(url).then(res => {
      version = res;
      const packageVersion = require('../package.json').version;
      expect(version).to.equal(packageVersion);
    })
  })
});

describe('#hasYarn', () => {
  it('should return package name', () => {
    expect(hasYarn()).to.be.a('String');
  })
});

describe('#checkOS', () => {
  it('should return cmd string', () => {
    expect(checkOS(['cd demo', 'npm install'], 'Windows_NT')).to.equal('cd demo & npm install');
    expect(checkOS(['cd demo', 'npm install'], 'other')).to.equal('cd demo\nnpm install');
  })
});
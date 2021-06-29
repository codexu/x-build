const ejs = require("ejs");
const fs = require('fs-extra');
const path = require("path");
const prettier = require("prettier");
const options = require("./options");

module.exports = (templatePath) => {
  return async function (src) {
    const file = path.parse(src);
    const readFilePath = path.resolve(templatePath, file.dir ,`${file.name}.ejs`);
    const outputFilePath = path.resolve(templatePath, src);

    const templateCode = await fs.readFile(readFilePath);

    const code = ejs.render(templateCode.toString(), options);
    let extname = path.extname(src).replace(/[.]/g, '');
    if (extname === 'ts') extname = 'typescript';
    const prettierCode = prettier.format(code, { parser: extname });

    await fs.outputFile(outputFilePath, prettierCode)
    await fs.remove(readFilePath)
  }
};

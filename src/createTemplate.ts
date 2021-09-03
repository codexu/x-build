import ejs = require("ejs");
import fs = require('fs-extra');
import path = require("path");
import prettier = require("prettier");
import options from "./options";

export async function ejsRender (filePath: string): Promise<void> {
  const file = path.parse(filePath);
  const readFilePath = path.resolve(options.dest, file.dir, `${file.name}.ejs`);
  const outputFilePath = path.resolve(options.dest, filePath);

  const templateCode = await fs.readFile(readFilePath);

  const code = ejs.render(templateCode.toString(), options);
  const extname = path.extname(filePath).replace(/[.]/g, '');
  let prettierCode: string
  await prettier.resolveConfig(options.src).then((opts) => {
    switch (extname) {
      case 'ts':
        prettierCode = prettier.format(code, { parser: 'babel' ,...opts});
        break;
      case 'js':
        prettierCode = prettier.format(code, { parser: 'babel' ,...opts});
        break;
      case 'vue':
        prettierCode = prettier.format(code, Object.assign(opts, { parser: extname }));
        break;
      default:
        prettierCode = prettier.format(code, { parser: extname });
        break;
    }
  });

  await fs.outputFile(outputFilePath, prettierCode)
  await fs.remove(readFilePath)
}

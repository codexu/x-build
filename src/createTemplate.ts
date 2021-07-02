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
  if (extname === 'ts' || extname === 'js') {
    await prettier.resolveConfig(options.src).then((options) => {
      prettierCode = prettier.format(code, options);
    });
  } else {
    prettierCode = prettier.format(code, { parser: extname });
  }

  await fs.outputFile(outputFilePath, prettierCode)
  await fs.remove(readFilePath)
}

export async function packageRender(filePath: string): Promise<void> {
  const src = path.resolve(__dirname, '../package', filePath);
  const dest = path.resolve(options.dest, 'src', filePath);
  await fs.copy(src, dest);
}
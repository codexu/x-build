import fs = require('fs-extra');
import path = require("path");
import options from "../options";

export default async function (): Promise<void> {
  const packageFile = path.resolve(__dirname, '../../package.json');

  const packageCode = await fs.readFile(packageFile);
  const packageJson = JSON.parse(packageCode.toString())
  options.version = packageJson.version;
}
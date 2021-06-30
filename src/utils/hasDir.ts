import { access, constants } from 'fs';
import chalk = require('chalk');

export default function(name: string): Promise<boolean> {
  return new Promise ((resolve) => {
    access(name, constants.F_OK, error => {
      if (error) {
        resolve(true);
      } else {
        console.log(chalk.red(
          `The ${name} folder already exists in the current directory. Please try to use another project name!`
        ));
        process.exit(1);
      }
    });
  });
}
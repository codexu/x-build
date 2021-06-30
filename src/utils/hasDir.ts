import fs = require('fs');
import chalk = require('chalk');

export default function(name: string): Promise<boolean> {
  return new Promise ((resolve) => {
    fs.access(name, error => {
      if (error) {
        console.log(chalk.red(
          `The ${name} folder already exists in the current directory. Please try to use another project name!`
        ));
        process.exit(1);
      } else {
        resolve(true);
      }
    });
  });
}
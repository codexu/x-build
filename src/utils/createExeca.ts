import execa = require('execa');

export default function createExeca (root: string) {
  return function (cmd: string, args?: string[]): void {
    execa(cmd, args, {
      cwd: root,
      stdio: [2, 2, 2],
    });
  }
}
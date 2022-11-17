import { spawn, StdioOptions } from 'child_process';

function createSpawnCmd(dest: string, stdio: StdioOptions = 'inherit') {
  return function (cmd: string, args?: string[]): Promise<boolean> {
    const ls = spawn(cmd, args, {
      cwd: dest,
      stdio: stdio,
      shell: true
    });
    return new Promise((resolve, reject) => {
      ls.on('close', (code) => { 
        if (code === 0) {
          resolve(true)
        } else {
          reject(new Error(`command error: ${cmd} ${args.join(' ')}`));
        }
      });
    })
  };
}

export default createSpawnCmd;

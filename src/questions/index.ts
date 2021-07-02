import { prompt } from 'inquirer';
import options from '../options';
import precss from './precss';
import device from './device';
import { pcComponents, mobileComponents } from './components';

async function createQuestion(quesiton) {
  const result = await prompt([quesiton]);
  Object.assign(options, result);
  return Promise.resolve();
}

async function createQuestions (): Promise<boolean> {
  await createQuestion(device)
  // 根据选择的设备提示不同选项
  if (options.device === 'pc') {
    await createQuestion(pcComponents)
  } else {
    await createQuestion(mobileComponents)
  }
  await createQuestion(precss)
  return Promise.resolve(true);
}

export default createQuestions;
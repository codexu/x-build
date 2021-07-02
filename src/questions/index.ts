import { prompt, QuestionCollection } from 'inquirer';
import options from '../options';
import precss from './precss';
import device from './device';
import components from './components';

async function createQuestion(quesiton) {
  const result: QuestionCollection = await prompt([quesiton]);
  Object.assign(options, result);
  return Promise.resolve();
}
  
async function createQuestions (): Promise<void> {
  await createQuestion(device)
  await createQuestion(components)
  await createQuestion(precss)
  return Promise.resolve();
}

export default createQuestions;
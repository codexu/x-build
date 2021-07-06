import { prompt, QuestionCollection } from 'inquirer';
import options from '../../options';
import type from './type';
import components from './components';

async function createQuestion(quesiton) {
  const result: QuestionCollection = await prompt([quesiton]);
  Object.assign(options, result);
  return Promise.resolve();
}

async function createQuestions(): Promise<void> {
  await createQuestion(type);
  if (options.pluginType === 'component') {
    await createQuestion(components);
  }
  return Promise.resolve();
}

export default createQuestions;
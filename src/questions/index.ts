import { prompt } from 'inquirer';
import precss from "./precss";
import components from "./components";

function createQuestions(): Promise<unknown> {
  return prompt([
    precss,
    components,
  ]);
}

export default createQuestions;
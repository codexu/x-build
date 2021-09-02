interface Options {
  name?: string;
  version?: string;
  src?: string;
  dest?: string;
  components?: string;
  pluginType?: 'component' | 'hook' | 'directive';
  plugins?: string[];
  allPackages?: any[];
  precss?: 'less' | 'scss' | '';
}

const options: Options = {};
export default options;

export function fetchTemplateFiles(): string[] {
  return [
    'package.json',
    'babel.config.js',
    '.stylelintrc.js',
    'src/main.ts',
    'src/components/index.ts',
    'src/store/sys/log.ts',
    `src/styles/global.${options.precss}`,
  ]
}

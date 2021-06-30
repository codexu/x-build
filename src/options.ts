interface Options {
  name: string;
  version: string;
  src: string;
  dest: string;
  [key: string]: string;
}

const options: Options = {
  name: '',
  version: '',
  src: '',
  dest: '',
}

export default options
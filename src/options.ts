interface Options {
  name: string
  version: string
  src: string
  dest: string
  components: {
    [key: string]: boolean
  }
}

const options: Options = {
  name: '',
  version: '',
  src: '',
  dest: '',
  components: {
    elementPlus: false,
  }
}

export default options
class xLoader {
  constructor(opts) {
    this.el = document.querySelectorAll('img[data-src]')
    this.priorityArray = []
    this.othersArray = []
    this.wrapper = opts.wrapper
    this.loader = opts.loader
    // 注册图片加载完成事件
    this.imgDone = new Event('imgDone')
    this.init()
  }
  init() {
    this.wrapper.style.display = 'none'
    // 遍历dom 为不同加载顺序的img分组 priorityArray(首批加载) othersArray(后续加载)
    this.el.forEach(element => {
      if (element.getAttribute('data-priority') === 'true') {
        this.priorityArray.push(element)
      } else {
        this.othersArray.push(element)
      }
    });
    // 执行首次加载
    this.priorityLoad()
    return this
  }
  priorityLoad() {
    let count = 0
    let _this = this
    this.priorityArray.forEach(element => {
      element.src = element.getAttribute('data-src')
      element.onload = () => {
        count++
        if(count >= this.priorityArray.length){
          this.wrapper.style.display = 'block'
          this.loader.style.display = 'none'
          window.dispatchEvent(this.imgDone)
          _this.othersLoad()
        }
      }
    })
  }
  othersLoad() {
    this.othersArray.forEach(element => element.src = element.getAttribute('data-src'))
  }
  then(fn) {
    window.addEventListener('imgDone', () => fn(this))
  }
}
export default xLoader
export default class Util {
  constructor() {
    
  }
  // 判断是否为质数
  isPrimeNumber(n) {
    if(!this.isEven(n)){
      return false
    }
    for (let i = 2; i < n / 2 + 1; i++) {
      console.log(i)
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
  isEven(n) {
    let _n = n.toString()
    let lastNum = _n.substring(_n.length - 1, _n.length)
    console.log(lastNum);
    return lastNum % 2 === 0 || lastNum % 5 === 0 ? false : true
  }
}
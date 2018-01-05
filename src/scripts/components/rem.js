/*
请使用improt方式引入该文件。
使用方式：
  移动端建议使用'750px'设计稿，如果网页大于750px时，font-size为100px。
rem换算：
  设计稿尺寸除100，例如设计稿'20px'，换算20 / 100 = 0.2rem
  7.5rem为网页宽度的100%。
*/

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      if (clientWidth >= 750) {
        docEl.style.fontSize = '100px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
      }
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}(document, window))
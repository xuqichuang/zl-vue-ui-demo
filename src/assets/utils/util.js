// 设置网页字体大小 手机端
export default () => {
  let oldWidth = document.documentElement.offsetWidth;
  let setFontSize = () => {
    if (document.documentElement.offsetWidth > 750) {
      document.documentElement.style.fontSize = 100 + 'px'
    } else {
      document.documentElement.style.fontSize = document.documentElement.offsetWidth / 7.5 + 'px'
    }
  }
  setFontSize()
  window.onresize = function () {
    let newWidth = document.documentElement.offsetWidth;
    if(oldWidth != newWidth){
      setFontSize()
    }
    
  }
}
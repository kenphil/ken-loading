window.onload = function() {
  let container = document.getElementById('waveRandom')
  let bars = container.children

  let delayArr = [0, 0.1, 0.2, 0.3, 0.4]

  for (let i = 0, len = bars.length; i < len; i++) {
    let index = parseInt(Math.random() * delayArr.length)
    bars[i].style.animationDelay = delayArr[index] + 's'
    delayArr.splice(index, 1)
  }
}

import '../css/index.css'

const setThumbnail = event => {
  const reader = new FileReader()
  reader.onload = event => {
    const conatinerQuery = "div#result_container"
    const container = document.querySelector(conatinerQuery)
    const img = document.createElement("img")
    img.setAttribute("src", event.target.result)
    const child = document.querySelector(`${conatinerQuery} img`)
    if (child) container.removeChild(child)
    container.appendChild(img)
    img.style.width = "200px"
    img.style.height = "200px"

    // const canvas = document.querySelector("div#piece1 canvas.image")
    // canvas.style.width = '100px'
    // canvas.style.height = '100px'
    // const ctx = canvas.getContext("2d")
    // ctx.beginPath()
    // ctx.drawImage(img, 0, 0, 100, 100)
    // ctx.stroke()
  }
  reader.readAsDataURL(event.target.files[0])
}

const fileInput = document.getElementById('image_input')
fileInput.onchange = setThumbnail

/** init */
// TODO: isReady가 true면 정답에서 부터 거꾸로 맞추기
// TODO: isReady가 false면 섞지 말기
// TODO: isStarted가 true 면 정답 맞출 경우 정답처리. false면 섞는 중으로 간주되므로 정답처리 X
let move = false
let selected = 0
let beforeCursorX = 0
let beforeCursorY = 0
document.body.addEventListener('mousedown', () => {
  move = true
})
document.body.addEventListener('mouseup', () => {
  move = false
  selected = 0
})
const indexes = Array.apply(0, new Array(17)).map((_, idx) => idx + 1)
indexes.map((index) => {
  const piece = document.getElementById(`piece${index}`)
  // TODO: canvas 16등분으로 잘라서 각 piece 안에 삽입
  // TODO: blank공간 예외처리
  piece.addEventListener('mousedown', (event) => {
    selected = index
    beforeCursorX = event.pageX
    beforeCursorY = event.pageY
  })
  piece.addEventListener('mousemove', (event) => {
    if(move && selected) {
      const selectedPiece = document.getElementById(`piece${selected}`)
      // TODO: translateX, Y가 block의 width, height를 넘길 경우 maximum으로 fix
      selectedPiece.style.transform = `translate(${event.pageX - beforeCursorX}px, ${event.pageY - beforeCursorY}px)`
      // TODO: 만약 일정 translateX가 넘어가면 translateX horizental canvas swap and fix
      // TODO: 만약 일정 translateY가 넘어가면 translateY vertical canvas swap and fix
    }
  })
})
document.getElementById('')
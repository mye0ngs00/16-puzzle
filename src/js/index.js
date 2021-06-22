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
let move = false
let selected = NaN
document.body.addEventListener('mousedown', () => {
  move = true
  console.log('move: true')
})
document.body.addEventListener('mouseup', () => {
  move = false
  console.log('move: false')
})
const indexes = Array.apply(0, new Array(17)).map((_, idx) => idx + 1)
indexes.map((index) => {
  const piece = document.getElementById(`piece${index}`)
  piece.addEventListener('mousedown', () => {
    selected = index
  })
  piece.addEventListener('mousemove', () => {
    move ? console.log(index) : null
  })
})
document.getElementById('')
import '../css/index.css'

const setThumbnail = event => {
  const reader = new FileReader()
  reader.onload = event => {
    const img = document.createElement("img")
    img.setAttribute("src", event.target.result)
    document.querySelector("div#result_container").appendChild(img)
  }
  reader.readAsDataURL(event.target.files[0])
}

const fileInput = document.getElementById('image_input')
fileInput.onchange = setThumbnail
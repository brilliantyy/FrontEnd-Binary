const canvasEl = document.getElementById('canvas')
const width = canvasEl.width
const height = canvasEl.height
const ctx = canvasEl.getContext('2d')
const imageData = ctx.createImageData(width, height /2)

ctx.fillRect(0, 0, width, height, )
for (let i = 0, len = imageData.data.length; i < len; i += 4) {
  imageData.data[i + 0] = 190
  imageData.data[i + 1] = 0
  imageData.data[i + 2] = 210
  imageData.data[i + 3] = 255
}

ctx.putImageData(imageData, 0, 0)


// const dataURL = canvasEl.toDataURL()
// console.log('dataURL:', dataURL)

// canvas.toBlob((blob) => {
//   const image = document.createElement('img')
//   const url = URL.createObjectURL(blob)

//   image.onload = () => {
//     URL.revokeObjectURL(url)
//   }

//   image.src = url
//   document.body.appendChild(image)
// })


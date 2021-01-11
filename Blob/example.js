/* Plain Object */
const obj = { prop: 'Hello World' }
const strBlob = new Blob(
  [JSON.stringify(obj)], 
  { type: 'application/json' }
)

const stream = strBlob.stream()
console.log(stream)


/* Text */
// const htmlText = ['<a id="a"><b id="b">hey!</b></a>']
// const htmlBlob = new Blob(
//   htmlText, 
//   { type: 'text/html' }
// )

// htmlBlob.text().then(text => {
//   console.log(text)
// })


/* ArrayBuffer */
// const inputEl = document.querySelector('#input')
// inputEl.addEventListener('change', (fileList) => {
//   const file = inputEl.files[0]
//   const arrayBufferBlob = new Blob([file], { type: file.type })

//   arrayBufferBlob.arrayBuffer().then(arrayBuffer => {
//     console.log(arrayBuffer)
//   })
// })

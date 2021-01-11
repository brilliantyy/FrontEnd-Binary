const inputEl = document.querySelector('#input')

inputEl.addEventListener('change', (fileList) => {
  const file = inputEl.files[0]
  const reader = new FileReader()

  reader.onload = (e) => {
    console.log(e.target.result)
  }

  reader.readAsArrayBuffer(file)

  // reader.readAsBinaryString(file)

  // reader.readAsText(file)
})
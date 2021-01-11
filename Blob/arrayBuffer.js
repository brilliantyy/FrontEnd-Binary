const buffer = new ArrayBuffer(2)
console.log('buffer.byteLength:', buffer.byteLength)

const dataView = new DataView(buffer)
dataView.setInt8(0, 1)
dataView.setInt8(1, 2)

// console.log('getInt8(0):', dataView.getInt8(0))
// console.log('getInt8(1):', dataView.getInt8(1))
// console.log('getInt16(0):', dataView.getInt16(0))

const buffer1 = new ArrayBuffer(8)
const int8Array = new Int8Array(buffer1)
const int16Array = new Int16Array(buffer1)

console.log('buffer.byteLength:', buffer1.byteLength)
console.log('int8Array.length:', int8Array.length)
console.log('int16Array.length:', int16Array.length)
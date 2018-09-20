// export default function findItem(array, params) {
//   return array.reduce((found, item) => (Object.keys(params)
//     .reduce((matches, key) => matches && item[key] === params[key], true)
//     ? item
//     : found
//   ), undefined)
// }

export default function findItem(array, params) {
  return array.find(element => {
    const elementKeys = Object.keys(element)
    return elementKeys.some(key => element[key] === params[key])
  })
}

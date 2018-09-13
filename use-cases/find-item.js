export default function findItem(array, params) {
  return array.reduce((found, item) => {
    const isMatch = Object
      .keys(params)
      .reduce((matches, key) => matches && item[key] === params[key], true)

    if (isMatch) {
      return item
    }

    return found
  }, undefined)
}

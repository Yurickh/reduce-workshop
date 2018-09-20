// export default function urlBuilder(data) {
//   return Object.entries(data)
//     .reduce((queryString, [key, value]) => {
//       switch (true) {
//         case value == null: return queryString
//         case queryString.length === 0: return `?${key}=${value}`
//         default: return `${queryString}&${key}=${value}`
//       }
//     }, '')
// }

export default function urlBuilder(data) {
  if (!Object.keys(data).length) {
    return ''
  }

  return `?${Object.entries(data)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`
}

export default function urlBuilder(data) {
  return Object.entries(data)
    .reduce((queryString, [key, value]) => {
      if (value == null) {
        return queryString
      }

      if (queryString.length === 0) {
        return `?${key}=${value}`
      }

      return `${queryString}&${key}=${value}`
    }, '')
}

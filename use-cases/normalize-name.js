function capitalize(string) {
  if (string.length === 0) return ''

  const [first, ...rest] = string

  // return `${first.toUpperCase()}${rest.reduce(sum)}`
  return `${first.toUpperCase()}${rest.join('')}`
}

export default function normalizeName(array) {
  return array.map(item => ({
    ...item,
    name: capitalize(item.name),
  }))
}

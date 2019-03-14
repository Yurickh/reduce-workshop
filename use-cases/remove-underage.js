function isUnderage(date) {
  const now = new Date()

  return now.getFullYear() - date.getFullYear() < 18
}

export default function removeUnderage(array) {
  return array.filter(e => !isUnderage(e.birth))
}

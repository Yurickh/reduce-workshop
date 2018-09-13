function isUnderage(date) {
  const now = new Date()

  return (now.getFullYear() - date.getFullYear()) < 18
}

export default function removeUnderage(array) {
  return array.reduce((acc, item) => {
    if (isUnderage(item.birth)) {
      return acc
    }

    return [...acc, item]
  }, [])
}

function isPerfectSquare(number) {
  const root = Math.sqrt(number)
  return root - parseInt(root, 10) === 0
}

export default function maxSquare(list) {
  const filteredList = list.filter(element => isPerfectSquare(element))
  return filteredList.length > 0 ? Math.max(...filteredList) : undefined
}

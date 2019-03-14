function isPerfectSquare(number) {
  const root = Math.sqrt(number)
  return root - parseInt(root, 10) === 0
}

export default function maxSquare(list) {
  const squares = list.filter(isPerfectSquare)

  if (squares.length === 0) return undefined

  return Math.max(...squares)

  // return list.reduce((perfect, number) => {
  //   if (isPerfectSquare(number)) {
  //     if (perfect === undefined) return number
  //     if (perfect < number) return number
  //   }
  //   return perfect
  // }, undefined)
}

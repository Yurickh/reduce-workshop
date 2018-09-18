function isPerfectSquare(number) {
  const root = Math.sqrt(number)
  return (root - parseInt(root, 10)) === 0
}

export default function maxSquare(list) {
  return list.reduce((perfect, number) => {
    if (isPerfectSquare(number)) {
      if (perfect === undefined) return number
      if (perfect < number) return number
    }

    return perfect
  }, undefined)
}

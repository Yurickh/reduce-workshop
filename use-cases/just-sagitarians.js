function isSagitarian(date) {
  const begin = new Date(date.getFullYear(), 10, 23) // november 23
  const end = new Date(date.getFullYear(), 11, 21) // december 21

  return begin < date && date < end
}

export default function justSagitarians(array) {
  return array.every(element => isSagitarian(element.birth))
}

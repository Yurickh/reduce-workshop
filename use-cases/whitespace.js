export default function whitespace(number) {
  return 'nbsp;|'
    .repeat(number)
    .split('|')
    .reduce((acc, nbsp) => {
      if (nbsp === '') {
        return acc
      }
      acc.push(nbsp)
      return acc
    }, [])
}

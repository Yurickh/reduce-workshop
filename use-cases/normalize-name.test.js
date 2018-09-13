import normalizeName from './normalize-name'

describe('normalize-name', () => {
  const singleInput = [{
    id: 0,
    name: 'avocado',
    birth: new Date('1993-12-04'),
  }]

  const multipleInput = [...singleInput, ...singleInput, ...singleInput]

  it('outputs an empty array when receiving an array', () => {
    expect(normalizeName([])).toHaveLength(0)
  })

  it('does not mutate input', () => {
    const snapshot = [{ ...singleInput[0] }]

    normalizeName(snapshot)

    expect(snapshot).toEqual(singleInput)
  })

  it('recreates over the whole input', () => {
    const output = normalizeName(multipleInput)
    expect(output).toHaveLength(multipleInput.length)
  })

  it('does not change id and date of birth', () => {
    normalizeName(multipleInput).forEach(({ id, birth }, index) => {
      expect(id).toBe(multipleInput[index].id)
      expect(birth).toEqual(multipleInput[index].birth)
    })
  })

  it('capitalizes only the first letter of the name', () => {
    normalizeName(multipleInput).forEach(({ name }, index) => {
      expect(name.slice(1)).toEqual(multipleInput[index].name.slice(1))
      expect(name[0]).toEqual(multipleInput[index].name[0].toUpperCase())
    })
  })

  it('does not break when receiving an empty string', () => {
    const normalized = normalizeName([{ name: '' }])

    expect(normalized[0].name).toBe('')
  })
})

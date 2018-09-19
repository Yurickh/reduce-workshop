import maxSquare from '../max-square'

describe('maxSquare', () => {
  it('is undefined when input is empty', () => {
    expect(maxSquare([])).toBeUndefined()
  })

  it('is undefined when input does not contain perfect square', () => {
    expect(maxSquare([3, 5])).toBeUndefined()
  })

  it('is the perfect square received', () => {
    expect(maxSquare([9])).toBe(9)
  })

  it('finds the biggest perfect square passed', () => {
    expect(maxSquare([9, 25, 3])).toBe(25)
  })

  it('is order independent', () => {
    expect(maxSquare([3, 25, 9])).toBe(25)
    expect(maxSquare([3, 9, 25])).toBe(25)
    expect(maxSquare([9, 3, 25])).toBe(25)
    expect(maxSquare([9, 25, 3])).toBe(25)
    expect(maxSquare([25, 3, 9])).toBe(25)
    expect(maxSquare([25, 9, 3])).toBe(25)
  })
})

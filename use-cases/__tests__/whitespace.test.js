import whitespace from '../whitespace'

describe('whitespace', () => {
  it('creates an array with length equal to the input', () => {
    expect(whitespace(3)).toHaveLength(3)
    expect(whitespace(5)).toHaveLength(5)
    expect(whitespace(1)).toHaveLength(1)
    expect(whitespace(0)).toHaveLength(0)
    expect(whitespace(20)).toHaveLength(20)
  })

  it('fills the array with nbsp;', () => {
    expect(whitespace(20).every(one => one === 'nbsp;')).toBe(true)
  })
})

import findItem from '../find-item'

describe('findItem', () => {
  const input = [
    {
      id: 0,
      name: 'Yurick',
    },
    {
      id: 1,
      name: 'Thales',
    },
    {
      id: 2,
      name: 'Levino',
    },
  ]

  it('finds an item with given id', () => {
    expect(findItem(input, { id: 1 })).toEqual({ id: 1, name: 'Thales' })
  })

  it('finds an item with given name', () => {
    expect(findItem(input, { name: 'Levino' })).toEqual({
      id: 2,
      name: 'Levino',
    })
  })

  it('is undefined if item is not found', () => {
    expect(findItem(input, { id: 200 })).toBeUndefined()
  })
})

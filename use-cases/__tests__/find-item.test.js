import findItem from '../find-item'

describe('findItem', () => {
  const input = [
    {
      id: 3,
    },
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
    {
      food: 'pudim',
      time: 'dessert',
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

  it('finds generic item', () => {
    expect(findItem(input, { food: 'pudim' })).toEqual({
      food: 'pudim',
      time: 'dessert',
    })
  })
})

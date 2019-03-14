import justSagitarians from '../just-sagitarians'

describe('justSagitarians', () => {
  it('is true for an empty array', () => {
    expect(justSagitarians([])).toBe(true)
  })

  it('is true if all passed people are sagitarians', () => {
    const sagitarians = [
      {
        id: 0,
        name: 'Yurick',
        birth: new Date('1993-12-04'),
      },
      {
        id: 1,
        name: 'Joyce',
        birth: new Date('1972-11-25'),
      },
    ]

    expect(justSagitarians(sagitarians)).toBe(true)
  })

  it('is false if none of the passed people is sagitarian', () => {
    const nonSagitarians = [
      {
        id: 0,
        name: 'Vinicius',
        birth: new Date('1991-07-30'),
      },
      {
        id: 1,
        name: 'Natalia',
        birth: new Date('1997-12-29'),
      },
    ]

    expect(justSagitarians(nonSagitarians)).toBe(false)
  })

  it('is false if at least one person passed is not sagitarian', () => {
    const mixed = [
      {
        id: 0,
        name: 'Yurick',
        birth: new Date('1993-12-04'),
      },
      {
        id: 1,
        name: 'Natalia',
        birth: new Date('1997-12-29'),
      },
      {
        id: 2,
        name: 'Joyce',
        birth: new Date('1972-11-25'),
      },
    ]

    expect(justSagitarians(mixed)).toBe(false)
  })
})

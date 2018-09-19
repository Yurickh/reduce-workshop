import removeUnderage from '../remove-underage'

describe('removeUnderage', () => {
  it('outputs an empty array when receiving an array', () => {
    expect(removeUnderage([])).toHaveLength(0)
  })

  it('does not mutate input', () => {
    const input = [{
      id: 0,
      name: 'Yurick',
      birth: new Date('1993-12-04'),
    }]
    const snapshot = [{ ...input[0] }]

    removeUnderage(input)

    expect(input).toEqual(snapshot)
  })

  it('outputs the same array when there is no underage present', () => {
    const noUnderage = [{
      id: 0,
      name: 'Yurick',
      birth: new Date('1993-12-04'),
    }, {
      id: 1,
      name: 'Vinicius',
      birth: new Date('1991-07-30'),
    }]

    expect(removeUnderage(noUnderage)).toEqual(noUnderage)
  })

  it('removes people that are under age', () => {
    const now = new Date()
    const twelveYearsFromNow = now.getFullYear() - 12

    const input = [{
      id: 0,
      name: 'Yurick',
      birth: new Date('1993-12-04'),
    }, {
      id: 1,
      name: 'Luana',
      birth: new Date(`${twelveYearsFromNow}-12-02`),
    }, {
      id: 2,
      name: 'Vinicius',
      birth: new Date('1991-07-30'),
    }]

    expect(removeUnderage(input)).toHaveLength(input.length - 1)
  })
})

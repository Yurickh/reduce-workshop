import normalizeName from './normalize-name'
import removeUnderage from './remove-underage'

xdescribe('reduce usage', () => {
  const { reduce } = Array.prototype
  const input = [{
    id: 0,
    name: 'Yurick',
    birth: new Date('1993-12-04'),
  }, {
    id: 1,
    name: 'Luana',
    birth: new Date(`${new Date().getFullYear() - 12}-12-02`),
  }, {
    id: 2,
    name: 'Vinicius',
    birth: new Date('1991-07-30'),
  }]

  beforeEach(() => {
    /* eslint-disable-next-line no-extend-native */
    Array.prototype.reduce = jest.fn(reduce)
  })

  test('normalizeName', () => {
    normalizeName(input)
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test('removeUnderage', () => {
    removeUnderage(input)
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  afterEach(() => {
    /* eslint-disable-next-line no-extend-native */
    Array.prototype.reduce = reduce
  })
})

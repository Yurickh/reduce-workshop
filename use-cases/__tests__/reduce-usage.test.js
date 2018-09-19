import normalizeName from '../normalize-name'
import removeUnderage from '../remove-underage'
import urlBuilder from '../url-builder'
import justSagitarians from '../just-sagitarians'
import findItem from '../find-item'
import maxSquare from '../max-square'
import whitespace from '../whitespace'

describe('reduce usage', () => {
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

  test.skip('normalizeName', () => {
    normalizeName(input)
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test.skip('removeUnderage', () => {
    removeUnderage(input)
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test.skip('urlBuilder', () => {
    urlBuilder(input[0])
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test.skip('justSagitarians', () => {
    justSagitarians(input)
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test.skip('findItem', () => {
    findItem(input, { id: 2 })
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test.skip('maxSquare', () => {
    maxSquare([3, 5, 9, 12, 25, 18, 144])
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  test.skip('whitespace', () => {
    whitespace(20)
    expect(Array.prototype.reduce).not.toHaveBeenCalled()
  })

  afterEach(() => {
    /* eslint-disable-next-line no-extend-native */
    Array.prototype.reduce = reduce
  })
})

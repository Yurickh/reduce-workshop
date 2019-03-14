import fetchAll from '../fetch-all'

// we add some entropy to simulate different requests resolving
// non-instantantly
const randomNumber = () => Math.floor(Math.random() * 100)

const mockFetch = arg => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`fetched with ${arg}`)
    }, randomNumber())
  })
}

describe('fetch-all', () => {
  let originalFetch

  beforeEach(() => {
    originalFetch = window.fetch
    window.fetch = jest.fn(mockFetch)
  })

  afterEach(() => {
    window.fetch = originalFetch
  })

  it('calls a fetch when we pass a url', async () => {
    expect(await fetchAll(['potato'])).toContain('fetched with potato')

    expect(window.fetch).toHaveBeenCalledWith('potato')
  })

  it('calls all urls sequentially when we pass multiple urls', async () => {
    expect(await fetchAll([1, 2, 3, 4, 5])).toEqual([
      'fetched with 1',
      'fetched with 2',
      'fetched with 3',
      'fetched with 4',
      'fetched with 5',
    ])
  })
})

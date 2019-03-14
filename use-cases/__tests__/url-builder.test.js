import urlBuilder from '../url-builder'

describe('urlBuilder', () => {
  it('returns an empty string when no data is passed', () => {
    expect(urlBuilder({})).toEqual('')
  })

  it('parses the data passed into a GET query string', () => {
    const data = {
      id: 0,
      name: 'Yurick',
      startDate: '2018-01-01',
      endDate: '2018-12-12',
    }

    expect(urlBuilder(data)).toEqual(
      '?id=0&name=Yurick&startDate=2018-01-01&endDate=2018-12-12',
    )
  })

  it('omits undefined or null parameters', () => {
    const data = {
      id: 0,
      name: 'Yurick',
      startDate: undefined,
      endDate: null,
    }

    expect(urlBuilder(data)).toEqual('?id=0&name=Yurick')
  })
})

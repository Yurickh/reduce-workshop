export default function(urls) {
  return new Promise(resolve => {
    // a container
    const container = []
    // fetch all with get
    urls
      .reduce(
        function reducer(all, url) {
          return all.then(function pushWaiterOnEndOfArray() {
            return fetch(url).then(result => {
              container.push(result)
            })
          })
        },
        new Promise(function empty(res) {
          res(true)
        }),
      )
      .then(function ret() {
        resolve(container)
      })
  })
}

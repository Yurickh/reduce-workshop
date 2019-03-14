# workshop.reduce

This is a workshop/dojo I made for [Novatics](http://novatics.com.br) in order to avoid the general misuse of the `Array.prototype.reduce` method.

It contains several use cases in the form of helper functions, each implemented using reduce and thoroughly tested.

The main goal of the workshopee (is this even a word?) is to refactor the helper function in order to remove the usage of reduce and improve the readability of the code.

Notice there's no documentation of what the function does, or what is its intended behavior, it's on the workshopee to derive it from the tests. This is intentional, as this is what real-life code often looks like. In fact, one of the use cases was extracted directly from a real codebase.

After the refactor is done, all the tests must be passing. If you want to be thorough, there's a `reduce-usage.test.js` test suite that checks for the usage of the reduce method in use cases where it is not due.

### Is reduce a bad thing?

No. It is one of the most powerful Array methods, by far.

### Why this workshop, then?

For being so versatile, it is often misused, in cases where `every`, `some`, `includes`, `map`, `filter` or `join` would be a better fit. This affects intention and readability of the code.

### Can every reduce be rewritten as a combination of other methods?

No. Reduce has its place and reason for existing. The goal here is to identify when it is not required to better write idiomatic, readable Javascript.

### Do you have an answer sheet?

Yup. You'll find Novatics' answers on the branch `answers` on this repo.

## General instructions on running the test suite

### 1. Install dependencies

```bash
yarn install
```

or, for npm users

```bash
npm install
```

### 2. Run the tests

This workshop uses [jest](https://jestjs.io) as its test runner/framework.

I've also had to use [babel](https://babeljs.io) since as of `node@10.10` native `imports` are still experimental and I don't like `require`.

```bash
yarn test
```

```bash
npm test
```

For watch mode:

```bash
yarn test:watch
yarn test --watch
```

```bash
npm run test:watch
npm run test -- --watch
```

For coverage data:

```bash
yarn test --coverage
```

```bash
npm run test -- --coverage
```

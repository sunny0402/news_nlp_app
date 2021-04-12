## About

## Setup Notes:

```
// if copy package.json then to install dependencies and devDependencies
//https://docs.npmjs.com/cli/v7/commands/npm-install
npm install --also=dev

//to confirm
npm list
```

```
// disable hot reload to see errors in console
// in webpack.dev.js add
devServer: {
hot: false,
inline: false,
liveReload: false,
},
```

```
//dev and express servers
npm run build-prod
npm run build-dev - dev server up on 8080
npm start - express server up on 3000
```

## Error Notes:

ReferenceError: regeneratorRuntime is not defined

Babel transpiles ES6 into ES5. Edit .babelrc to configure how Babel transpiles code.

If using async/await syntax. Change .babelrc from:

```
{ "presets": ['@babel/preset-env'] }
```

To:

```
{"presets": [
          [
              "@babel/preset-env",
              {
                  "exclude": ["transform-regenerator"]
              }
          ]
      ]}
```

https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
ReferenceError: fetch is not defined

```
npm i node-fetch --save
const fetch = require("node-fetch");
```

## Enviroment Variables

```
npm install dotenv

```

## Testing

https://www.valentinog.com/blog/jest/

```
npm install --save-dev jest
```

Jest ships with jsdom
https://jestjs.io/docs/tutorial-jquery

Mocking and Async Testing
https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
https://github.com/leighhalliday/easy-mobx-redux-comparison/blob/mocking-axios-finished/src/services/__tests__/unsplash.js
https://github.com/leighhalliday/easy-mobx-redux-comparison/blob/mocking-axios-finished/src/__mocks__/axios.js

## Sample Test

```
function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

describe("Filter function", () => {
  // test stuff
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output); // New test
  });
});
```

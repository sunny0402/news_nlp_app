## About

https://text-analysis-app.herokuapp.com/

Branch dedicated to the deploymnet of the App.

## Hosting: Heroku

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
https://devcenter.heroku.com/articles/getting-started-with-nodejs

Sample app which is ready to be deployed to heroku
https://github.com/heroku/node-js-getting-started

Deploying simple Node apps:
https://www.youtube.com/watch?v=MxfxiR8TVNU
https://www.youtube.com/watch?v=72DYDMP09MM
https://www.youtube.com/watch?v=xgvLP3f2Y7k

Deploying Webpack App:
https://www.youtube.com/watch?v=Ru3Rj_hM8bo&t=992s

```
heroku login
git status (if not git repo git init)
heroku git:remote -a name-of-app-on-heroku

//Procfile
web: index.js (same as running node index.js locally)

heroku create nameOfApp (will create link to application the other link is the git remote )

https://devcenter.heroku.com/articles/git#creating-a-heroku-remote
git add .
git commit -m "message"
git push heroku notMainBranch:main
git push heroku deployHeroku:main
```

```
//package.json

  "scripts": {
    "postinstall": "webpack --config webpack.prod.js",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack serve --config webpack.dev.js  --open"
  },
```

```
//webpack.prod.js
//https://webpack.js.org/plugins/define-plugin/
//The DefinePlugin allows you to create global constants which can be configured at compile time.

new webpack.DefinePlugin({
      "process.env": {
        PORT: '"3000"',
      },
```

```
//index.js
const my_key = process.env.API_KEY;

app.use(express.static("dist"));

const server = app.listen(process.env.PORT || port, listening);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});
```

```
//Procfile
web: node src/server/index.js
```

Also make paths to server relative. So any client side JavaScript has relative paths to server.
Not "http://localhost:3000/dataReq" BUT "/dataReq".

API key set via: heroku config:get my_key

## Debug Deploymen

heroku logs --tail

## Enviroment Variables Heroku

https://devcenter.heroku.com/articles/config-vars
heroku config
heroku config:set API_KEY=
heroku config:get my_key

Access enviroment variables in code: process.env.my_key

# Setup Notes:

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
npm run build-dev -> dev server up on 8080
npm start -> express server up on 3030
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

## Puppeteer

https://github.com/smooth-code/jest-puppeteer
https://github.com/smooth-code/jest-puppeteer/blob/master/packages/expect-puppeteer/README.md#api
https://jestjs.io/docs/configuration

Error: Puppeteer cannot find selector on page
https://stackoverflow.com/questions/50588874/puppeteer-cant-find-selector
WHen launch dev enviroment (npm run build-dev) the page is displayed within an iframe

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

## Service Workers

https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0

```
npm install workbox-webpack-plugin --save-dev

//webpack.prod.js
const WorkboxPlugin = require('workbox-webpack-plugin');
new WorkboxPlugin.GenerateSW()

//register service worker
//add script to views/index.html above closing body tag

```

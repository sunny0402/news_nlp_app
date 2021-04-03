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

## Enviroment Variables

```
npm install dotenv

```

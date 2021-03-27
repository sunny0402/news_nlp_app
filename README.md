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

## NLP Notes

https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_word_sense_disambiguation.htm
WSD (word-sense disambiguation): which meaning of word is activated by the use of word in a particular context

Lexical ambiguity, syntactic, semantic

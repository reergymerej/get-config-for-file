ESLint's [getConfigForFile][1] can't find eslint-config-airbnb config.

**setup**  
1. clone and `npm i`
1. install eslint-config-airbnb globally
```sh
npm i -g eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
```
1. verify eslint-config-airbnb is there  
```sh  
$ npm ls -g eslint-config-airbnb
/Users/jeremy.greer/.nvm/versions/node/v5.9.1/lib
└── eslint-config-airbnb@9.0.1
```

**run**  
```sh
node ./index.js
```
    unable to get config
    Error: Cannot find module 'eslint-config-airbnb'

:(


**it works if it's local**
```sh
npm i --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint

node ./index.js
```

    hooray!

[1]: http://eslint.org/docs/developer-guide/nodejs-api#getconfigforfile

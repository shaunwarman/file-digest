# file-digest

[![build status](https://img.shields.io/travis/shaunwarman/digest-file.svg)](https://travis-ci.com/shaunwarman/digest-file)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/digest-file.svg)](https://codecov.io/gh/shaunwarman/digest-file)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/digest-file.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/digest-file.svg)](https://npm.im/digest-file)

> A simple file hasher

## Table of Contents
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)

## Install

[npm][]:

```sh
npm install file-digest
```

[yarn][]:

```sh
yarn add file-digest
```


## Usage

```js
const digest = require('file-digest');

console.log(digest(filepath, 'md5'));

> a4df7e1b8482e101323544dbaf874ea
```


## Contributors
| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <http://shaunwarman.com>  |

## License
[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)

##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

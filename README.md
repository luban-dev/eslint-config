# Lu Ban Eslint Config

- extends from [@antfu/eslint-config](https://github.com/antfu/eslint-config);

## Install

```sh
npm i -D eslint @luban-ui/eslint-config
```

## Create config file

With ["type": "module"](https://nodejs.org/api/packages.html#type) in package.json (recommended):

```js
// eslint.config.js
import luban from '@luban-ui/eslint-config';

export default luban();
```

With CJS:

```js
// eslint.config.js
const luban = require('@luban-ui/eslint-config').default;

module.exports = luban();
```

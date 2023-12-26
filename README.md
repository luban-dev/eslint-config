# Lu Ban Eslint Config

- extends from [@antfu/eslint-config](https://github.com/antfu/eslint-config);

## Install

```sh
npm i -D eslint @types/eslint @luban-ui/eslint-config
```

## Create config file

With ["type": "module"](https://nodejs.org/api/packages.html#type) in package.json (recommended):

```js
// eslint.config.js
import luban from '@luban-ui/eslint-config';

export default luban(
  // Configures for antfu's config
  {
    vue: {
      // ...
    }
  },

  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts'],
    rules: {}
  },
  {
    rules: {}
  }
);
```

With CJS:

```js
// eslint.config.js
const luban = require('@luban-ui/eslint-config').default;

module.exports = luban();
```

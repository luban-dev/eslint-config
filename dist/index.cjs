const antfu = require('@antfu/eslint-config').default;

module.exports = (options = {}) => {
  return antfu(
    {
      stylistic: {
        semi: 'always'
      }
    },
    {
      rules: {
        'style/comma-dangle': ['warn', 'never'],
        'style/quote-props': ['error', 'as-needed']
      }
    },
    {
      ...options
    }
  );
};

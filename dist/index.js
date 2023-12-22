import antfu from '@antfu/eslint-config';

export default function luban(options = {}) {
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
}

import antfu from '@antfu/eslint-config';

type Options = Parameters<typeof antfu>[0];

export default function luban(options: Options = {}) {
  return antfu(
    {
      rules: {
        'style/semi': ['warn', 'always'],
        'style/comma-dangle': ['warn', 'never'],
        'style/quote-props': ['error', 'as-needed']
      }
    },
    {
      ...options
    }
  );
}

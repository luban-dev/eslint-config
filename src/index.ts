import antfu from '@antfu/eslint-config';

type AntfuArguments = Parameters<typeof antfu>;
type RestArguments = AntfuArguments[1][];

interface Alias {
  map: string[][];
  extensions: string[];
}

type Options = AntfuArguments[0] & {
  alias?: Alias;
};

export default function luban(options?: Options, ...userConfigs: RestArguments) {
  const {
    alias = {
      map: [
        ['@', './src']
      ],
      extensions: ['.ts', '.js', '.jsx', 'tsx', '.vue', '.json']
    },
    ...rest
  } = options || {};

  return antfu(
    {
      ...rest
    },
    {
      settings: {
        'import/no-unresolved': {
          caseSensitive: true
        },
        'import/extensions': [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.vue'
        ],
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx'],
          '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
          alias,
          node: true
        }
      }
    },
    {
      rules: {
        'style/semi': ['warn', 'always'],
        'style/comma-dangle': ['warn', 'never'],
        'style/quote-props': ['warn', 'as-needed'],
        'style/member-delimiter-style': ['warn', {
          multiline: {
            delimiter: 'semi'
          }
        }],
        'style/brace-style': ['warn', '1tbs'],
        'antfu/top-level-function': 'off',
        'no-console': 'off',
        curly: 'off'
      }
    },
    {
      files: [
        '**/*.js'
      ],
      rules: {
        // import
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/no-duplicates': 'warn'
      }
    },
    {
      files: [
        '*.md/**/*.{js,ts,jsx,tsx,vue}'
      ],
      rules: {
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/export': 'off',
        'import/no-duplicates': 'off'
      }
    },
    {
      ignores: [
        '**/package-lock.json'
      ]
    },
    ...userConfigs
  );
}

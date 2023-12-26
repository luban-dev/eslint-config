import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config';
import antfu from '@antfu/eslint-config';

interface Alias {
  map: string[][];
  extensions: string[];
}

interface Options extends OptionsConfig, FlatConfigItem {
  alias?: Alias;
};

export default function luban(options: Options = {}, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]) {
  const {
    alias = {
      map: [
        ['@', './src']
      ],
      extensions: ['.ts', '.js', '.jsx', 'tsx', '.vue', '.json']
    },
    ...rest
  } = options;

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
          alias
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
        'antfu/top-level-function': 'off'
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
      ignores: [
        '**/*.d.ts',
        '**/package-lock.json'
      ]
    },
    ...userConfigs
  );
}

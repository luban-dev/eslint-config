import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config';
import antfu from '@antfu/eslint-config';

interface Options extends OptionsConfig, FlatConfigItem {
  //
};

export default function luban(options: Options = {}, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]) {
  const { ...rest } = options;

  return antfu(
    {
      ...rest
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
    ...userConfigs
  );
}

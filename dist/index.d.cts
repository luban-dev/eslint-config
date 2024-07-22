import * as eslint_flat_config_utils from 'eslint-flat-config-utils';
import * as _antfu_eslint_config from '@antfu/eslint-config';
import _antfu_eslint_config__default from '@antfu/eslint-config';

type AntfuArguments = Parameters<typeof _antfu_eslint_config__default>;
type RestArguments = AntfuArguments[1][];
interface Alias {
    map: string[][];
    extensions: string[];
}
type Options = AntfuArguments[0] & {
    alias?: Alias;
};
declare function luban(options?: Options, ...userConfigs: RestArguments): eslint_flat_config_utils.FlatConfigComposer<_antfu_eslint_config.TypedFlatConfigItem, _antfu_eslint_config.ConfigNames>;

export { luban as default };

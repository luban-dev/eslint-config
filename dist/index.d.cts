import { Awaitable, UserConfigItem, OptionsConfig, FlatConfigItem } from '@antfu/eslint-config';

interface Options extends OptionsConfig, FlatConfigItem {
}
declare function luban(options?: Options, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<any[]>;

export { luban as default };

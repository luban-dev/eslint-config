import { Awaitable, UserConfigItem, OptionsConfig, FlatConfigItem } from '@antfu/eslint-config';

interface Alias {
    map: string[][];
    extensions: string[];
}
interface Options extends OptionsConfig, FlatConfigItem {
    alias?: Alias;
}
declare function luban(options?: Options, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]>;

export { luban as default };

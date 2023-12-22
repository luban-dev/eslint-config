import antfu from '@antfu/eslint-config'

type Options = Parameters<typeof antfu>[0];

declare function luban(options?: Options): ReturnType<antfu>;

export default luban;
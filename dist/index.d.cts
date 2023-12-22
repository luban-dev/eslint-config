import antfu from '@antfu/eslint-config';

type Options = Parameters<typeof antfu>[0];
declare function luban(options?: Options): Promise<any[]>;

export { luban as default };

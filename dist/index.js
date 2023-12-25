// src/index.ts
import antfu from "@antfu/eslint-config";
function luban(options = {}, ...userConfigs) {
  const { ...rest } = options;
  return antfu(
    {
      ...rest
    },
    {
      rules: {
        "style/semi": ["warn", "always"],
        "style/comma-dangle": ["warn", "never"],
        "style/quote-props": ["warn", "as-needed"],
        "style/member-delimiter-style": ["warn", {
          multiline: {
            delimiter: "semi"
          }
        }]
      }
    },
    ...userConfigs
  );
}
export {
  luban as default
};

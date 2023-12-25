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
        }],
        "antfu/top-level-function": "off"
      }
    },
    {
      ignores: [
        "**/*.d.ts",
        "**/package-lock.json"
      ]
    },
    ...userConfigs
  );
}
export {
  luban as default
};

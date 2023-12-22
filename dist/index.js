// src/index.ts
import antfu from "@antfu/eslint-config";
function luban(options = {}) {
  return antfu(
    {
      rules: {
        "style/semi": ["warn", "always"],
        "style/comma-dangle": ["warn", "never"],
        "style/quote-props": ["error", "as-needed"]
      }
    },
    {
      ...options
    }
  );
}
export {
  luban as default
};

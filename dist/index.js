// src/index.ts
import antfu from "@antfu/eslint-config";
function luban(options = {}, ...userConfigs) {
  const {
    alias = {
      map: [
        ["@", "./src"]
      ],
      extensions: [".ts", ".js", ".jsx", "tsx", ".vue", ".json"]
    },
    ...rest
  } = options;
  return antfu(
    {
      ...rest
    },
    {
      settings: {
        "import/no-unresolved": {
          caseSensitive: true
        },
        "import/extensions": [
          ".js",
          ".ts",
          ".jsx",
          ".tsx",
          ".vue"
        ],
        "import/parsers": {
          espree: [".js", ".cjs", ".mjs", ".jsx"],
          "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
          alias,
          node: true
        }
      }
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
        "antfu/top-level-function": "off",
        curly: "off"
      }
    },
    {
      files: [
        "**/*.js"
      ],
      rules: {
        // import
        "import/no-unresolved": "error",
        "import/named": "error",
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error",
        "import/no-duplicates": "warn"
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

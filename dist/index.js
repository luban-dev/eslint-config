// src/index.ts
import process from "process";
import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
var compat = new FlatCompat();
function luban(options = {}, ...userConfigs) {
  const isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE || process.env.VIM) && !process.env.CI);
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
        "style/brace-style": ["warn", "1tbs"],
        "antfu/top-level-function": "off",
        "no-console": "off",
        curly: "off"
      }
    },
    // disable auto fix
    compat.plugins("disable-autofix"),
    {
      rules: {
        ...isInEditor ? {
          "disable-autofix/unused-imports/no-unused-imports": "warn"
        } : {
          "unused-imports/no-unused-imports": "warn"
        }
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
      files: [
        "*.md/**/*.{js,ts,jsx,tsx,vue}"
      ],
      rules: {
        "import/no-unresolved": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/export": "off",
        "import/no-duplicates": "off"
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

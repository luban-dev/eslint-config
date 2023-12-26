"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => luban
});
module.exports = __toCommonJS(src_exports);
var import_node_process = __toESM(require("process"), 1);
var import_eslint_config = __toESM(require("@antfu/eslint-config"), 1);
var import_eslintrc = require("@eslint/eslintrc");
var compat = new import_eslintrc.FlatCompat();
function luban(options = {}, ...userConfigs) {
  const isInEditor = !!((import_node_process.default.env.VSCODE_PID || import_node_process.default.env.JETBRAINS_IDE || import_node_process.default.env.VIM) && !import_node_process.default.env.CI);
  const {
    alias = {
      map: [
        ["@", "./src"]
      ],
      extensions: [".ts", ".js", ".jsx", "tsx", ".vue", ".json"]
    },
    ...rest
  } = options;
  return (0, import_eslint_config.default)(
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
      ignores: [
        "**/*.d.ts",
        "**/package-lock.json"
      ]
    },
    ...userConfigs
  );
}

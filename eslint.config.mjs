import globals from "globals";
import pluginJs from "@eslint/js";
import { p5globals, implicit } from "@chaitanyathakur/eslint-plugin-p5js";

export default [
  {
    files: ["**/*.js"],
    ignores: ["./docs/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...p5globals,
        hljs: "readonly",
        jsyaml: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: implicit }],
    },
  },
  pluginJs.configs.recommended,
];

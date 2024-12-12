import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const EXTENSION_PATTERNS = {
  JS: ["js"].map((ext) => `**/*.${ext}`),
  TS: ["ts"].map((ext) => `**/*.${ext}`),
};

/** @type {import("typescript-eslint").Config} */
const config = [
  {
    ...eslint.configs.recommended,
    files: [...EXTENSION_PATTERNS.JS, ...EXTENSION_PATTERNS.TS],
  },
  ...tseslint.configs.recommendedTypeChecked.map((config) => {
    return {
      ...config,
      files: [EXTENSION_PATTERNS.TS],
    };
  }),
  {
    files: [...EXTENSION_PATTERNS.TS],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default config;

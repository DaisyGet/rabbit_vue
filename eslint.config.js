import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default defineConfig([
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"],
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  // 新增：自定义规则，禁用组件命名强制多单词要求
  {
    rules: {
      // 禁用 "组件名必须是多个单词" 的强制规则
      "vue/multi-word-component-names": "off",
      // 如果你只是想放宽要求（不是完全禁用），也可以用以下配置：
      // 'vue/multi-word-component-names': ['warn', {
      //   ignores: ['Index', 'Home', 'App'] // 指定允许单单词的组件名
      // }]
    },
  },
]);

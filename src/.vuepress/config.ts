import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Halo-Theme-Hao-Docs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Halo-Theme-Hao",
      description: "Halo-Theme-Hao 的主题文档",
    },
  },

  theme,

  shouldPrefetch: false,
});

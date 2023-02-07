import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "使用教程",
    icon: "note",
    link: "/tutorial/"
  },
  {
    text: "开发文档",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "666",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "777",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "常见问题",
    icon: "note",
    link: "/666/",
  },
]);

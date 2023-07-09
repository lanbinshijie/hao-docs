import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: "Hao-Docs",
  description: "一款精美的 Halo2.x 主题",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lang: "zh-CN",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "程序员小航",
    authorAvatar: "/logo.png",
    lastUpdatedText: "最后更新时间",
    series: {
      "/docs/guide/": [
        {
          text: "开始",
          children: ["introduction","install"],
          collapsible: false
        },
        {
          text: "主题配置",
          children: ["basics","nav","top","layout","sidebar","footer","article","categories","moment","link","fcircle","about","aboutReward","comments","style","tools","other"],
          collapsible: false
        }
      ],
      "/docs/dev/": [
        {
          text: "开始",
          children: ["dev"],
        },
      ],
    },
    navbar: [
      { text: "首页", icon: 'Home', link: "/index.html" },
      { text: "使用文档", icon: 'Document', link: "/docs/guide/introduction" },
      { text: "开发文档", icon: 'Code', link: "/docs/dev/dev" },
      { text: "常见问题", icon: 'Help', link: "/docs/others/question" },
      { text: "留言反馈", icon: 'Chat', link: "/docs/others/comments" },
      { text: "站点示例", icon: 'Events', link: "/docs/others/examples" },
    ],
    bulletin: {
      body: [
        {
          type: "title",
          content: `🎉欢迎大家使用 Hao 主题🎉`,
          style: "font-size: 14px;",
        },
        {
          type: "hr",
        },
        {
          type: "text",
          content: `想了解更多信息可以关注微信公众号 「 程序员小航 」。<br><br>发送 "hao群" 可以加群 （群验证信息最好是个人网站）<br><br>发送"加好友"，可以加我微信，我拉你进群 （群二维码失效时）`,
          style: "font-size: 13px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'sun0225SUN/hao-docs',
        repoId: 'R_kgDOI66UKw',
        category: 'Q&A',
        categoryId: 'DIC_kwDOI66UK84CWgyk',
        mapping: 'title',
      },
    },
  }),
  // 图片路径别名
  alias: {
    '@': path.resolve(__dirname, './public/assets/images'),
  },
  // debug: true,
});

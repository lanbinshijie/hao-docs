export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$usyDD.Bgy7b7MNJ.ZjNCDOI9IvMnr2FaDuJ6UJ0bYg18yLtdjXyae\"],\"/zh/demo/encrypt.html\":[\"$2a$10$qMjnTPOn/huE2Ahrcw9NTOIA.cRwqpxRozwE0G3mMoH3a94TsPdqW\"]}},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Mr.Hope\",\"url\":\"https://mrhope.site\"},\"logo\":\"/logo.png\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"demo/theme-docs/src\",\"navbar\":[\"/\",{\"text\":\"使用教程\",\"icon\":\"note\",\"link\":\"/tutorial/\"},{\"text\":\"Guide\",\"icon\":\"creative\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"Bar\",\"icon\":\"creative\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]},{\"text\":\"Foo\",\"icon\":\"config\",\"prefix\":\"foo/\",\"children\":[\"ray\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]}]},{\"text\":\"V2 Docs\",\"icon\":\"\",\"link\":\"https://theme-hope.vuejs.press/\"}],\"sidebar\":{\"/\":[\"\",{\"icon\":\"discover\",\"text\":\"Demo\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"Docs\",\"icon\":\"note\",\"prefix\":\"guide/\",\"children\":\"structure\"},\"slides\"]},\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

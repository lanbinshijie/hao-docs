---
title: 评论
date: 2023/07/05
---
# 安装
安装对应[评论](https://github.com/halo-sigs/plugin-comment-widget)插件即可
## 默认评论
安装插件基本上就支持了，后台显示如下
![Snipaste_2023-07-07_09-41-58.png](https://shyblog.oss-cn-beijing.aliyuncs.com/img/Snipaste_2023-07-07_09-41-58.png)
## twikoo评论
### 主题设置
![主题设置](https://shyblog.oss-cn-beijing.aliyuncs.com/img/%E4%B8%BB%E9%A2%98%E8%AE%BE%E7%BD%AE.png)
首先就是打开tuikoo评论，评论选择twikoo，然后按照[Twikoo 文档](https://twikoo.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2)配置好vercel，我这里使用的是vercel，因为腾讯云云函数现在是要收费的
> 实在不会的，也可以参考这个[视频](https://www.bilibili.com/video/BV1Fh411e7ZH/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=4c59531496f49b45d7abd87d9ea8318f)，最后还是有问题的话，可以在文章下面提出问题，我看情况回答吧。

#### 环境id
之后在vercel生成的域名
![环境id](https://shyblog.oss-cn-beijing.aliyuncs.com/img/%E7%8E%AF%E5%A2%83id.png)
> 默认生成的这个域名有些问题，就是只能外网评论，估计是dns被污染了，需要自己搞一个二级域名，我试了下没搞明白，搞明白的麻烦写篇文章，我来学习一下。
#### Twikoo评论-token
在配置完环境id之后，点击保存之后，就可以来搞这个token了。

进入到主页当中f12看到第一个环境id之后就可以看到token了，直接复制过来即可，注意格式
![token截图.png](https://shyblog.oss-cn-beijing.aliyuncs.com/img/token%E6%88%AA%E5%9B%BE.png)
> 据开发这个的小伙伴说 这个token是为了那个右下角会弹出的弹幕评论来使用的
#### Twikoo评论-mailMd5
其实就是直接将你的邮箱账号转为 MD5 编码的就可以了
> 这个的作用是判断是不是博主邮箱的


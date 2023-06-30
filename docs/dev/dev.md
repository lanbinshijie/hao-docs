---
title: 开发
date: 2023/06/28
---
# 环境搭建
## 部署 Halo2.0
使用 [Docker](https://docs.halo.run/2.7.0-SNAPSHOT/getting-started/install/docker/) 部署
参考相关文档，在本地部署 Halo2.0，主题目录在 ~/halo-next 下。
本地启动需要添加配置以下配置：
-e SPRING_THYMELEAF_CACHE=FALSE  关闭缓存（可以实时看到效果）
-e SPRING_PROFILES_ACTIVE=dev 指定环境，可以看 swagger-ui 文档
> 上面两个配置在下面docker 命令中已经有，直接执行即可
> 
- 访问地址：http://localhost:8090
- 后台地址：http://localhost:8090/console
- 文档地址：http://localhost:8090/swagger-ui.html

> Windows系统：执行下面docker的命令的前提是  安装了windows子系统，使用的是wsl2，并且已安装了windows系统的docker 客户端，配置了相关配置。
windows系统的客户端配置了相关配置之后，就可以在windows子系统的linux系统直接使用docker了
windows子系统最好在微软商店安装

```shell
docker run \
-it -d \
--name halo \
-p 8090:8090 \
-v ~/.halo2:/root/.halo2 \
halohub/halo:2.6.1 \
--halo.external-url=http://localhost:8090/ \
--halo.security.initializer.superadminuser=admin \
--halo.security.initializer.superadminpassword=P@88w0rd  \
--SPRING_THYMELEAF_CACHE=FALSE
```
> windows 电脑下cmd无法识别 \ ，所以需要在wsl2窗口下执行
启动完docker以后就可以访问上面后台地址了，账号默认为  admin  密码为 P@88w0rd

## 热部署
下载halo-theme-hao主题
### 方式一

压缩为 zip 包，然后在 halo console 控制台上传主题，此时可以在 halo 的主题路径下看到刚才上传的主题，名称为 theme-hao。

halo 的主题路径：
1. mac 默认在 ~/halo-next/theme
2. windows 默认在 wsl2 中

![](https://cdn.jsdelivr.net/gh/sun0225SUN/hao-docs/assets/images/mac.png)
![](https://cdn.jsdelivr.net/gh/sun0225SUN/hao-docs/assets/images/win.png)

可以通过 IDEA 或者 vscode 直接打开主题文件夹，进行操作开发，这里会实时生效。
windows系统推荐使用vscode打开，因为IDEA目前对于wsl2的支持并不好

### 方式二
1. 直接执行以下命令
   推荐使用ssh的方式连接github，然后再拉取代码
```shell
   cd ~/.halo2
   mkdir -p themes/theme-hao
   cd themes/theme-hao
   git init
   touch test
   git add .
   git commit -m "test"
   rm -rf test
   git checkout -b main
   git remote add origin git@github.com:liuzhihang/halo-theme-hao.git
   git fetch --all &&  git reset --hard origin/main && git pull
```
2. git pull 代码。此时打开 console 控制台是看不到这个主题的，（halo
   后面会添加扫描主题功能）
3. 通过 http 接口，将 theme.yaml 的配置提交，接口可以参考 swagger-ui
4. 可以参考 http/theme.http 内的脚本

> windows系统目录是在 wsl2 里面的  /home/用户/halo-next
上面命令包括了 下面的步骤2






# 如何动态更新配置
![](https://cdn.jsdelivr.net/gh/sun0225SUN/hao-docs/assets/images/dynamic.png)
# 参考主题
> 可以参考相关主题的用法
- Halo 官方默认主题：https://github.com/halo-sigs/theme-default
- Hexo-Butterfly 主题：https://github.com/jerryc127/hexo-theme-butterfly

# 前端监控日志sentry搭建
从sentry官网可以找到[安装文档](https://develop.sentry.dev/self-hosted/#requirements)<br>
安装前需检查是否满足安装的必要条件，我是在CentOS 7上安装，硬件配置都满足要求，按照要求，需要先安装docker和docker-compose。

## 安装docker
[参考链接：](https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/centos/)
```sh
# 1. 移除旧版本
$ sudo yum remove docker \
                  docker-common \
                  docker-selinux \
                  docker-engine
 
# 2. 安装依赖的工具
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
 
# 3. 设置稳定版仓库
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
 
# 4. 安装docker
$ sudo yum install docker-ce
 
# 在生产环境中，应该安装指定版本的docker，而不是一直使用最新的版本
# 通过以下命令查看可用版本列表：
# yum list docker-ce --showduplicates | sort -r
# 指定版本安装
# sudo yum install <FULLY-QUALIFIED-PACKAGE-NAME>
# 例如 docker-ce-17.06.1.ce
 
# 5. 启动docker
$ sudo systemctl start docker
 
# 6. 验证docker是否启动
$ sudo docker run hello-world
```
## 安装sentry
有了docker和docker-compose之后，就可以一键安装sentry服务啦。
```sh
# 1. 克隆代码到本地
$ git clone https://github.com/getsentry/onpremise.git
 
# 2. 安装
# 安装过程中会提示是否创建管理员账号，是则输入管理员账号的邮箱和密码
$ cd ./onpremise
$ ./install.sh
 
# 3. 启动sentry
$ docker-compose up -d
```
执行`docker-compose ps`查看已启动的服务状态<br>
访问`ip:9000`打开sentry的页面，初次打开时会进行一些初始化配置，比如通知邮件之类的，这里由于当时太激动，没截到图，所以我们后续在配置文件中写入。

## 配置错误上报
初始化完成后，sentry有一个默认新建的项目，跟随指引很快就能完成客户端的安装，测试了。

## 配置邮件通知
进入./onprimise/sentry目录<br>
编辑./requirements.txt文件，添加邮件ssl支持
```sh
# Add plugins here
django-smtp-ssl~=1.0
redis-py-cluster==1.3.4
```
然后编辑`config.yml`文件，设置邮箱地址和密码：
```sh
###############
# Mail Server #
###############
 
mail.backend: 'django_smtp_ssl.SSLEmailBackend'  # Use dummy if you want to disable email entirely
mail.host: 'smtp.mxhichina.com' # 阿里企业邮箱smtp服务地址
mail.port: 465 # smtp ssl 端口
mail.username: 'your_email@example.com'
mail.password: 'your_email_password'
mail.use-tls: true
# The email address to send on behalf of
mail.from: 'your_email@example.com'
```
## 配置钉钉通知

## 使用 sentry-cli 上传 source map 文件
sentry-cli是sentry提供的一个命令行工具，主要用于和sentry服务端交互。通过npm install @sentry/cli —dev安装在项目内，方便打包后使用。<br>
配置sentry-cli，新建一个.sentryclirc文件在项目根目录，sentry-cli默认会读取此文件的配置。
```sh
# .sentryclirc
[auth]
token=yourAccountApiToken
 
[defaults]
org=organizationName # 指定此项目在sentry中的组织
url=sentryHostUrl    # 例如 https://sentry.example.com/
project=projectName  # 指定此项目在sentry中的项目名称，例如 awesome-project
```
token是由个人账户生成的，使用管理员登录sentry后在API keys生成。<br>
注意生成token时必须要有proejct:write权限，否则不能上传文件。<br>
配置完成后，创建一个脚本文件./scripts/sentry，执行上传流程（假设我们已经完成了打包，生成了一堆.js和.map文件）
```sh
# ./scripts/sentry
 
# 自定义 release 名称，例如 v1.0.1-env，注意名称不能重复
version=xxx
 
# 设置要上传的目录
dist='./dist'
 
# JS在线上的路径
# 例如线上地址为 https://cdn.example.com/dist/js/main.csd908s.js，则需要配置为 ~/dist/js
urlPrefix='~/dist/js'
 
# 设置 sentry-cli 的 log 等级
# export SENTRY_LOG_LEVEL='debug' # info | debug
 
# 新建一个 release
sentry-cli releases new $version
 
# 上传 source-map 文件
sentry-cli releases files $version upload-sourcemaps $dist --url-prefix $urlPrefix --rewrite --ignore *.css.map
   
# release 新建成功后处于草稿(draft)状态，需要手动完结(finalize)它
sentry-cli releases finalize $version
```
最后执行`./scripts/sentry`脚本即可上传source-map文件啦
```sh
# 别忘了把脚本文件设置为可执行文件
$ sudo chmod +x ./scripts/sentry
```
`version`可在打包JS代码前就指定，这样可以通过环境变量注入到浏览器端sentry的初始化变量中。
```sh

# 在打包脚本中暴露 RELEASE_FOR_SENTRY BUILD_ENV
export RELEASE_FOR_SENTRY=v1.0.1
export BUILD_ENV=test
```
```js
// webpack.config.production.js
// 在webpack中使用插件传递环境变量
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    RELEASE_FOR_SENTRY: JSON.stringify(process.env.RELEASE_FOR_SENTRY),
    BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),
  },
})
```
```js
// App.js
// 在初始化sentry时，指定此次打包的版本以及对应的环境
Sentry.init({
  dsn: 'https://your-dsn-code@sentry.example.com//1',
  release: process.env.RELEASE_FOR_SENTRY,
  environment: process.env.BUILD_ENV,
});
```
完成环境和版本指定后，就可以清楚的区分不同环境和版本的错误了。<br>
在上传sourcemap文件过程中如果遇到上传失败的情况，服务端直接返回500错误，可能的原因之一是上传的文件过大，sentry默认的限制是20m，需要在./onpremise/sentry/sentry.config.py中增加设置项limit-post：
```sh
##############
# Web Server #
##############
 
SENTRY_WEB_HOST = "0.0.0.0"
SENTRY_WEB_PORT = 9000
SENTRY_WEB_OPTIONS = {
    "http": "%s:%s" % (SENTRY_WEB_HOST, SENTRY_WEB_PORT),
    "protocol": "uwsgi",
    # This is needed to prevent https://git.io/fj7Lw
    "uwsgi-socket": None,
    "http-keepalive": True,
    "memory-report": False,
    # 'workers': 3,  # the number of web workers
    "limit-post": 1024 * 1024 * 1024 * 2 # 设置最大post大小
}
```
设置完成后需要重新启动sentry容器。
## 错误手动上报
使用@sentry/browser的api进行手动错误上报，参考Capturing Events
```js
import * as Sentry from '@sentry/browser';
 
Sentry.captureMessage('Hello, world!');
Sentry.captureException(new Error('Good bye'));
Sentry.captureEvent({
  message: 'Manual',
  stacktrace: [
    // ...
  ],
});
```

## 清理数据
sentry运行一段时间后，不断积累的源码、sourcemap文件，和最主要的日志文件体积会变的很大，占满磁盘空间，定时清理过期的数据非常必要
```sh
# 查看 docker 进程，查找到 name 为 onpremise_worker_1 的容器
docker ps
 
# 拿到容器ID，以下命令进入到sentry，并执行清理操作
docker exec -it 1f916f730069 /bin/bash
sentry cleanup --help
sentry cleanup --days 7 # 只保留最近7天的数据
 
# 同理拿到name为 onpremise_postgres_1 的容器ID，进入数据库的docker
docker exec -it 176e1501e871 /bin/bash
vacuumdb -U postgres -d postgres -v -f --analyze
 
# 设置自动清理
# 使用 crontab 在linux实现定时任务
crontab -e
0 0 * * *  docker exec -it onpremise_web_1 sentry cleanup --days 7  && docker exec -it onpremise_postgres_1 vacuumdb -U postgres -d postgres -v -f --analyze
crontab -l
```


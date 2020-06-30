
## 关于本项目的线上部署

> nginx 多静态文件部署。
> 我个人博客项目占用了`nginx`根路径，而我只有一个域名，也不准备用二级域名了， 所以就直接用路径区分开。
> 一个域名，只部署一个静态文件服务，那很简单，只用把打包后文件放上去就行。
> 多个Vue项目主要就是路径问题，静态js文件以及自定义的路由。

#### 环境

- vue 2.6.11
- vue-router 3.3.1
- vue-cli 4.4.0

由于我用的vue-cli 4,所以项目根路径下默认没有 `vue.config.js`文件, 我在官网看到关于这个vue.config.js是这样描述的.

- 参考[官网说明](https://cli.vuejs.org/zh/config/)https://cli.vuejs.org/zh/config/:
>有些针对 @vue/cli 的全局配置，例如你惯用的包管理器和你本地保存的 preset，都保存在 home 目录下一个名叫 .vuerc 的 JSON 文件。你可以用编辑器直接编辑这个文件来更改已保存的选项。
 你也可以使用 vue config 命令来审查或修改全局的 CLI 配置

## 添加配置`vue.config.js` 文件  静态资源路由js,css等路径
但是 vue config 是全局的配置，我这个项目直接修改这里不合适，于是我就在项目 `根路径` 下自己手动添加了`vue.config.js`

```javascript

// 参考 https://cli.vuejs.org/zh/guide/deployment.html#github-pages
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/app/mall/'   // /app/mall/ 对应后面`nginx`路径，这里添加的目的是其他静态资源文件统一前缀路径
        : '/',
};
```
## 修改src/router/index.js, 项目页面跳转路由 

```javascript
const router = new VueRouter({
    base: '/app/mall',   // 主要添加这个 /app/mall 注意这个 和上面的一致，为nginx location路径， 也就是请求路径
    routes,
    mode: 'history'
});

```
## 修改 src/config/index.js  项目生产请求地址(非必要)
> 非必要，这个地方每个人封装的都不一样，默认会请求 部署的环境地址。

```javascript
export let appConfig = {
    development: 'http://127.0.0.1:8010',      // 本地开发 (ps:vue-cli会自动帮我们区分生产开发，npm run serve就是开发，
    production: 'https://www.your_domain.com',  // 生产地址 npm run build 默认为生产
};

```

> 然后 我是在src/utils/url.js 文件里面 区分前缀的， 最后在 src/utils/request.js 文件里面使用。

修改好之后，可以`npm run serve`看看，区分好之后能否正常访问，是否有改错。
没有改错可以直接`npm run build` 生成静态文件

## 上传静态文件
> 我是通过`FillZilla`上传静态资源文件

我是上传到服务器 `/data/mall/` 文件夹下， 记住这个文件路径, 后面nginx会指向这里。


## nginx 文件配置

> Centos7 nginx默认配置地址为 `/etc/nginx/nginx.conf`
或者有的版本默认引入 `/etc/nginx/conf.d/default.conf`文件 配置

```

server {

    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
        
    # ...
    location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
    }
    
    
    # 添加文件
    # /app/mall 项目访问路径和上面地址对应 
    location /app/mall/ {
        alias /data/mall/;   # 项目存放路径
        try_files $uri $uri/ /app/mall/index.html;  # 内部项目跳转路径
    }

}

```

检测配置是否有语法错误
```
nginx -t

```
重新加载配置
```
nginx -s reload

```

## 个人项目部署地址
项目进度
- 完成首页，分类页，购物车等页面，还差个人中心(2020/06/30)

https://www.charmcode.cn/app/mall/home

> PC端, Google浏览器需要F12 点击切换移动设备 






# Mall
> 练习Vue时写的移动端商城项目,目前已经部署到线上。

项目进度
- 完成首页，分类页，购物车等页面，还差个人中心(2020/06/30)

线上地址
https://www.charmcode.cn/app/mall/home

> PC端, Google浏览器需要F12 点击切换移动设备 


## 存在问题

> 这些问题，暂时先不解决，整体完成后在解决。

- 1 内容滚动不自然。
- 2 有时候，首次进入页面，不能滑动内容。(疑似没有重新计算内容高度)
- 3 没有记录滚动高度，切换分类时，滚动高度没有初始化。(应该单独记录每个分类的滚动高度)
- 4 没有Toast弹窗提示。(后续完善)
- 5 详情页，部分样式不完善。(不完善了)
- 6 由于数据问题，商品详情页goodsId只有 123, 456, 789三个可以传。
- 7 swiper 获取元素失败报错问题。(使用vue-awesome-swiper替换)

## 部署到线上 (同一个域名，部署多个Vue静态文件服务)

[地址](DEPLOYMENT.md) DEPLOYMENT.md 个人总结
 
#### Src文件目录
```

|____App.vue
|____config
| |____index.js               // 简单的自定义配置文件 比如请求的地址 生产和开发地址(ps:vue-cli会自动帮我们区分生产开发，npm run serve就是开发，build生产)
|____utils
| |____request.js             // 封装的 axios服务
| |____public.js
| |____url.js                 // 在这里读取区分 开发生产的根路径
|____main.js
|____components               // 全局组件
| |____content                // 只能本项目通用的全局组件
| | |____tabControl
| | | |____TabControl.vue
| | |____mainTabbar
| | | |____MainTabBar.vue
| | |____backTop
| | | |____BackTop.vue
| |____HelloWorld.vue
| |____common                 // 其他地方也能用的全局组件
| | |____navbar
| | | |____NavBar.vue
| | |____swiper
| | | |____Swiper.vue
| | | |____SwiperItem.vue
| | | |____index.js
| | |____scroll
| | | |____scroll.vue
| | |____tabbar
| | | |____TabBarItem.vue
| | | |____TabBar.vue
|____common                  
| |____mixin.js
|____api                      // 配合axios 区分的各模块路由
| |____index.js
| |____home.js
| |____category.js
| |____detail.js
|____views                   // 各模块页面
| |____demo
| | |____Demo.vue
| | |____childComps
| |____home
| | |____Home.vue
| | |____childComps
| | | |____FeatureView.vue
| | | |____HomeSwiper.vue
| | | |____GoodListItem.vue
| | | |____RecommendView.vue
| | | |____GoodsLIst.vue
| |____category
| | |____Category.vue
| | |____childComps
| | | |____LeftBar.vue
| | | |____GoodListItem.vue
| | | |____GoodsLIst.vue
| | | |____TabBar.vue
| |____shopcart
| | |____childComps
| | | |____DelBottomBar.vue
| | | |____ShopListItem.vue
| | | |____SettleBottomBar.vue
| | |____ShopCart.vue
| |____detail
| | |____Detail.vue
| | |____childComps
| | | |____DetailSwiper.vue
| | | |____GoodsDisplay.vue
| | | |____GoodsStyleInfo.vue
| | | |____LogisticsInfo.vue
| | | |____DiscountInfo.vue
| | | |____BottomBar.vue
| | | |____CommentInfo.vue
| | | |____BaseInfo.vue
| | | |____SaleInfo.vue
| | | |____ShopInfo.vue
| | | |____DetailTabBar.vue
| |____profile
| | |____Profile.vue
|____assets
| |____css
| | |____reset.less
| | |____normalize.css
| | |____base.css
| |____img
| | |____tabbar
| | | |____home.svg
| | | |____profile_active.svg
| | | |____home_active.svg
| | | |____category.svg
| | | |____category_active.svg
| | | |____shopcart.svg
| | | |____shopcart_active.svg
| | | |____profile.svg
| | |____common
| | | |____yes.svg
| | | |____shop.svg
| | | |____check.svg
| | | |____back.svg
| | | |____cust.svg
| | | |____top.svg
| | | |____heart.svg
| |____logo.png
|____store
| |____index.js
|____router                        // vue-router 本地路由文件
| |____index.js                    

```











## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

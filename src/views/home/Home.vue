<template>
    <div id="home">
        <nav-bar class="nav-bar">
            <div slot="center" class="nav-bar-text">购物街</div>
        </nav-bar>

        <tab-control v-show="isTabFixed"
                     class="fixed"
                     @tabChange="tabChange"
                     ref="fixedTab"
                     :tabItems="tabItems"/>

        <scroll class="wrapper"
                ref="scroll"
                @scroll="scrollPosition"
                @pullingUp="loadMore"
                :data="tabGoodsList"
                :pull-up-load="true"
                :probe-type="3"
        >
            <div>
                <!-- 轮播图 -->
                <!--<home-swiper :banners="banners"/>-->
                <swiper-view :banners="banners"/>

                <feature-view :features="features"/>

                <recommend-view :recommends="recommends"/>

                <tab-control ref="tabControl"
                             :tabItems="tabItems"
                             @tabChange="tabChange"
                />

                <goods-list :tabGoods="tabGoodsList[tabIndex]"/>

            </div>
        </scroll>

        <!--监听组件事件 必须得用.native-->
        <back-top @click.native="BtnTop" v-show="isShowBackTop"/>

    </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'
    // import HomeSwiper from './childComps/HomeSwiper'
    import SwiperView from './childComps/SwiperView'
    import FeatureView from './childComps/FeatureView'
    import RecommendView from './childComps/RecommendView'
    import TabControl from '@/components/content/tabControl/TabControl'
    import GoodsList from './childComps/GoodsLIst'

    import scroll from '@/components/common/scroll/scroll'
    import BackTop from '@/components/content/backTop/BackTop'

    import api from '@/api'

    export default {
        name: 'Home',
        data() {
            return {
                banners: [],
                features: [],
                recommends: [],
                tabItems: [],
                tabGoodsList: [],
                // 默认tabIndex
                tabIndex: 0,
                scroll: null,
                isShowBackTop: false,
                isTabFixed: false,
            }

        },
        methods: {
            //
            BtnTop() {
                // 通过ref 获取到自组件对象 访问自组件的scrollTo方法 回到顶部   500毫秒延迟
                this.$refs.scroll.scrollTo(0, 0, 500)
            },
            // 滑动事件回调监听
            scrollPosition(pos) {
                // window.console.log(-pos.y);
                // 1 简写 判断是否显示返回顶部按钮
                this.isShowBackTop = pos.y < -900;

                // 2 获取 tabControl 到顶的高度
                this.isTabFixed = -pos.y >= this.$refs.tabControl.$el.offsetTop;
            },
            // tab-control切换事件回调
            tabChange(index) {
                // 接受当前tab control 切换goodsList
                this.tabIndex = index;
                // 统一两个子组件的下角标变量
                this.$refs.tabControl.currentIndex = index;  // 滚动的tab
                this.$refs.fixedTab.currentIndex = index;    // 固定的tab

            },
            // 滑动加载更多回调
            loadMore() {
                window.console.log("上拉加载更多....", this.tabGoodsList[this.tabIndex].tabName);
                // 必须得回调 finishPullUp方法才能下次加载更多
                this.loadGoodsList();
                // 所有图片加一个加载完成事件(事件总线), 然后防抖处理 加载完图片后 重新计算高度 注意防抖处理
                // this.$refs.scroll.refresh()
            },
            // 加载首页banners
            loadBanners() {
                api.home.GetBanner().then(({data}) => {
                    this.banners = data;
                }).catch(({error}) => {
                    window.console.log(error);
                });
            },
            // 加载首页Features信息
            loadFeatures() {
                api.home.GetFeatures().then(({data}) => {
                    this.features = data;
                }).catch(({error}) => {
                    window.console.log(error);
                });
            },
            // 加载首页recommends信息
            loadRecommends() {
                api.home.GetRecommends().then(({data}) => {
                    this.recommends = data;
                }).catch(({error}) => {
                    window.console.log(error);
                });
            },
            // 加载首页Tab信息
            loadTab() {
                api.home.GetTab().then(({data}) => {
                    this.tabItems = data;
                }).catch(({error}) => {
                    window.console.log(error);
                });
            },
            // 加载首页Tab信息
            loadGoods() {
                api.home.GetGoods().then(({data}) => {
                    this.tabGoodsList = data;
                }).catch(({error}) => {
                    window.console.log(error);
                });
            },
            // 记载更多分类
            loadGoodsList(){

                let tabId = this.tabGoodsList[this.tabIndex].tabId;
                let page = this.tabGoodsList[this.tabIndex].page + 1;
                api.home.GetGoods({tabId, page}).then(({data}) => {
                    window.console.log(data);
                    // 把新增数据合并到源tab数组
                    this.tabGoodsList[this.tabIndex].item.push.apply(this.tabGoodsList[this.tabIndex].item, data.item)
                    // this.tabGoodsList = data;
                    // this.tabGoodsList[this.tabIndex]
                    this.tabGoodsList[this.tabIndex].page += 1;

                    this.$refs.scroll.finishPullUp();
                }).catch(({error}) => {
                    window.console.log(error);
                });
            }

        },
        created() {
            this.loadBanners();
            this.loadFeatures();
            this.loadRecommends();
            this.loadTab();
            this.loadGoods();
        },
        mounted() {

        },
        computed: {
            // tabGoods(){
            //     return this.tabGoodsList[this.$refs.tabItem.currentIndex]
            // }
        },
        components: {
            NavBar,
            // HomeSwiper,
            SwiperView,
            FeatureView,
            RecommendView,
            TabControl,
            scroll,
            GoodsList,
            BackTop,
        },
    }
</script>

<style scoped>
    #home {
        padding-top: 43px;
        padding-bottom: 49px;
        height: 100vh;
        position: relative;
    }

    .nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

    }

    .nav-bar-text {
        font-size: 16px;
        color: #ffffff;
    }

    .wrapper {
        position: absolute;
        top: 43px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
        background-color: #fff;

    }

    .fixed {
        position: fixed;
        top: 10px;
        left: 0;
        right: 0;
        z-index: 999;
    }

</style>

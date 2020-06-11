<template>
    <div id="home">
        <nav-bar class="nav-bar">
            <div slot="center" class="nav-bar-text">购物街</div>
        </nav-bar>

        <scroll class="wrapper"
                ref="scroll"
                @scroll="scrollPosition"
                @pullingUp="loadMore"
                :pull-up-load="true"
                :probe-type="3"
        >
            <div>
                <!-- 轮播图 -->
                <home-swiper :banners="banners"/>

                <feature-view :features="features"/>

                <recommend-view :recommends="recommends"/>

                <tab-control ref="tabControl"
                             :tabItems="tabItems"
                             @tabChange="tabChange"
                             class="tab-control"/>

                <goods-list :tabGoods="tabGoodsList[tabIndex]"/>

            </div>
        </scroll>

        <!--监听组件事件 必须得用.native-->
        <back-top @click.native="BtnTop" v-show="isShowBackTop"/>

    </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'
    import HomeSwiper from './childComps/HomeSwiper'
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
                tabGoodsList: [
                    {
                        cate: "pop",
                        page: 1,
                        goodsList: [
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200607_7ech8eldi4fhi8ha137k87797fikh_1080x1908.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200607_7ech8eldi4fhi8ha137k87797fikh_1080x1908.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200607_7ech8eldi4fhi8ha137k87797fikh_1080x1908.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200518_4592lb50b55clglc3h76e4ij8c5f2_530x885.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200602_363j615cekblh5f79h493lijc4c87_607x1080.jpg_500x9999.v1c7E.70.webp",
                                title: "哈哈哈哈哈哈",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200607_7ech8eldi4fhi8ha137k87797fikh_1080x1908.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                        ],
                    },
                    {
                        cate: "new",
                        page: 1,
                        goodsList: [
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200508_76idhj3c1all6jfi20429994ihci2_607x1080.jpg_400x9999.v1c7E.70.webp",
                                title: "通款new",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200520_15ke638lbiaflljda4egbaile72f1_504x840.jpg_400x9999.v1c7E.70.webp",
                                title: "复古",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200605_0igjh62f6a4bi92affg233gak526g_607x1080.jpg_400x9999.v1c7E.70.webp",
                                title: "丸子头",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200518_4592lb50b55clglc3h76e4ij8c5f2_530x885.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200602_363j615cekblh5f79h493lijc4c87_607x1080.jpg_500x9999.v1c7E.70.webp",
                                title: "哈哈哈哈哈哈",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200607_10g3605ddi2kc4fc7e9bjadl1hjkl_1080x1350.png_999x999.v1c0.100.webp",
                                title: "2233new",
                                price: 79.00,
                                collection: 123,
                            },
                        ],
                    },
                    {
                        cate: "sell",
                        page: 1,
                        goodsList: [
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200514_775j6cfkh671fdh59f3b0ffgc2b4c_900x1600.jpg_400x9999.v1c7E.70.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200607_7ech8eldi4fhi8ha137k87797fikh_1080x1908.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200414_876ice98f43l98dgla6h6he8dgg4a_480x800.jpg_400x9999.v1c7E.70.webp",
                                title: "新款",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200608_747f1b288jcbc5189i0ljjbfbdib4_1080x1620.jpg_400x9999.v1c7E.70.webp",
                                title: "最新款sell",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s5.mogucdn.com/mlcdn/c45406/200602_363j615cekblh5f79h493lijc4c87_607x1080.jpg_500x9999.v1c7E.70.webp",
                                title: "哈哈哈哈哈哈",
                                price: 79.00,
                                collection: 123,
                            },
                            {
                                link: "#",
                                image: "https://s11.mogucdn.com/mlcdn/c45406/200607_7ech8eldi4fhi8ha137k87797fikh_1080x1908.png_999x999.v1c0.100.webp",
                                title: "古装",
                                price: 79.00,
                                collection: 123,
                            },
                        ],
                    },
                ],
                tabIndex: 0,
                scroll: null,
                isShowBackTop: false
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
                // window.console.log(pos.y);
                this.isShowBackTop = pos.y < -900;
            },
            // tab-control切换事件回调
            tabChange(index) {
                // 接受当前tab control 切换goodsList
                this.tabIndex = index
            },
            // 滑动加载更多回调
            loadMore() {
                window.console.log("上拉加载更多....", this.tabGoodsList[this.tabIndex].cate);

                // 必须得回调 finishPullUp方法才能下次加载更多
                this.$refs.scroll.scroll.finishPullUp();
                // 加载完图片后 重新计算高度 注意防抖处理
                this.$refs.scroll.scroll.refresh()

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
        },
        created(){
            this.loadBanners();
            this.loadFeatures();
            this.loadRecommends();
            this.loadTab();
        }
        ,
        mounted() {


        },
        computed: {

        },
        components: {
            NavBar,
            HomeSwiper,
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
        z-index: 9;

    }

    .nav-bar-text {
        font-size: 16px;
        color: #ffffff;
    }

    /* tab-control固定高度时停住 */
    /*.tab-control{*/
    /*position: sticky;*/
    /*top: 43px;*/
    /*}*/

    .wrapper {
        position: absolute;
        top: 43px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
        background-color: #fff;

    }

</style>

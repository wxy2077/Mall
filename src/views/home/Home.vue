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

                <goods-list :tabGoods="tabGoodsList[tabIndex]" />

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
    import GoodsList from './childComps/goodsLIst'

    import scroll from '@/components/common/scroll/scroll'
    import BackTop from '@/components/content/backTop/BackTop'

    export default {
        name: 'Home',
        data() {
            return {
                banners: [
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"
                    },
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
                    },
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
                    }
                ],
                features: [
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
                        title: "十点抢卷",
                    },
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
                        title: "好物特卖",
                    },
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
                        title: "内购福利",
                    },
                    {
                        link: "#",
                        image: "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
                        title: "初秋上新",
                    },
                ],
                recommends: [
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/200327_50ieadafgg13667jgf432hb2ijl9i_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "女装",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/190903_0572el03440fllf207k3g5kfe6g35_150x150.jpg_640x640.v1cAC.40.webp",
                        title: "上衣",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/191021_2cagf3kgj81d6895k8571g8jbj30e_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "裤子",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/200327_1a3d2egbb3cagj7cg9jk8k5e24ck2_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "裙子",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/200525_7lj1302k99cbh22ad37aild2c9b5a_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "套装",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/200327_60hgbe9a54jd413df21l3gb468fa0_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "家居",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/200327_691e4fja6j2heh0egge060hfj7372_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "男装",
                        link: "#",
                    },
                    {
                        image: "https://s10.mogucdn.com/mlcdn/c45406/200327_0kllejc8c75ak5a942jd5f56ghh19_135x135.jpg_640x640.v1cAC.40.webp",
                        title: "童装",
                        link: "#",
                    },
                ],
                tabItems: [{title: "流行", cate: "pop"}, {title: "新款", cate: "new"}, {title: "精选", cate: "sell"}],
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
                if (pos.y < -900) {
                    this.isShowBackTop = true
                } else {
                    this.isShowBackTop = false
                }
            },
            // tab-control切换事件回调
            tabChange(index){
                // 接受当前tab control 切换goodsList
                this.tabIndex = index
            },
            // 滑动加载更多回调
            loadMore(){
                window.console.log("上拉加载更多....", this.tabGoodsList[this.tabIndex].cate)

                // 必须得回调 finishPullUp方法才能下次加载更多
                this.$refs.scroll.scroll.finishPullUp()
            }

        },
        mounted() {

        },
        computed:{
            // tabGoods(){
            //     return this.tabGoodsList[this.$refs.tabItem.currentIndex]
            // }
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

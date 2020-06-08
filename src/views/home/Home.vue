<template>
    <div id="home">
        <nav-bar class="nav-bar">
            <div slot="center" class="nav-bar-text">购物街</div>
        </nav-bar>

        <scroll class="wrapper"
                ref="scroll"
                @scroll="scrollPosition"
                :pull-up-load="true"
                :probe-type="3"
        >
            <div>
                <!-- 轮播图 -->
                <home-swiper :banners="banners"/>

                <feature-view :features="features"/>

                <recommend-view :recommends="recommends"/>

                <tab-control :tabItems="tabItems" class="tab-control"/>

                <goods-list />

                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                </ul>

            </div>
        </scroll>

        <!--监听组件事件 必须得用.native-->
        <back-top @click.native="BtnTop" v-show="isShowBackTop" />

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
                tabItems: [{title: "流行"}, {title: "新款"}, {title: "精选"}],

                scroll: null,
                isShowBackTop: false
            }
        },
        methods: {
            BtnTop(){
                // 通过ref 获取到自组件对象 访问自组件的scrollTo方法 回到顶部   500毫秒延迟
                this.$refs.scroll.scrollTo(0, 0, 500)

            },
            scrollPosition(pos){
                window.console.log(pos.y);
                if(pos.y < -900){
                    window.console.log("显示")
                    this.isShowBackTop = true
                }else{
                    this.isShowBackTop = false
                }

            }
        },
        mounted() {

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

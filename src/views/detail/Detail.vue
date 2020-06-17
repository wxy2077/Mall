<template>
    <div>
        <detail-tab-bar class="tab-bar"
                        :tabBarIndex="tabBarIndex"
                        @tabBarChange="tabBarChange"
        />
        <!--<div class="replace-space"></div>-->

        <scroll class="wrapper"
                :pull-up-load="true"
                :probe-type="3">
            <div>
                <detail-swiper :banners="banners"/>

                <!-- 商品基础信息 -->
                <base-info/>

                <!-- 销售信息 -->
                <sale-info/>

                <!-- 折扣信息 -->
                <discount-info/>

                <!-- 物流信息 -->
                <logistics-info/>

                <!-- 商品样式 -->
                <goods-style-info/>

                <!-- 评论信息 -->
                <comment-info/>

                <!-- 店铺信息 -->
                <shop-info/>

                <!-- 商品展示 -->
                <goods-display/>


            </div>
        </scroll>


    </div>
</template>

<script>
    import scroll from '@/components/common/scroll/scroll'

    import DetailTabBar from './childComps/DetailTabBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import BaseInfo from './childComps/BaseInfo'
    import SaleInfo from './childComps/SaleInfo'
    import DiscountInfo from './childComps/DiscountInfo'
    import LogisticsInfo from './childComps/LogisticsInfo'
    import GoodsStyleInfo from './childComps/GoodsStyleInfo'
    import CommentInfo from './childComps/CommentInfo'
    import ShopInfo from './childComps/ShopInfo'
    import GoodsDisplay from './childComps/GoodsDisplay'

    export default {
        name: 'Detail',
        data() {
            return {
                tabBarIndex:0,
                banners: [

                    {
                        "link": "#",
                        "image": "https://s11.mogucdn.com/mlcdn/c45406/170919_6h807cjg6c6e065kkalf9gh620aj7_640x960.jpg_640x960.v1cAC.70.webp"
                    },
                    {
                        "link": "#",
                        "image": "https://s5.mogucdn.com/mlcdn/c45406/170919_30a5je68053hf31h24610gedbk64h_640x960.jpg_640x960.v1cAC.70.webp"
                    },
                    {
                        "link": "#",
                        "image": "https://s5.mogucdn.com/mlcdn/c45406/170919_6h996g6jjd1j226kl3f553986347c_640x960.jpg_640x960.v1cAC.70.webp"
                    },
                    {
                        "link": "#",
                        "image": "https://s5.mogucdn.com/mlcdn/c45406/170919_6fkag39hdd5j4ffaeek99hg4g203g_640x960.jpg_640x960.v1cAC.70.webp",
                    }
                ],

            }
        },
        methods:{
            tabBarChange(index){
                this.tabBarIndex = index
            }
        },
        components: {
            scroll,
            DetailTabBar,
            DetailSwiper,
            BaseInfo,
            SaleInfo,
            DiscountInfo,    // 折扣信息
            LogisticsInfo,   // 物流信息
            GoodsStyleInfo,  // 商品样式
            CommentInfo,     // 评论信息
            ShopInfo,        // 店铺信息
            GoodsDisplay,    // 商品展示
        }
    }
</script>

<style scoped>

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

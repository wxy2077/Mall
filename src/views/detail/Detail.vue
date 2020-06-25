<template>
    <div>
        <detail-tab-bar class="tab-bar"
                        :nav-titles="navTitles"
                        :tabBarIndex="tabBarIndex"
                        @tabBarChange="tabBarChange"
        />
        <!--<div class="replace-space"></div>-->

        <scroll class="wrapper"
                ref="scroll"
                @scroll="scrollPosition"
                :pull-up-load="true"
                :probe-type="3">
            <div>
                <detail-swiper :banners="banners"/>

                <!-- 商品基础信息 -->
                <base-info :title="title" :price="price" :old-price="oldPrice"/>

                <!-- 销售信息 -->
                <sale-info :sales-volume=salesVolume :sales-collect="salesCollect" :sales-deliver="salesDeliver"/>

                <!-- 折扣信息 -->
                <discount-info :discount-volume="discountVolume" :discount-activity="discountActivity"/>

                <!-- 物流信息 -->
                <logistics-info :logistics-info="logisticsInfo"/>

                <!-- 商品样式 -->
                <goods-style-info/>

                <!-- 评论信息 -->
                <comment-info ref="comment"/>

                <!-- 店铺信息 -->
                <shop-info :shop-info="shopInfo"/>

                <!-- 商品展示 -->
                <goods-display
                        ref="goodsDisplay"
                        :goods-desc="goodsDesc"
                        :goods-images="goodsImages"
                />


            </div>
        </scroll>

        <BottomBar/>
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

    import BottomBar from './childComps/BottomBar'

    import {backTopMixin} from "@/common/mixin";

    import api from '@/api'

    export default {
        name: 'Detail',

        data() {
            return {
                goodsId: String,
                navTitles: ["商品", "评论", "详情", "参数"],
                tabBarIndex: 0,
                banners: [],
                title: "标题",
                price: 0,
                oldPrice: 0,

                salesVolume: 0, // 销量
                salesCollect: 0, // 收藏
                salesDeliver: "", // 发货时间

                discountVolume: [],
                discountActivity: [],

                logisticsInfo: [],
                shopInfo: {},

                goodsDesc: "",
                goodsImages: [],
            }
        },
        methods: {
            tabBarChange(index) {
                // 点击tabBar 跳转位置
                this.tabBarIndex = index;
                switch (index) {
                    case 0:
                        this.$refs.scroll.scrollTo(0, 0, 500);
                        break;
                    case 1:
                        this.$refs.scroll.scrollTo(0, -this.$refs.comment.$el.offsetTop, 200);
                        break;
                    case 2:
                        this.$refs.scroll.scrollTo(0, -this.$refs.goodsDisplay.$el.offsetTop, 200);
                        break
                }

            },
            // 监听滚动
            scrollPosition(position) {
                // 更具位置显示 tabBar颜色
                if (-position.y < 200) {
                    this.tabBarIndex = 0
                } else if (-position.y >= this.$refs.comment.$el.offsetTop && -position.y < this.$refs.goodsDisplay.$el.offsetTop) {
                    this.tabBarIndex = 1

                } else if (-position.y >= this.$refs.goodsDisplay.$el.offsetTop) {
                    this.tabBarIndex = 2
                }

            },
            getDetail() {
                this.goodsId = this.$route.query.goodsId || 123;

                api.detail.GoodsDetail({goodsId: this.goodsId}).then(({data}) => {
                    this.banners = data.banners;
                    this.title = data.title;
                    this.price = data.price;
                    this.oldPrice = data.original_price;
                    this.salesVolume = data.sales_volume;
                    this.salesCollect = data.sales_collect;
                    this.salesDeliver = data.sales_deliver;

                    this.discountVolume = data.discount_volume;
                    this.discountActivity = data.discount_activity;
                    this.logisticsInfo = data.logistics_info;

                    this.shopInfo = data.shopInfo;

                    this.goodsDesc = data.goods_desc
                    this.goodsImages = data.goods_image

                    // window.console.log(data)
                }).catch(({error}) => {
                    window.console.log(error)
                })
            }
        },
        mixin: [backTopMixin],
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
            // 参数什么的就不写了
            BottomBar,
        },
        created() {
            this.getDetail()
        },
        // mounted(){
        //
        // }
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

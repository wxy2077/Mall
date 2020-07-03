<template>

    <div class="FeatureView">

        <div class="fea-item">
            <img :src='require("@/assets/img/common/shop.svg")'>
            <div>
                <span class="des">
                关注店铺
                </span>
                <span class="num">
                0
                </span>
            </div>
        </div>
        <div class="fea-item">
            <img :src='require("@/assets/img/common/heart.svg")'>
            <div>
                <span class="des">
                收藏
                </span>
                <span class="num">
                0
                </span>
            </div>
        </div>
        <div class="fea-item">
            <img :src='require("@/assets/img/profile/foot.svg")'>
            <div>
                <span class="des">
                足迹
                </span>
                <span class="num">
                0
                </span>
            </div>
        </div>
        <div class="fea-item">
            <img :src='require("@/assets/img/profile/coupon.svg")'>
            <div>
                <span class="des">
                优惠卷
                </span>
                <span class="num">
                0
                </span>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "FeatureView",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .FeatureView {
        height: 50px;
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 13px;
        color: #E0E0E0;
    }

    .fea-item {
        flex: 1;
    }
    .num{
        color: #999999;
    }

    .fea-item img {
        width: 20px;
        height: 20px;
    }


</style>

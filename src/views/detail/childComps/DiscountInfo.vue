<template>
    <!-- 折扣信息 -->
    <div class="DiscountInfo" v-if="discountVolume">
        <div class="discount-top">
            <span>优惠</span>
            <span class="bg-color">店铺优惠券</span>
            <span v-for="(item, index) in discountVolume" :key="index">
                {{ item }}
            </span>
            <span> 领券> </span>
        </div>
        <div class="discount-bottom">
            <span>促销</span>
            <span class="bg-color">满减</span>
            <span v-for="(item, index) in discountActivity" :key="index">
                {{ item }}
            </span>
            <span>更多></span>
        </div>
    </div>


</template>

<script>
    export default {
        name: "DiscountInfo",
        props:{
            discountVolume:{
                type: Array,
                default: () => []
            },
            discountActivity:{
                type: Array,
                default: () => []
            },
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .DiscountInfo{
        font-size: 13px;
        margin-top: 10px;
        padding: 8px 10px;
        border-top: 8px solid rgba(100, 100, 100, .1);
    }
    .bg-color{
        padding: 0 3px;
        color: #fff;
        border-radius: 5px;
        background-color: var(--color-high-text);
    }

    .discount-top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .discount-bottom{
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }


</style>

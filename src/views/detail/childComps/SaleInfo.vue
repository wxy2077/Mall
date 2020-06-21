<template>

    <!-- 销售信息 -->
    <div class="SaleInfo">
        <span>销量:{{ salesVolume }}</span>
        <span>收藏:{{ salesCollect }}人</span>
        <span>{{ salesDeliver }}</span>
    </div>
</template>

<script>
    export default {
        name: "SaleInfo",
        props:["salesVolume", "salesCollect", "salesDeliver"],
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .SaleInfo {
        margin-top: 10px;
        padding: 0 10px;
        display: flex;
        color: #999999;
        font-size: 10px;
        justify-content: space-between;
    }
</style>

<template>

    <!-- 销售信息 -->
    <div class="SaleInfo">
        <span>销量:1031</span>
        <span>收藏:100人</span>
        <span>72小时发货</span>
    </div>
</template>

<script>
    export default {
        name: "SaleInfo",
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

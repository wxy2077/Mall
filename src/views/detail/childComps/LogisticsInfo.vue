<template>
    <!-- 物流信息 -->
    <div class="LogisticsInfo">
        <span><img :src='require("@/assets/img/common/yes.svg")'>退货补运费</span>
        <span><img :src='require("@/assets/img/common/yes.svg")'>全国包邮</span>
        <span><img :src='require("@/assets/img/common/yes.svg")'>七天无理由退货</span>
        <span> > </span>
    </div>
</template>

<script>
    export default {
        name: "LogisticsInfo",
        data() {
            return {}
        }
    }

</script>

<style scoped>
    .LogisticsInfo {
        font-size: 15px;
        display: flex;
        margin-top: 10px;
        padding: 8px 10px;
        justify-content: space-between;
        border-top: 8px solid rgba(100, 100, 100, .1);
    }
    .LogisticsInfo img {
        width: 13px;
        height: 13px;
        margin-right: 3px;
    }

</style>

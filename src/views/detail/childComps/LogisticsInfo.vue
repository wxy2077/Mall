<template>
    <!-- 物流信息 -->
    <div class="LogisticsInfo">
        <template v-for="(item, index) in logisticsInfo">
            <span :key="index"><img :src='require("@/assets/img/common/yes.svg")'>{{ item }}</span>

        </template>
        <span> > </span>
    </div>
</template>

<script>
    export default {
        name: "LogisticsInfo",
        props: {
            logisticsInfo: {
                type: Array,
                default: () => []
            }
        },
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

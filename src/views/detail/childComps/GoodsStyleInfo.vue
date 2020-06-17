<template>

    <!-- 商品样式 -->
    <div class="GoodsStyleInfo">
        <span>请选择: &nbsp;&nbsp; 颜色 &nbsp;&nbsp;尺码</span>
        <span> > </span>
    </div>
</template>

<script>
    export default {
        name: "GoodsStyleInfo",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .GoodsStyleInfo{
        margin-top: 10px;
        padding: 8px 10px 0;
        border-top: 8px solid rgba(100, 100, 100, .1);
        font-size: 15px;
        display: flex;
        justify-content: space-between;

    }

</style>

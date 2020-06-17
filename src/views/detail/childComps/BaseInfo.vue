<template>

    <div class="baseInfo">

        <!-- 标题 -->
        <h3 class="title">
            【秋衣女】外穿打底衫女长袖中长款上衣春装新款小衫韩版学生宽松T恤
        </h3>
        <!-- 价格 -->
        <div class="price-box">
            <span class="price">¥29.9</span>
            <span class="old-price">¥69.9</span>
            <span class="price-info bg-color">活动价</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BaseInfo",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .baseInfo {
        /*padding: 0 5px;*/
    }
    .bg-color{
        padding: 0 3px;
        color: #fff;
        border-radius: 5px;
        background-color: var(--color-high-text);
    }
    .title {
        margin-top: 8px;
        padding: 0 10px;
    }

    .price-box {
        margin-top: 10px;
        padding: 0 5px;

    }

    .price {
        margin-left: 5px;
        font-size: 30px;
        font-weight: bold;
        color: var(--color-high-text);
    }

    .old-price {
        margin-left: 5px;
        text-decoration: line-through
    }

    .price-info {
        margin-left: 5px;
        font-size: 14px;

        color: #fff;
        padding: 0 3px;
        border-radius: 10px;
        position: relative;
        top: -10px;
    }

</style>

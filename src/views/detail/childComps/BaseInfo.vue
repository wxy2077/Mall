<template>

    <div class="baseInfo">

        <!-- 标题 -->
        <h3 class="title">
            {{ title }}
        </h3>
        <!-- 价格 -->
        <div class="price-box">
            <span class="price">{{ price | addMoney }}</span>
            <span class="old-price">{{ oldPrice| addMoney }}</span>
            <span class="price-info bg-color">活动价</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BaseInfo",
        props: {
            title: {
                type: String,
            },
            price: {
                type: Number,
            },
            oldPrice: {
                type: Number,
            }

        },
        data() {
            return {}
        },
        filters:{
            addMoney(data){
                return `¥${data}`
            }
        }
    }
</script>

<style scoped>
    .baseInfo {
        /*padding: 0 5px;*/
    }

    .bg-color {
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

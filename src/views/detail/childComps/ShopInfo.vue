<template>

    <!-- 商家信息 -->
    <div class="ShopInfo">
        <img src="https://s5.mogucdn.com/mlcdn/c45406/190515_3defc7eak01l8eag9idkbeaa22bjd_200x200.jpg_120x120.webp"/>
        <div>
            <span>浓妆公主</span>
            <div class="in-shop">
                进店 >
            </div>
            <div class="shop-goods">
                ⭐️⭐⭐⭐⭐ | 在线商品593
            </div>

            <div class="shop-tag">
                <span class="bg-color">5.4万人关注</span>
                <span class="bg-color">累计销量600万+</span>
                <span class="bg-color">五星好店</span>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopInfo",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .ShopInfo{
        padding: 15px;
        display: flex;
        font-size: 15px;
        position: relative;
        margin-top: 10px;
        border-top: 8px solid rgba(100, 100, 100, .1);
    }
    .ShopInfo img{
        width: 60px;
        height: 60px;
        border-radius: 2px;
        margin-right: 10px;
    }
    .in-shop{
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .shop-tag{
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
    .shop-tag span{
        margin: 15px 5px 0;
    }


</style>

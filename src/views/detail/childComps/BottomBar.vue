<template>

    <div class="BottomBar">
        <div class="bar-item">
            <img :src='require("@/assets/img/common/shop.svg")'>
            <div>
                店铺
            </div>
        </div>

        <div class="bar-item">
            <img :src='require("@/assets/img/common/cust.svg")'>
            <div>
                客服
            </div>
        </div>

        <div class="bar-item">
            <img :src='require("@/assets/img/common/heart.svg")'>
            <div>
                收藏
            </div>
        </div>
        <div class="bar-item button-item">
           <div class="addCar" @click="addShopCart">加入购物车</div>
           <div class="rightBuy">立即购买</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BottomBar",
        data() {
            return {

            }
        },
        methods:{
            addShopCart(){
                // 添加到购物车
                this.$emit("addShopCart")
            }
        }
    }
</script>

<style scoped>
    .BottomBar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 13px;
        justify-content: space-between;
        overflow: hidden;
        border-top: 2px solid rgba(100, 100, 100, .1);
    }
    .bar-item{
        padding-left: 5%;
    }
    .bar-item img{
        width: 20px;
        height: 20px;
        margin-bottom: 2px;
    }

    .button-item{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button-item div{
        height: 100%;
        flex: 1;
        align-items: center;
        line-height: 50px;
        border-radius: 30px;
    }
    .addCar{
        background-color: #ffe817;
    }
    .rightBuy{
        background-color: #f69;
        color: #fff;

    }


</style>

<template>
    <div class="ShopListItem" v-if="goodsInfo">
        <div class="check" @click="goodsCheck">
            <img v-if="goodsInfo.checked"
                 class="iconCheck"

                 :src='require("@/assets/img/common/check.svg")'
            >
        </div>
        <div class="goods-image">
            <img :src="goodsInfo.image"/>
        </div>
        <div class="goods-info">
            <p class="goods-desc">{{ goodsInfo.title }}</p>
            <span class="goods-style">型号:L</span>
            <span class="goods-price">¥{{ goodsInfo.price }}</span>
            <div class="counter">
                <span class="increment" @click="decrement">-</span>
                <span class="show-count">{{ goodsInfo.count }}</span>
                <span class="decrement" @click="increment">+</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopListItem",
        props:{
          goodsInfo:{
              type: Object,
              default: () => {}
          }
        },
        data() {
            return {}
        },
        methods:{
            // 商品选中
            goodsCheck(){
              this.$emit("goodsCheck", this.goodsInfo)
            },
            // 增加
            increment(){
                this.$emit("increment", this.goodsInfo)
            },
            // 减少
            decrement(){
                this.$emit("decrement", this.goodsInfo)
            }
        }
    }
</script>

<style scoped>
    .ShopListItem{
        height: 130px;
        width: 100%;
        /*background-color: aquamarine;*/
        display: flex;
        align-items: center;
    }
    .check{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        align-items: center;
        border: 2px solid #DCDCDC;
        margin-right: 10px;
        margin-left: 10px;
    }
    .iconCheck {
        width: 100%;
        height: 100%;
    }

    .goods-image {
        width: 100px;
        height: 100px;
    }
    .goods-image img{
        width: 100%;
        height: 100%;
    }
    .goods-info{
        padding: 5px;
        height: 100px;
        flex: 1;
        font-size: 15px;
    }
    .goods-desc{
        margin-bottom: 2px;
    }
    .goods-style{
        font-size: 13px;
        padding: 0 5px;
        border-radius: 2px;
        color: #fff;
        background-color: #999999;
    }
    .goods-price{
        margin-top: 10px;
        font-size: 17px;
        font-weight: bolder;
        display: block;
        color: #ff5777;
    }
    .counter{
        width: 80px;
        /* 计数 相对定位 */
        position: relative;
        left: 60%;
        bottom: 30px;
        display: flex;
        text-align: center;
        justify-content: space-between;
        border: 1px solid #C0C0C0
    }

    .show-count{
        flex: 2;
    }
    .increment{
        flex: 1;
        border-right: 1px solid #C0C0C0;
    }
    .decrement{
        flex: 1;
        border-left: 1px solid #C0C0C0;
    }




</style>

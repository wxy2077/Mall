<template>

    <div class="OrderView">
        <div class="head">
            <span>
                我的订单
            </span>
            <span>
                查看全部订单
            </span>
        </div>
        <div class="order-info">
            <div class="order-item">
                <img :src='require("@/assets/img/profile/w_pay.svg")'/>
                <span class="num" :class="{showNum: wPay<=0}">
                    {{ wPay }}
                </span>
                <div class="des">待付款</div>
            </div>
            <div class="order-item">
                <img :src='require("@/assets/img/profile/w_send.svg")'/>
                <span class="num" :class="{showNum: wSend<=0}">
                    {{ wSend }}
                </span>
                <div class="des">待发货</div>
            </div>
            <div class="order-item">
                <img :src='require("@/assets/img/profile/w_recovery.svg")'/>
                <span class="num" :class="{showNum: wRecovery<=0}">
                    {{ wRecovery }}
                </span>
                <div class="des">待收获</div>
            </div>
            <div class="order-item">
                <img :src='require("@/assets/img/profile/w_comment.svg")'/>
                <span class="num" :class="{showNum: wComment<=0}">
                    {{ wComment }}
                </span>
                <div class="des">评价</div>
            </div>
            <div class="order-item">
                <img :src='require("@/assets/img/profile/w_refund.svg")'/>
                <span class="num" :class="{showNum: wRefund<=0}">
                    {{ wRefund }}
                </span>
                <div class="des">退款/售后</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderView",
        data() {
            return {
                wPay: 0,
                wSend: 15,
                wRecovery: 0,
                wComment:0,
                wRefund: 0,
            }
        }
    }
</script>

<style scoped>
    .OrderView {
        width: 95%;
        /*background-color: #F0F0F0;*/
        background-color: #f6f6f6;
        margin: 10px auto;
        padding: 10px;
        border-radius: 10px;
    }
    .head{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }

    .order-info{
        margin-top: 13px;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .order-item{
        flex: 1;
        font-size: 14px;
        font-weight: 400;
        position: relative;

    }

    .order-item img{
        width: 30px;
        height: 30px;
    }
    .num{
        position: absolute;
        left: 55%;
        bottom: 75%;
        font-size: 14px;
        font-weight: 500;
        padding: 0 3px;
        color: #f6f6f6;
        background-color: #ff8198;
        border: 2px solid #fff;
        border-radius: 20px;
    }

    .des{
        margin-top: 8px;
    }
    .showNum{
        display: none;
    }


</style>

<template>

    <div class="SettleBottomBar">
        <div class="check-all" @click="checkAll">
            <span class="checked">
                <img v-if="choice"
                     class="iconCheck"

                     :src='require("@/assets/img/common/check.svg")'
                >
            </span>
            <span>全选</span>
        </div>
        <div class="total">
            合计: <span>¥{{ totalMoney }}</span>
        </div>
        <div class="settle">
            结算
        </div>
    </div>
</template>

<script>
    export default {
        name: "SettleBottomBar",
        data() {
            return {
                choice: false,
                // totalMoney: 0,

            }
        },
        methods: {
            checkAll() {
                this.choice = !this.choice;

                this.$emit("choiceAll", this.choice)

            },

        },
        filters: {
            // 保留小数点后两位 四舍五入
            numFilter(value) {
                let realVal = '';
                if (!isNaN(value) && value !== '') {
                    // 截取当前数据到小数点后两位
                    realVal = parseFloat(value).toFixed(2)
                } else {
                    realVal = '--'
                }
                return realVal
            }
        },
        computed: {
            totalMoney(){
                const cartList = this.$store.getters.cartList;
                return cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.count * item.price
                }, 0).toFixed(2)
            }
        }
    }
</script>

<style scoped>
    .SettleBottomBar {
        display: flex;
        height: 49px;
        background-color: #dcdcdc;
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;

        align-items: center;
        text-align: center;
        line-height: 49px;
        justify-content: space-between;
    }

    .check-all {
        width: 20%;
        font-size: 13px;
    }

    .checked {
        display: inline-flex;
        align-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #C0C0C0;
        margin-right: 10px;
        margin-left: 10px;
        position: relative;
        bottom: -3px;
    }

    .iconCheck {
        width: 100%;
        height: 100%;
    }

    .total span {
        color: #ff5777;
        font-weight: bold;
    }

    .settle {
        width: 30%;
        color: #000;
        background-color: #ff5777;
        border-radius: 5px;
    }


</style>

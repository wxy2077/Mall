<template>

    <div class="DelBottomBar">
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

        </div>
        <div class="settle" @click="delChoice">
            删除
        </div>
    </div>
</template>

<script>
    export default {
        name: "DelBottomBar",
        data() {
            return {
                choice: false
            }
        },
        methods:{
            checkAll(){
                this.choice = !this.choice;
                this.$emit("choiceAll", this.choice)
            },
            delChoice(){
                this.$emit("delChoice")
            }
        }
    }
</script>

<style scoped>
    .DelBottomBar{
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
        background-color: #ccc;
        border-radius: 5px;
    }
</style>

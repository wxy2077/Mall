<template>
    <div class="Profile">
        <!--<h2>个人中心</h2>-->

        <button @click="clickNormal"> 普通消息 </button>
        <button @click="clickSuc"> 成功 </button>
        <button @click="clickWar"> 警告 </button>
        <button @click="clickFail"> 失败 </button>


        <!--<cust-toast-->
                <!--message="这是传进来的"-->
                <!--:showToast="showToast"-->
                <!--type="success"-->
        <!--/>-->
    </div>

</template>

<script>
    // import Toast from '@/components/common/toast/Toast'
    // import CustToast from '@/components/common/toast/CustToast'

    export default {
        name: 'Profile',
        data() {
            return {
                showToast: true,
                typeToast: "normal",
                toastMessage: "弹窗提示"
            }
        },
        methods:{
            clickNormal(){

                this.$toast("测试普通")
            },
            clickSuc(){
                this.$toast("测试成功", "success", 5000)
            },
            clickWar(){
                this.$toast("测试警告", "warning")
            },
            clickFail(){
                this.$toast("测试失败", "fail")
            }

        },
        components: {
            // Toast,
            // CustToast
        }
    }
</script>

<style scoped>
    button{
        margin: 20px;
    }

</style>

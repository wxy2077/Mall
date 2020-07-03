<template>

    <div class="UserView">
        <div class="user-head">
            <img :src="userInfo.userHead"/>
        </div>
        <div class="user-info">
            <div class="user-name">
                登录/注册
            </div>
            <div class="user-link">
                <img :src="require('@/assets/img/profile/phone.svg')"/>
                <span>未绑定手机号</span>
            </div>
        </div>
        <span class="icon">
            <img :src="require('@/assets/img/profile/in.svg')"/>
        </span>
    </div>
</template>

<script>
    export default {
        name: "UserView",
        data() {
            return {
                userInfo:{
                    userHead: require('@/assets/img/profile/portrait.svg')
                }
            }
        }
    }
</script>

<style scoped>
    .UserView{
        height: 80px;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        background: #FFD2D2;
    }
    .user-head img{
        width: 60px;
        height: 60px;
    }
    .user-info{
        height: 100%;
        width: 100%;
        margin-left: 10px;
        padding: 5px;
        line-height: 25px;
    }
    .user-name{
        font-size: 18px;
        font-weight: 500;
    }
    .user-link{
        font-size: 13px;
    }
    .user-link img{
        width: 20px;
        height: 20px;
    }
    .user-link span{
        position: relative;
        top: -5px;
    }
    .icon{
        justify-self: flex-end;
    }
    .icon img{
        width: 25px;
        height: 25px;
    }

</style>

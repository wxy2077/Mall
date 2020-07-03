<template>
    <div class="Profile">
        <nav-bar>
            <div slot="center">个人中心</div>
            <div slot="right" class="nav-bar-icon">
                <img class="setting" :src='require("@/assets/img/common/setting.svg")'/>
            </div>
        </nav-bar>

        <user-view />

        <feature-view/>

        <order-view/>

        <tab-view/>

    </div>

</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'

    import UserView from './childComps/UserView'
    import FeatureView from './childComps/FeatureView'
    import OrderView from './childComps/OrderView'
    import TabView from './childComps/TabView'

    export default {
        name: 'Profile',
        data() {
            return {

            }
        },
        methods:{


        },
        components: {
            NavBar,
            UserView,
            FeatureView,
            OrderView,
            TabView
        }
    }
</script>

<style scoped>
    .Profile{
    }
    .nav-bar-icon{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .setting{
        width: 25px;
        height: 25px;
    }

</style>

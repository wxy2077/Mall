<template>
    <tab-bar>
        <template v-for="(item, index) in titleList">
            <tab-bar-item :key="index" :path="item.path">
                <!-- 插槽简写 -->
                <img slot="icon" :src="item.icon"/>
                <img slot="active-icon" :src="item.activeIcon"/>
                <div slot="text">{{ item.title }}</div>item.activeIcon
            </tab-bar-item>
        </template>

    </tab-bar>
</template>

<script>
    import TabBar from '@/components/common/tabbar/TabBar'
    import TabBarItem from '@/components/common/tabbar/TabBarItem'

    export default {
        name: 'MainTabBar',
        data() {
            return {
                titleList: [
                    {
                        title: "首页",
                        path:"/home",
                        icon: require("@/assets/img/tabbar/home.svg"),
                        activeIcon: require("@/assets/img/tabbar/home_active.svg"),
                    },
                    {
                        title: "分类",
                        path:"/category",
                        icon: require("@/assets/img/tabbar/category.svg"),
                        activeIcon: require("@/assets/img/tabbar/category_active.svg"),
                    },
                    {
                        title: "购物车",
                        path:"/cart",
                        icon: require("@/assets/img/tabbar/shopcart.svg"),
                        activeIcon: require("@/assets/img/tabbar/shopcart_active.svg"),
                    },
                    {
                        title: "我的",
                        path:"/profile",
                        icon: require("@/assets/img/tabbar/profile.svg"),
                        activeIcon: require("@/assets/img/tabbar/profile_active.svg"),
                    },
                    {
                        title: "测试",
                        path:"/Demo",
                        icon: require("@/assets/img/tabbar/profile.svg"),
                        activeIcon: require("@/assets/img/tabbar/profile_active.svg"),
                    }

                ]
            }
        },
        components:{
            TabBarItem,
            TabBar,
        }
    }
</script>

<style scoped>
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }


</style>
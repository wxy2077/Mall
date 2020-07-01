<template>
    <div id="app">
        <!--exclude 排除 Detail(组件name)组件不缓存状态，每次都重新生成 -->
        <keep-alive exclude="Detail">
            <router-view></router-view>
        </keep-alive>
        <!--<main-tab-bar></main-tab-bar>-->

    </div>
</template>

<script>
    // import MainTabBar from '@/components/content/mainTabbar/MainTabBar'
    export default {
        name: 'App',
        components: {
            // MainTabBar,
        }
    }
</script>

<style>
    @import "assets/css/base.css";

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

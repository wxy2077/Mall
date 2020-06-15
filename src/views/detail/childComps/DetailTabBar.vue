<template>
    <nav-bar class="DetailTabBar">
        <div slot="left" class="nav-bar-text">
            <img class="iconBarBack" :src='require("@/assets/img/common/back.svg")'>
        </div>
        <div slot="center" class="nav-bar-text navBarCenter">
            <span v-for="(item, index) in navTitles"
                  :key="index"
                  :class="{'active': currentIndex === index}"
                  @click="tabClick(index)"
            >
                {{item }}
            </span>
        </div>
        <div slot="right">

        </div>
    </nav-bar>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'

    export default {
        name: "DetailTabBar",
        props: {
            navTitles: {
                type: Array,
                default: () => ["商品", "参数", "评论", "推荐"],
            },
            currentIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {}
        },
        methods:{
            tabClick(index){
                this.currentIndex = index;
            }
        },
        components: {
            NavBar,
        }
    }
</script>

<style scoped>
    .DetailTabBar {
        display: flex;
        align-items: center;
        font-weight: normal;
        background-color: #fff;
        color: #666666;
    }

    .iconBarBack {
        width: 25px;
        height: 25px;
        margin-left: 10px;
    }
    .navBarCenter span{
        margin: 0 10px;
    }
    .active{
        color: var(--color-high-text);
    }


</style>

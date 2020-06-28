<template>

    <div class="TabBar">
        <span class="tab-item"
              v-for="(item, index) in tabList"
              :class="{'active': currentTab === index}"
              :key="index"
              @click="changeTab(index)"
        >
                {{ item.tab_name }}
        </span>


    </div>
</template>

<script>
    export default {
        name: "TabBar",
        props:{
            currentTab:{
                type: Number,
                default: 0
            },
            tabList:{
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        methods:{
            changeTab(index){
                this.$emit("changeTab", index)
            }
        }
    }
</script>

<style scoped>
    .TabBar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*background-color: #ff5777;*/
        padding: 0 10px;
        margin-bottom: 5px;

    }
    .tab-item{
        height: 30px;
        line-height: 30px;
        text-align: center;
        /*background-color: #999999;*/
    }
    .active{
        color: #ff5777;
        border-bottom: 2px solid #ff5777;
    }

</style>

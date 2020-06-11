<template>
    <div class="TabControl">

        <div class="tab-control-item" v-for="(item, index) in tabItems"
             :key="index"
             @click="clickItem(index)"
             :class="{active: currentIndex === index}"
        >
            <span>{{ item.tabName }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            tabItems: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                currentIndex: 0,
            }
        },
        methods:{
            clickItem(index){
                this.currentIndex = index;
                this.$emit('tabChange', index)
            }
        }
    }
</script>

<style scoped>
    .TabControl {
        margin-top: 30px;
        height: 40px;
        display: flex;
        justify-content: center;
        font-size: 15px;
        background-color: #fff;
        text-align: center;
    }

    .tab-control-item {
        flex: 1;
        padding-top: 10px;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color: var(--color-tint);
    }
    .active span {

        border-bottom: 3px solid var(--color-tint);
    }


</style>

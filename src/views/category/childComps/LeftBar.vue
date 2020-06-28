<template>

    <div class="LeftBar">
        <div class="bar-item"
             v-for="(item, index) in cateList"
             :key="index"
             :class="{'active': currentCate===index}"
             @click="cateChange(index)"
        >
            {{ item.cate_name }}
        </div>

    </div>
</template>

<script>
    export default {
        name: "LeftBar",
        props:{
            currentCate:{
              type: Number,
              default: 0,
            },
            cateList:{
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        methods:{
            cateChange(index){
                this.$emit("cateChange", index)
            }
        }
    }
</script>

<style scoped>
    .LeftBar{
        text-align: center;
        /*background-color: #999999;*/
    }
    .bar-item{
        margin: 10px auto;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .active{
        color: #ff5777;
        border-bottom: 2px solid #ff5777;
    }

</style>

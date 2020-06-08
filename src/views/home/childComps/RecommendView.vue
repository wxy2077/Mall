<template>
    <div class="RecommendView">
        <h4>本周流行</h4>
        <div class="recommend-box">
            <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
                <a :href="item.link">
                    <img :src="item.image"/>
                    <div class="item-text">{{ item.title }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
          recommends: {
              type: Array,
              default: () => []
          }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .RecommendView{
        padding-top: 10px;
        align-items: center;
    }
    h4{
        /*margin: auto;*/
        text-align: center;
        margin-bottom: 5px;
    }
    .recommend-box{
        display: flex;
        /*justify-content: space-between;*/
        width: 100vm;
        flex-wrap: wrap;
        font-size: 14px;
        text-align: center;
    }
    .recommend-item{
        flex:  1;
        margin: 0 5px 5px;
    }

    .recommend-item img{
        height: 70px;
        width: 70px;
        margin-bottom: 5px;
    }


</style>

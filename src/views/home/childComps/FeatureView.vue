<template>
    <div class="FeatureView">
        <div class="feature-item" v-for="(item, index) in features" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" />
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeatureView",
        props:{
            features: {
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
    .FeatureView{
        margin-top: 8px;
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
        border-bottom: 10px solid #eee;
    }
    .feature-item {
        flex: 1;
        text-align: center;
    }
    .feature-item img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }



</style>

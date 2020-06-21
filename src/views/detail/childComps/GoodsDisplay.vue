<template>

    <!-- 商品展示 -->
    <div class="GoodsDisplay">
        <div class="goods-info">
            <i class="lineBar--dot"></i>
            {{ goodsDesc }}
        </div>
        <h3>穿着效果</h3>
        <p>质量好不起球</p>
        <div class="goods-img" v-for="(item, index) in goodsImages" :key="index">
            <img :src="item"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsDisplay",
        props:{
          goodsDesc:{
           type: String,
          },
          goodsImages:{
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

    .GoodsDisplay{
        font-size: 15px;
        margin-top: 10px;
        padding: 8px 0 0;
        border-top: 8px solid rgba(100, 100, 100, .1);
    }
    .goods-info, h3, p{
        padding: 10px 10px;
    }
    .lineBar--dot{
        display: inline-block;
        width: 1px;
        height: 1px;
        background: #000;
        border-radius: 50%;
        position: absolute;
        top: -0.04rem;
    }

</style>

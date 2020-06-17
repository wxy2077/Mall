<template>

    <!-- 商品展示 -->
    <div class="GoodsDisplay">
        <div class="goods-info">
            <i class="lineBar--dot"></i>
            每天3点前下单，基本都是可以当天发货的哦。 还有7天时间无理由包退换，我们是免费送运费险的。让亲们可以无忧无虑的购买。（谢谢支持）
        </div>
        <h3>穿着效果</h3>
        <p>质量好不起球</p>
        <div class="goods-img">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/170919_81fae35fccie4akl4igg64g4lc8cl_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/170919_23eib586jf6egg0ihc93045461a29_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s5.mogucdn.com/mlcdn/c45406/170919_8070cehgi7dj80a83fa5ki7b41i5k_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/170919_48j5023igk9clefc92c7fkjk8ei12_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s5.mogucdn.com/mlcdn/c45406/170919_37c9gidl48a12l25l16d39l1i9le3_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/170919_56ag21bbgjelab2g0h97bbe7f5jgi_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/170919_88i68ailg6fl53075k1el95b0i7ga_744x850.jpg_468x468.webp"/>
        </div>

        <div class="goods-img">
            <img src="https://s5.mogucdn.com/mlcdn/c45406/170919_82j9af1i5ljdlelebjjl753193269_744x850.jpg_468x468.webp"/>
        </div>

        <div class="goods-img">
            <img src="https://s5.mogucdn.com/mlcdn/c45406/170919_44b259b21k28gi160a10jdcl0cefi_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s5.mogucdn.com/mlcdn/c45406/170919_6k5818g1akijb2k2b3h1a81bb0gif_744x850.jpg_468x468.webp"/>
        </div>
        <div class="goods-img">
            <img src="https://s5.mogucdn.com/mlcdn/c45406/170919_6k5818g1akijb2k2b3h1a81bb0gif_744x850.jpg_468x468.webp"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsDisplay",
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

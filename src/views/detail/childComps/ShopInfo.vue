<template>

    <!-- 商家信息 -->
    <div class="ShopInfo">
        <img :src="shopInfo.shopImage"/>
        <div>
            <span>{{ shopInfo.shopName }}</span>
            <div class="in-shop">
                进店 >
            </div>
            <div class="shop-goods">
                ⭐️⭐⭐⭐⭐ | 在线商品{{ shopInfo.goodsNum | dataFormat }}
            </div>

            <div class="shop-tag">
                <span class="bg-color">{{ shopInfo.follow | dataFormat }}人关注</span>
                <span class="bg-color">累计销量{{ shopInfo.cumulativeSales | dataFormat }}+</span>
                <span class="bg-color">五星好店</span>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopInfo",
        props: {
            shopInfo: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {}
        },
        filters:{
            dataFormat(data){
                data = parseInt(data);
                if(data < 10000){
                    return data
                }else{
                    data = (data/10000).toFixed(1);

                    return `${data}万`
                }
                //
            }
        }
    }
</script>

<style scoped>
    .ShopInfo{
        padding: 15px;
        display: flex;
        font-size: 15px;
        position: relative;
        margin-top: 10px;
        border-top: 8px solid rgba(100, 100, 100, .1);
    }
    .ShopInfo img{
        width: 60px;
        height: 60px;
        border-radius: 2px;
        margin-right: 10px;
    }
    .in-shop{
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .shop-tag{
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
    .shop-tag span{
        margin: 15px 5px 0;
    }


</style>

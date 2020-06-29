<template>
    <div class="goodsItem" @click="goToDetail">
            <img :src="goods.image" @load="loadGoodsImage"/>
            <div class="goodsInfo">
                <p>{{ goods.title | cutTitle }}</p>
                <span class="price">￥{{ goods.price }}</span>
                <span class="collection">✨ {{ goods.collection }}</span>
            </div>

    </div>
</template>

<script>
    export default {
        name: 'goodListItem',
        props: {
            goods: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {}
        },
        methods:{
            goToDetail(){
                // 后台商品详情就存了三条详情 id 为123 456 789
                let mockGoodsIdList = [123, 456, 789];

                let mockGoodsId = mockGoodsIdList[Math.floor(Math.random() * mockGoodsIdList.length)];

                this.$router.push({path: "/mall/app/detail", query: {goodsId: mockGoodsId}})
            },
            loadGoodsImage(){
                window.console.log("图片加载完毕!")
            }
        },
        filters:{
            // 过滤长标题
            cutTitle(title){
                if(title.length >10){
                    return title.substring(1,10) + "..."
                }
            },
        }
    }
</script>

<style scoped>
    .goodsItem {
        width: 48%;
        height: 300px;
    }

    .goodsItem img {
        padding: 3px;
        width: 100%;
        height: 85%;
        border-radius: 10px;

    }

    .goodsInfo {
        text-align: center;
        font-size: 12px;
    }

    .price {
        color: #ff5777;
        margin-right: 5px;
    }

</style>

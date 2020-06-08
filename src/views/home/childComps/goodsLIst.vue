<template>
    <div class="goodsLIst">
        <div class="goodsItem">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/200509_561i78e2d2hebc64621a8h0bf3jle_634x1058.jpg_999x999.v1c0.81.webp"/>
            <div class="goods-info">
                <p>标题</p>
                <span>价格</span>
                <span>✨星星</span>
            </div>
        </div>
        <div class="goodsItem">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/200509_561i78e2d2hebc64621a8h0bf3jle_634x1058.jpg_999x999.v1c0.81.webp"/>
            <div class="goods-info">
                <p>标题</p>
                <span>价格</span>
                <span>✨星星</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "goodsLIst",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .goodsLIst{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .goodsItem{
        display: inline-block;
        flex: 1;
        /*flex-direction: column;*/
        width: 60px;
        height: 270px;
    }
    .goodsItem img{
        padding: 3px;
        width: 100%;
        height: 100%;
        border-radius: 10px;

    }


</style>

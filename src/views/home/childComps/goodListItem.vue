<template>
    <div class="goodsItem">
        <a :href="goods.link">
            <img :src="goods.image"/>
            <div class="goodsInfo">
                <p>{{ goods.title }}</p>
                <span class="price">{{ goods.price }}</span>
                <span class="collection">✨ {{ goods.collection }}</span>
            </div>
        </a>
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
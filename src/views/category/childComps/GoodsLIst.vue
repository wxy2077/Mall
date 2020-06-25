<template>
    <div class="goodsLIst">
        <template v-if="tabGoods">
            <good-list-item v-for="(item, index) in tabGoods.items" :goods="item" :key="index"/>
        </template>



    </div>
</template>

<script>
    import GoodListItem from './GoodListItem'

    export default {
        name: "goodsLIst",
        props: {
            tabGoods: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {}
        },
        components: {
            GoodListItem,
        }
    }
</script>

<style scoped>
    .goodsLIst {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }


</style>
